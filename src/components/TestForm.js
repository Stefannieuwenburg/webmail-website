function ContactForm() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-primary-300">
            Vul het onderstaande formulier in om contact met me op te nemen.
          </p>
        </div>

        {/* Flex container voor afbeelding en formulier */}
        <div className="flex flex-row items-start space-x-6">
          {/* Afbeeldingsectie */}
          <div className="w-1/2">
            <div className="shadow-lg">
              <img
                className="rounded-lg w-full"
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                alt="Achtergrond afbeelding"
              />
            </div>
          </div>

          {/* Formuliersectie */}
          <div className="w-1/2 flex flex-col justify-start">
            <form
              action="https://formsubmit.co/3dd4cf47ae9aa7fa832ab99a96c0c464"
              method="POST"
              className="flex flex-col"
            >
              <input
                type="text"
                name="name"
                placeholder="Voer je naam in"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Voer je e-mailadres in"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Voer je bericht in"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="text-white bg-primary-300 px-8 py-2 mt-4 self-start rounded-md hover:scale-110 duration-300"
              >
                Verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
