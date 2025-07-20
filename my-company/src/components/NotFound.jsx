import React from "react";

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or return to the homepage.</p>
      <a href="/">Go to Home</a>
    </div>
  );
}

export default NotFound;
