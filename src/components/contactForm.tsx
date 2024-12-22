import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbMessageFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic, e.g., send data to an API endpoint
  };

  return (
    <div
      className={`w-[48%] p-6 ${
        isDarkmode ? "bg-slate-900" : "bg-purple-100"
      } rounded-s-md`}
    >
      {/* <h2 className={``}>Contact Us</h2> */}
      <p
        className={`w-full text-center ${
          isDarkmode ? "text-purple-500" : "text-purple-700"
        } my-2 `}
      >
        I am here for you. How can I help?{" "}
      </p>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-y-3`}>
        <div
          className={`w-full flex items-center gap-x-2 borders py-1 shadow-md ${
            isDarkmode
              ? "bg-slate-800 text-purple-500 border-purple-500 shadow-black"
              : "bg-white text-purple-700 border-purple-700"
          } rounded px-2 `}
        >
          <label htmlFor="name" className={`text-xl`}>
            <FaUserAlt />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={`w-full outline-none bg-transparent border-none p-2`}
          />
        </div>

        <div
          className={`w-full flex items-center gap-x-2 borders py-1 shadow-md ${
            isDarkmode
              ? "bg-slate-800 text-purple-500 border-purple-500 shadow-black"
              : "bg-white text-purple-700 border-purple-700"
          } rounded px-2`}
        >
          <label htmlFor="phone" className={`text-2xl`}>
            <MdLocalPhone />
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            className={`w-full outline-none bg-transparent border-none p-2`}
          />
        </div>

        <div
          className={`w-full flex items-center gap-x-2 borders py-1 shadow-md ${
            isDarkmode
              ? "bg-slate-800 text-purple-500 border-purple-500 shadow-black"
              : "bg-white text-purple-700 border-purple-700"
          } rounded px-2`}
        >
          <label htmlFor="email" className={`text-2xl`}>
            <IoIosMail />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`w-full outline-none bg-transparent border-none p-2`}
          />
        </div>

        <div
          className={`w-full flex  gap-x-2 borders py-1 shadow-md ${
            isDarkmode
              ? "bg-slate-800 text-purple-500 border-purple-500 shadow-black"
              : "bg-white text-purple-700 border-purple-700"
          } rounded pl-2`}
        >
          <label htmlFor="message" className={`mt-2 text-2xl`}>
            <TbMessageFilled />
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className={`w-full h-32 outline-none bg-transparent border-none p-2`}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full my-2 flex items-center justify-center gap-x-1 font-semibold ${
            isDarkmode
              ? "bg-purple-600 hover:bg-purple-700 shadow-black"
              : "bg-purple-500 hover:bg-purple-600"
          }  text-white p-2 rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-x-95 transition-alls transition-transform`}
        >
          <RiSendPlaneFill /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
