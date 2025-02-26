import React from "react";
import ContactForm from "./ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header className="container mt-10">
        <p className="text-start mt-10">
          I'am enjoy working on developing diverse, digital products in diverse
          environments. From setting up a project to maintaining the server, I
          am the specialist and advise our customers on technical front-end and
          back-end issues.
          <br />
          I also like to work hands-on in a Scrum team and write code myself.
          Because of my knowledge and experience I am not afraid to take
          ownership and I am able to quickly add value to the team. <br /> I
          like to share my knowledge and experience with other Developers from
          the team.
        </p>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
