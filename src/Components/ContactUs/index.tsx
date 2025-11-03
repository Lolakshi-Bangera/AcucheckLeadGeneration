"use client";
import React, { useState } from "react";
import {
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
} from "react-icons/fa";
import InputField from "../FormInput";
import { TextArea } from "../Textarea";
import { CheckboxGroup } from "../CheckBox";
import SpeakToExperts from "../SpeakToExperts";

interface ContactFormData {
  companyName: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  question: string;
  interest: string[];
  dateTime: string;
  acufi: string;
}

const ContactUsSection: React.FC = () => {
  // 2️⃣ Use the typed interface for your state
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: "",
    fullName: "",
    title: "",
    email: "",
    phone: "",
    question: "",
    interest: [],
    dateTime: "",
    acufi: "",
  });

  const [loading, setLoading] = useState(false);

  // 3️⃣ Use a generic to type the field & value correctly
  const handleChange = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted!");
    }, 1200);
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/acufi-contact.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-2xl px-2 py-6 md:py-0 w-[100%] md:w-[50%] mt-10">
          <h1 className="text-[#000000] text-[36px] md:text-[80px] font-extrabold leading-tight mb-4 text-start max-w-lg">
            Let’s Connect
          </h1>
          <p className="text-[#000000CC] text-[18px] mb-6 leading-relaxed max-w-lg opacity-60">
            Have questions about our products, need assistance, or want to
            explore how AcuFi can empower your financial operations? Reach out
            to us – we&apos;re just a message away!
            <br />
            <br />
            We&apos;ll get back to you within 24 hours to help you with your
            needs.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:mt-20 w-[100%] md-[50%]">
          <div
            className="rounded-[20px] shadow-lg p-6 md:p-10 w-full max-w-lg mx-auto border border-white bg-opacity-80 backdrop-blur-md"
            style={{
              background:
                "linear-gradient(137.22deg, rgba(224, 250, 255, 0.7) 0%, rgba(243, 237, 255, 0.7) 100%)",
            }}
          >
            <div className="mb-5">
              <h2 className="font-bold text-[23px] md:text-[28px] text-gray-900 mb-1">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm">We are here to help you</p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <InputField
                label="Full Name"
                name="fullName"
                icon={FaUser}
                required
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  icon={FaEnvelope}
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      className="rounded-md border border-gray-300 px-2 py-2 w-16 bg-white"
                      defaultValue="+1"
                    >
                      <option value="+1">+1</option>
                    </select>
                    <InputField
                      name="phone"
                      value={formData.phone}
                      icon={FaPhone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <InputField
                label="Company Name"
                name="companyName"
                icon={FaBuilding}
                required
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />

              <TextArea
                label="Your Question"
                name="question"
                icon={FaCommentDots}
                value={formData.question}
                onChange={(e) => handleChange("question", e.target.value)}
              />

              <div className="text-xs text-gray-500 mb-2 mt-1">
                By providing your phone number and checking this box, you agree
                to receive account-related text messages from AcuFi. Message
                frequency varies. Reply STOP to unsubscribe. Standard message
                and data rates may apply.
                <span className="text-red-500">*</span>
              </div>

              <CheckboxGroup
                label=""
                name="acufi"
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                value={formData.acufi ? [formData.acufi] : []}
                onChange={(selected) =>
                  handleChange("acufi", selected[0] || "")
                }
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#5983E2] text-white rounded-full px-7 py-2 font-semibold text-base mt-2 shadow transition hover:bg-blue-600 focus:outline-none"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              <div className="text-[12px] text-[#1A1A1A] mt-2">
                By submitting this form, I confirm that I have read and
                understood AcuFi’s{" "}
                <a href="#" className="underline">
                  Privacy Statement.
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SpeakToExperts/>
    </>
  );
};

export default ContactUsSection;
