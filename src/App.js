import React from "react";
import ContactForm from "./ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header className="container mt-10">
        <p className="text-start mt-10">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </p>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
