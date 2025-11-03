"use client";
import React, { useState } from "react";

import {
  FaBuilding,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCommentDots,
  FaClock,
} from "react-icons/fa";
import InputField from "../FormInput";
import { TextArea } from "../Textarea";
import { CheckboxGroup } from "../CheckBox";
import DateTimePicker from "../DateTimePicker";

type FormData = {
  companyName: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  question: string;
  interest: string[];
  dateTime: string;
  acufi: string;
};

const GetStartedSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
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
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 w-[100%]"
      style={{
        backgroundImage: "url('/get_start_banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-center max-w-2xl px-2 py-6 md:py-0 w-[100%] md:w-[50%] mt-10">
        <h1 className="text-[#000000] text-[36px] md:text-[80px] font-extrabold leading-tight mb-4 text-start max-w-lg">
          Reach Out Today!
        </h1>
        <p className="text-[#000000CC] text-[18px] md:text-[18px] mb-6 leading-relaxed max-w-lg opacity-60">
          Whether you want to explore AcuFi&apos;s solutions, need support, or
          have specific business needs, we&apos;re here to help. Our team is
          dedicated to providing personalized guidance, ensuring you get the
          best out of our innovative neo-banking platform.
          <br />
          <br />
          Expect a fast response within 24 hours, with secure and confidential
          handling of your information, and tailored solutions designed to meet
          your business needs.
          <br />
          <br />
          Let&apos;s make finance simpler, smarter, and more efficient!
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
              Get Started
            </h2>
            <p className="text-gray-500 text-sm">We are here to help you</p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <InputField
              label="Company Name"
              name="companyName"
              icon={FaBuilding}
              required
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
            />
            <InputField
              label="Full Name"
              name="fullName"
              icon={FaUser}
              required
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
            <InputField
              label="Title"
              name="title"
              icon={FaBriefcase}
              required
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
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
            <TextArea
              label="Your Question"
              name="question"
              icon={FaCommentDots}
              value={formData.question}
              onChange={(e) => handleChange("question", e.target.value)}
            />
            <CheckboxGroup
              label=""
              name="interest"
              options={[
                { label: "AcuCheck", value: "acuchek" },
                { label: "AcuPay", value: "acupay" },
                { label: "AcuView", value: "acuview" },
                { label: "Neo-Banking", value: "neo-banking" },
              ]}
              value={formData.interest}
              onChange={(selected) => handleChange("interest", selected)}
            />
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="dateTime"
              >
                Select Date & Time<span className="text-red-500">*</span>
              </label>
              <DateTimePicker
                label="Choose Appointment Slot"
                dateValue={date}
                timeValue={time}
                onDateChange={setDate}
                onTimeChange={setTime}
                required
                dateIcon={<FaCalendarAlt className="text-blue-500" />}
                timeIcon={<FaClock className="text-blue-500" />}
              />
            </div>
            <div className="text-xs text-gray-500 mb-2 mt-1">
              By providing your phone number and checking this box, you agree to
              receive account-related text messages from AcuFi. Message
              frequency varies. Reply STOP to unsubscribe. Standard message and
              data rates may apply.<span className="text-red-500">*</span>
            </div>
            <CheckboxGroup
              label=""
              name="acufi"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              value={formData.acufi ? [formData.acufi] : []}
              onChange={(selected) => handleChange("acufi", selected[0] || "")}
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
              By submitting this form, I confirm that I have read and understood
              AcuFi’s{" "}
              <a href="#" className="underline">
                Privacy Statement.
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
