import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { ContactDetail } from "../types";
import { EmailService } from "../services";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Partial<ContactDetail>) => {
    console.log("Form Submitted:", data);
    await EmailService.sendEmail(data);
    reset();
  };

  const contactBadge =
    "h-12 w-12 bg-indigo-600/10 dark:bg-gray-800 group-hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 group-hover:text-gray-100 transition-colors duration-300 rounded-full flex flex-none items-center justify-center gap-2 mt-2";
  const contactDiv =
    "flex items-center gap-4 p-6 card-animation card-level-2 hover:scale-100 group break-all";
  const inputStyle =
    "w-full p-2 mt-2 border-2 rounded-md border-indigo-400/20 focus:border-indigo-400 focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-indigo-400/40";

  return (
    <section id="contact" className="lg:h-auto xl:h-screen mt-10 p-6">
      <h2 className="line-after header text-4xl font-bold mb-10">Contact</h2>
      <p className="description">
        Let's connect and create something amazing together.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <div className="rounded-xl card-color p-6 flex flex-col gap-4 mt-5 text-wrap">
          <div className={contactDiv}>
            <div className={contactBadge}>
              <FaMapMarkerAlt className="h-5 w-5 " />
            </div>
            <div>
              <h4 className="header text-lg font-bold dark:text-white">
                Location
              </h4>
              <p className="description">Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          <div className={contactDiv}>
            <div className={contactBadge}>
              <FaEnvelope className="h-5 w-5" />
            </div>
            <div>
              <h4 className="header text-lg font-bold dark:text-white">
                Email
              </h4>
              <a href="mailto:hvkvishnukumar11@gmail.com" className="link-line">
                hvkvishnukumar11@gmail.com
              </a>
            </div>
          </div>

          <div className={contactDiv}>
            <div className={contactBadge}>
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="header text-lg font-bold dark:text-white">
                LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/vishnukumarh20/"
                target="_blank"
                className="link-line"
              >
                linkedin.com/in/vishnukumar20
              </a>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-52"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76339.33151915735!2d76.92366406394247!3d11.044147265914344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1742723890116!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="rounded-xl card-color p-6 flex flex-col gap-4 mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-base header font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className={inputStyle}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>
              <div>
                <label className="text-base header font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className={inputStyle}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    Valid email is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-base header font-semibold">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("subject", { required: true })}
                className={inputStyle}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">Subject is required</p>
              )}
            </div>

            <div>
              <label className="text-base header font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                className={`${inputStyle} h-32`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">Message is required</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-indigo-600 transition duration-200"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
