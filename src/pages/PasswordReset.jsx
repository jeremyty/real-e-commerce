import { Button, Form } from "react-bootstrap";

export default function PasswordReset() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      const response = await fetch(
        "https://real-e-commerce.vercel.app/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        // Password reset link sent successfully
        console.log("Password reset link sent to", email);
        // You might redirect the user to a confirmation page here
      } else {
        // Handle error cases
        const errorData = await response.json();
        console.error("Failed to send reset link:", errorData.message);
        // Display an error message to the user
      }
    } catch (error) {
      console.error("Error sending reset link:", error.message);
      // Handle network or other unexpected errors
    }
  };

  return (
    <div>
      <h2>Forgot Your Password?</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}
