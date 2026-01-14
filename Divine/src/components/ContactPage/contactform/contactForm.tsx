import { useState } from "react";



export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;



  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      uploadPreset || ""
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    let uploadedImageUrl = "";

    const imageFile = form.img?.files?.[0];
    if (imageFile) {
      uploadedImageUrl = await uploadImage(imageFile);
    }

    const formData = new FormData();
    formData.append("firstname", form.firstname.value);
    formData.append("lastname", form.lastname.value);
    formData.append("email", form.email.value);
    formData.append("mobile", form.mobile.value);
    formData.append("plan", form.plan.value);
    formData.append("message", form.message.value);
    formData.append("image_url", uploadedImageUrl);

    console.log([...formData.entries()]);

    await fetch(
      "https://formsubmit.co/5e7c9b751b4f1e4be51d78f2dced928e",
      {
        method: "POST",
        body: formData,
      }
    );

    setLoading(false);
    alert("Form submitted successfully");
    form.reset();
  };

  return (
    <section className="py-20 px-10">
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
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
              className="input-field"
              required
            />
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              className="input-field"
              required
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              className="input-field"
              required
            />
          </div>
          <select name="plan" defaultValue="" className="input-field">
            <option value="" disabled>Drop your plan</option>
            <option value="Bedroom">Bedroom Interior Design</option>
            <option value="Living">Living Interior Design</option>
            <option value="Dining">Dining Interior Design</option>
            <option value="Kitchen">Kitchen Interior Design</option>
            <option value="Bathroom">Bathroom Interior Design</option>
            <option value="Shop">Shop Interior Design</option>
            <option value="Prayer">Prayer room Interior Design</option>
            <option value="Showcase">Showcase Interior Design</option>
            <option value="Others">Others</option>
          </select>



          <input type="file" alt="" name="img" className="input-field bg-white" />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="input-field resize-none"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="btn-primary px-8 py-3 rounded-xl font-semibold"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Now'}
          </button>
        </form>
      </div>
    </section>
  );
}
