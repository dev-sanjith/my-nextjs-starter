import { useState } from "react";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xanbeged", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setErrorMsg("Failed to submit. Try again.");
      }
    } catch {
      setErrorMsg("Failed to submit. Try again.");
    }
    setSubmitting(false);
  };

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-12">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6 md:gap-20">
        {/* CONTACT FORM */}
        <div className="bg-[#f5f8fa] rounded-xl shadow-xl px-6 py-8 md:px-10 md:py-12 w-full max-w-xs md:max-w-[420px] flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3 leading-tight tracking-tight">
            LET&apos;S TALK ABOUT <br />YOUR PROJECT
          </h2>
          <p className="text-sm text-gray-700 text-center mb-6">
            We are ready to discuss the details of your project and answer any of your questions – just fill out the form
          </p>
          {success ? (
            <div className="text-green-600 text-center font-semibold py-4">Thank you! We&apos;ll be in touch soon.</div>
          ) : (
            <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border rounded px-4 py-2 text-sm"
                required
                disabled={submitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border rounded px-4 py-2 text-sm"
                required
                disabled={submitting}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border rounded px-4 py-2 text-sm"
                disabled={submitting}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border rounded px-4 py-2 text-sm min-h-[60px] resize-none"
                required
                disabled={submitting}
              />
              <button
                type="submit"
                className="bg-cyan-400 text-black font-bold px-8 py-2 rounded hover:bg-cyan-500 transition text-base mt-2 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "SENDING..." : "SEND →"}
              </button>
              {errorMsg && (
                <div className="text-red-600 text-xs text-center mt-2">{errorMsg}</div>
              )}
            </form>
          )}
        </div>
        {/* CONTACT INFO */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start mt-6 md:mt-0">
          <div className="w-full max-w-xs md:max-w-none">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center md:text-left">Get in touch with us!</h3>
            <p className="text-base text-white mb-4 max-w-md text-center md:text-left">
              We&apos;ll send you epic updates, event information, franchising options and a lot more!
            </p>
            <div className="text-white text-sm mb-2 text-center md:text-left">
              <span className="font-semibold">Address: </span>
              No. 17, North Railway Terminus Road, Royapuram, Chennai, Tamil Nadu, India – 600 013,
            </div>
            <div className="text-white text-sm mb-2 text-center md:text-left">
              <span className="font-semibold">Phone: </span>
              <span className="text-cyan-400">+91 875449924 | +91 812459403</span>
            </div>
            <div className="text-white text-sm text-center md:text-left">
              <span className="font-semibold">Email: </span>
              <span className="text-cyan-400">info@virtlens.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
