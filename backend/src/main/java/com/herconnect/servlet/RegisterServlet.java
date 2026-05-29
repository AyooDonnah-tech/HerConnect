package com.herconnect.servlet;

import com.herconnect.config.MongoDBConnection;
import com.herconnect.util.PasswordUtils;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String role = request.getParameter("role");

        if (role == null || role.trim().isEmpty()) {
            role = "Alumni";
        }

        PrintWriter out = null;
        try {
            out = response.getWriter();
            if (name == null || name.trim().isEmpty() ||
                email == null || email.trim().isEmpty() ||
                password == null || password.trim().isEmpty()) {
                
                out.print("{\"success\": false, \"message\": \"All fields (name, email, password) are required.\"}");
                return;
            }

            MongoDatabase database = MongoDBConnection.getDatabase();
            MongoCollection<Document> collection = database.getCollection("users");

            // Check if user already exists
            Document existingUser = collection.find(new Document("email", email)).first();
            if (existingUser != null) {
                out.print("{\"success\": false, \"message\": \"An account with this email address already exists.\"}");
                return;
            }

            // Hash the password and save the user
            String hashedPassword = PasswordUtils.hashPassword(password);
            Document userDoc = new Document("name", name)
                    .append("email", email)
                    .append("role", role)
                    .append("password", hashedPassword)
                    .append("createdAt", new Date());

            collection.insertOne(userDoc);

            // Log the user in automatically by initializing the session
            HttpSession session = request.getSession();
            session.setAttribute("email", email);
            session.setAttribute("name", name);
            session.setAttribute("role", role);

            String escapedName = name.replace("\"", "\\\"");
            String escapedEmail = email.replace("\"", "\\\"");
            out.print(String.format("{\"success\": true, \"name\": \"%s\", \"email\": \"%s\"}", escapedName, escapedEmail));
        } catch (Exception e) {
            e.printStackTrace();
            if (out == null) {
                out = response.getWriter();
            }
            String errorMsg = e.getMessage() != null ? e.getMessage().replace("\"", "\\\"") : "Unknown server error";
            out.print("{\"success\": false, \"message\": \"Server error: " + errorMsg + "\"}");
        } finally {
            if (out != null) {
                out.close();
            }
        }
    }
}
