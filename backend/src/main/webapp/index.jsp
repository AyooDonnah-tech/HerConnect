<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>HerConnect Backend API</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #F8F9FA;
            color: #2D3748;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            text-align: center;
            max-width: 400px;
        }
        h1 {
            color: #7B61A8;
            margin-top: 0;
            font-size: 24px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            color: #718096;
        }
        .status {
            display: inline-block;
            background-color: #DEF7EC;
            color: #03543F;
            padding: 4px 12px;
            border-radius: 100px;
            font-weight: 600;
            font-size: 14px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>HerConnect Backend API</h1>
        <p>The backend API server is running successfully. Connect your frontend application to access user services.</p>
        <span class="status">Online</span>
    </div>
</body>
</html>
