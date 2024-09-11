<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize the email input
    $email = filter_var($_POST['EMAIL'], FILTER_VALIDATE_EMAIL);

    // Validate email format
    if ($email) {
        // The recipient's email address
        $to = "zach@kujira.co";  // Replace with your actual email
        
        // Email subject and body
        $subject = "New Form Submission";
        $message = "You have received a new email subscription: " . $email;
        
        // Headers for the email
        $headers = "From: zach@kujira.co";  // Replace with your domain

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(['success' => true, 'message' => 'Thank you!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Email sending failed.']);
        }
    } else {
        // Invalid email address
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    }
} else {
    // Handle invalid request method
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>