export default function ContactForm() {
  return (
    <section className="py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-(--secondaryColor) text-4xl md:text-5xl font-bold">
          Contact Form
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dez4snjqf/image/upload/v1767332626/contactimg_u3rf6c.png"
            alt="Contact"
            className="w-full h-96 rounded-2xl object-cover"
          />
        </div>

        {/* Form */}
        <form className="w-full space-y-6" action="https://formsubmit.co/5e7c9b751b4f1e4be51d78f2dced928e" method="POST">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
              className="input-field"
            />
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-field"
            />
            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              className="input-field"
            />
          </div>
          <select name="plan" id="" className="input-field">
            <option value="" selected disabled>Drop your plan</option>
            <option value="">Bedroom Interior Design</option>
            <option value="">Living Interior Design</option>
            <option value="">Dining Interior Design</option>
            <option value="">Kitchen Interior Design</option>
            <option value="">Bathroom Interior Design</option>
            <option value="">Shop Interior Design</option>
            <option value="">Prayer room Interior Design</option>
            <option value="">Showcase Interior Design</option>
            <option value="">Others</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="input-field resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="btn-primary px-8 py-3 rounded-xl font-semibold"
          >
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
}
