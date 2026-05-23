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

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try (PrintWriter out = response.getWriter()) {
            if (email == null || email.trim().isEmpty() ||
                password == null || password.trim().isEmpty()) {
                
                out.print("{\"success\": false, \"message\": \"Email and password are required.\"}");
                return;
            }

            MongoDatabase database = MongoDBConnection.getDatabase();
            MongoCollection<Document> collection = database.getCollection("users");

            Document userDoc = collection.find(new Document("email", email)).first();

            if (userDoc == null) {
                out.print("{\"success\": false, \"message\": \"Invalid email or password.\"}");
                return;
            }

            String storedPasswordHash = userDoc.getString("password");
            if (PasswordUtils.verifyPassword(password, storedPasswordHash)) {
                String firstName = userDoc.getString("firstName");
                String lastName = userDoc.getString("lastName");
                String role = userDoc.getString("role");

                // Initialize session
                HttpSession session = request.getSession();
                session.setAttribute("email", email);
                session.setAttribute("name", firstName + " " + lastName);
                session.setAttribute("role", role);

                out.print("{\"success\": true}");
            } else {
                out.print("{\"success\": false, \"message\": \"Invalid email or password.\"}");
            }
        } catch (Exception e) {
            e.printStackTrace();
            try (PrintWriter out = response.getWriter()) {
                String errorMsg = e.getMessage().replace("\"", "\\\"");
                out.print("{\"success\": false, \"message\": \"Database error: " + errorMsg + "\"}");
            }
        }
    }
}
