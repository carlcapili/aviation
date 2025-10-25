const Contact = () => {
  return (
    <div
      className="relative h-screen bg-[#5688a8] flex flex-row space-x-20 items-center justify-center px-10"
      id="contact"
    >
      {/* Background image */}
      <img
        src="/images/wing.jpg"
        alt="wing"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left text block */}
      <div className="text-black max-w-md z-10">
        <p className="text-3xl mb-8">
          This page is for contact purposes of client to the devs / admins or
          write suggestions and comments
        </p>
      </div>

      {/* Contact form */}
      <form className="bg-white p-8 rounded shadow-md max-w-md flex-1 h-3/4 flex flex-col justify-between z-10">
        <h2 className="text-3xl font-bold text-center text-[#5688a8] mb-6">
          Contact Us
        </h2>

        <div className="flex flex-col space-y-4 flex-grow">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5688a8]"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5688a8]"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5688a8] h-full resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5688a8] text-white py-2 rounded hover:bg-[#406c85] transition duration-200 mt-6"
        >
          Send Message
        </button>
      </form>

      {/* Suggestions & Comments box */}
      <div className="bg-white p-8 rounded shadow-md max-w-md flex-1 h-3/4 flex flex-col justify-between z-10">
        <h2 className="text-2xl font-semibold text-[#5688a8] mb-4">
          Suggestions & Comments
        </h2>
        <p>
          We appreciate your feedback! Please share your suggestions or comments
          here. Your input helps us improve.
        </p>
        <textarea
          rows="8"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5688a8] flex-grow resize-none"
          placeholder="Write your suggestions or comments here..."
        ></textarea>
        <button className="w-full bg-[#5688a8] text-white py-2 rounded hover:bg-[#406c85] transition duration-200 mt-6">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
