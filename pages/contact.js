export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        action="https://formspree.io/f/xanbeged"
        method="POST"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>

        {/* Redirect to homepage after submit */}
        <input type="hidden" name="_redirect" value="/" />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
