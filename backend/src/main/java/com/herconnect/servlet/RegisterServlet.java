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

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String role = request.getParameter("role");
        String password = request.getParameter("password");

        try (PrintWriter out = response.getWriter()) {
            if (firstName == null || firstName.trim().isEmpty() ||
                lastName == null || lastName.trim().isEmpty() ||
                email == null || email.trim().isEmpty() ||
                password == null || password.trim().isEmpty()) {
                
                out.print("{\"success\": false, \"message\": \"All required fields must be filled.\"}");
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
            Document userDoc = new Document("firstName", firstName)
                    .append("lastName", lastName)
                    .append("email", email)
                    .append("role", role)
                    .append("password", hashedPassword)
                    .append("createdAt", new Date());

            collection.insertOne(userDoc);

            // Log the user in automatically by initializing the session
            HttpSession session = request.getSession();
            session.setAttribute("email", email);
            session.setAttribute("name", firstName + " " + lastName);
            session.setAttribute("role", role);

            out.print("{\"success\": true}");
        } catch (Exception e) {
            e.printStackTrace();
            try (PrintWriter out = response.getWriter()) {
                String errorMsg = e.getMessage().replace("\"", "\\\"");
                out.print("{\"success\": false, \"message\": \"Database error: " + errorMsg + "\"}");
            }
        }
    }
}
