"use client";
import { CheckboxGroup } from "@/Components/CheckBox";
import { Dropdown } from "@/Components/Dropdown";
import InputField from "@/Components/FormInput";
import { TextArea } from "@/Components/Textarea";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";

import {
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaIndustry,
  FaCommentDots,
  FaBullhorn,
} from "react-icons/fa";

interface FormData {
  fullName?: string;
  companyName?: string;
  title?: string;
  email?: string;
  phone?: string;
  acufi?: string;
  industry?: string;
  interest?: string[];
  referrals?: string;
  message?: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  title?: string;
  email?: string;
  phone?: string;
  acufi?: string;
}

export default function LeadDemoSection() {
  const [formData, setFormData] = useState<FormData>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (
      !formData.fullName ||
      formData.fullName.trim().length < 2 ||
      formData.fullName.trim().length > 50
    ) {
      errors.fullName =
        "Please enter your full name between 2 to 50 characters.";
    }

    if (
      !formData.companyName ||
      formData.companyName.trim().length < 2 ||
      formData.companyName.trim().length > 50
    ) {
      errors.companyName =
        "Please enter your company name between 2 to 50 characters.";
    }

    if (!formData.title || !/^[A-Za-z\s]{2,50}$/.test(formData.title)) {
      errors.title =
        "Please enter your designation (letters only, 2–50 characters).";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email =
        "Please enter a valid email address (e.g., name@example.com).";
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone =
        "Please enter a valid 10-digit phone number without spaces or symbols.";
    }

    if (!formData.acufi) {
      errors.acufi =
        "Please select either 'Yes' or 'No' to confirm your messaging preference.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const TOTAL_SEATS = 50;
  const [seatsLeft, setSeatsLeft] = useState<number>(TOTAL_SEATS);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getNextResetTime = () => {
    const now = moment().tz("America/Los_Angeles");
    const next = now.clone().hour(10).minute(0).second(0).millisecond(0);

    // Tuesday = 2, Thursday = 4
    const day = now.day();
    if (day < 2) {
      next.add(2 - day, "days");
    } else if (day === 2 && now.hour() >= 10) {
      next.add(2, "days"); // move to Thursday
    } else if (day > 2 && day < 4) {
      next.add(4 - day, "days");
    } else if (day === 4 && now.hour() >= 10) {
      next.add(5, "days"); // move to next Tuesday
    } else if (day > 4) {
      next.add((9 - day) % 7, "days"); // next Tuesday
    }

    return next;
  };

  // Initialize seats & timer
  useEffect(() => {
    const savedSeats = localStorage.getItem("demoSeatsLeft");
    const savedReset = localStorage.getItem("demoNextReset");

    let nextReset = savedReset ? moment(savedReset) : getNextResetTime();

    if (moment().isAfter(nextReset)) {
      nextReset = getNextResetTime();
      localStorage.setItem("demoNextReset", nextReset.toISOString());
      localStorage.setItem("demoSeatsLeft", TOTAL_SEATS.toString());
      setSeatsLeft(TOTAL_SEATS);
    } else {
      setSeatsLeft(savedSeats ? parseInt(savedSeats, 10) : TOTAL_SEATS);
    }

    const interval = setInterval(() => {
      const now = moment();
      const diff = moment.duration(nextReset.diff(now));

      if (diff.asMilliseconds() <= 0) {
        nextReset = getNextResetTime();
        localStorage.setItem("demoSeatsLeft", TOTAL_SEATS.toString());
        localStorage.setItem("demoNextReset", nextReset.toISOString());
        setSeatsLeft(TOTAL_SEATS);
      }

      setTimeLeft({
        days: String(Math.floor(diff.asDays())).padStart(2, "0"),
        hours: String(diff.hours()).padStart(2, "0"),
        minutes: String(diff.minutes()).padStart(2, "0"),
        seconds: String(diff.seconds()).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Decrease seats when form submitted successfully
  const reduceSeatCount = () => {
    const updated = Math.max(seatsLeft - 1, 0);
    setSeatsLeft(updated);
    localStorage.setItem("demoSeatsLeft", updated.toString());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const [firstName, ...rest] = (formData.fullName || "").split(" ");
      const lastName = rest.join(" ");

      const payload = {
        formCategory: "AcuCheck",
        formSubCategory: "SignUp",
        formData: {
          fullName: formData.fullName || "",
          firstName: firstName || "",
          lastName: lastName || "",
          email: formData.email || "",
          phoneNumber: formData.phone || "",
          yourMessage: formData.message || "",
          industry: formData.industry || "",
          interest: selectedInterests.join(", "),
          radio201: formData.acufi || "",
          referrals: formData.referrals || "",
        },
        referralCode: "R0xPNTE2NzE=",
        leadId: "lead_demo_001",
        product: "AcuCheck",
        command: "submit",
        sourceIP: typeof window !== "undefined" ? window.location.hostname : "",
        userAgent:
          typeof navigator !== "undefined" ? navigator.userAgent : "server",
      };

      const res = await fetch(
        "https://dev-acuadmin-backend.azurewebsites.net/webhook/v1/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "2c5421e7-af5d-4dcb-9ec9-a4d2f1980a0a",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setModalType("success");
        setModalMessage(data.message || "Form submitted successfully!");
        reduceSeatCount();
        setModalOpen(true);
        setFormData({});
        setSelectedInterests([]);
      } else {
        setModalType("error");
        setModalMessage(
          data.message || "Something went wrong, please try again."
        );
        setModalOpen(true);
      }
    } catch (err) {
      console.error(err);
      setModalType("error");
      setModalMessage("Something went wrong, please try again.");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-[100%] overflow-hidden flex justify-center items-center flex-col mt-[80px] md:mt-[40px]">
      <video
        className="absolute top-0 left-0 object-cover h-[100%] md:h-100% w-[100%]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/acucheck-lead-video.webm" type="video/webm" />
      </video>

      <div className="relative z-10 flex items-center justify-center flex-col">
        <div className="relative w-full mx-auto text-center z-10 mt-8 md:mt-16">
          <h1 className="text-black text-[30px] md:text-[41px] font-bold leading-tight mb-2 max-w-4xl">
            AcuCheck – Smarter lending with Real-Time Financial Insights
          </h1>
          <div className="text-[#000000CC] text-[20px] opacity-[60%] mb-6">
            Banking Data on Steroids. More Approvals. Fewer Defaults.
          </div>
        </div>
        {/* Watch AcuCheck Button */}
        <div className="flex justify-center items-center mb-6">
          <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-white text-[#1485F5] font-semibold rounded-full px-5 py-2 shadow-md hover:shadow-lg transition duration-300"
          >
            <span className="flex items-center justify-center ">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.898438 9.87856V16.1358C0.898438 18.2104 3.17427 19.5208 5.02709 18.514L7.90377 16.9495M0.898438 6.28609V3.62137C0.898438 1.54671 3.17427 0.236355 5.02709 1.24315L16.5338 7.50124C16.9652 7.73063 17.326 8.07307 17.5776 8.49185C17.8292 8.91064 17.9621 9.39 17.9621 9.87856C17.9621 10.3671 17.8292 10.8465 17.5776 11.2653C17.326 11.6841 16.9652 12.0265 16.5338 12.2559L10.7804 15.3849"
                  stroke="black"
                  strokeWidth="1.79624"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent font-extrabold pl-3 text-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, #00AAD6, #0062FF)",
            }}
          >
            Watch AcuCheck
          </span>
        </div>
        <object
          type="image/svg+xml"
          data="/lefticon.svg"
          aria-label="Left Animated Icons"
          className="hidden md:block absolute xl:left-[-120] xl:top-[170px] w-[180px] z-20 pointer-events-none lg:left-[-38] lg:top-[243] md:w-[78px]  md:left-[16px] md:top-[231px] lg:w-[180px]"
        >
          Icon
        </object>
        <object
          type="image/svg+xml"
          data="/righticon.svg"
          aria-label="Right Animated Icons"
          className="hidden md:block absolute xl:right-[-120] xl:top-[170px] w-[180px] z-20 pointer-events-none lg:right-[-38] lg:top-[243] md:w-[78px]  md:right-[16px] md:top-[231px] lg:w-[180px]"
        >
          Icon
        </object>

        <div className="relative w-full flex flex-col items-center z-10 mt-11 md:mt-4 mb-6">
          <div className="relative bg-[#1485F5] bg-opacity-80 rounded-xl shadow-lg w-[92vw] max-w-xl mx-auto px-4 py-5 flex flex-col items-center">
            <div className="font-semibold text-[#FFFFFF] text-[22px] md:text-[25px] mb-2">
              Get Your Demo. Limited Demo Spots Available!
            </div>
            <div className="text-[#FFFFFF] text-[16px] font-semibold mb-2">
              ONLY 50 SPOTS ARE AVAILABLE FOR OUR NEXT DEMO
            </div>
            <div className="bg-[#FFFFFFB2] text-[#FF4040] rounded-[5px] px-4 py-2 text-[16px] font-bold mb-6">
              Just {seatsLeft} Seats Left!
            </div>
            <div className="flex items-center justify-center gap-6 mb-2">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white digital-clock-numbers text-[#000000] font-bold text-xl md:text-2xl rounded-[3px] px-3 py-2 md:px-7 md:py-4 min-w-[20px] md:min-w-[52px] text-center">
                    {Object.values(timeLeft)[idx]}
                  </div>
                  <span className="text-[16px] text-[#FFFFFF] mt-2">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("demo-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black cursor-pointer text-white font-semibold rounded-[50px] px-6 py-3 text-sm md:text-base mt-2 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)]"
            >
              Get Your Spot Now
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div
          id="demo-form"
          className="relative w-full flex flex-col items-center z-10 mt-4 pb-[20px]"
        >
          <div className="relative bg-[#cae4fe] bg-opacity-90 rounded-xl shadow-lg max-w-lg w-[100vw] mx-auto px-4 py-6 md:px-8 md:py-8">
            <div className="absolute -top-8 right-[-23] md:right-[-80] z-20">
              <div className="flex items-center justify-end">
                <object
                  type="image/svg+xml"
                  data="/AcuCheckLogo.svg"
                  className="w-30 h-30 md:w-44 md:h-44"
                  aria-label="AcuView Badge"
                >
                  Icon
                </object>
              </div>
            </div>

            <form
              noValidate
              className="flex flex-col gap-3 max-w-4xl bg-[#cae4fe]"
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[25px] mb-1 text-black mt-4 sm:mt-0">
                Tell Us About Yourself
              </div>
              <div className="text-gray-600 text-[16px] mb-2 font-bold">
                We are here to help you
              </div>
              <div className="flex items-start gap-2 flex-col">
                <InputField
                  label="Full Name"
                  name="fullName"
                  // icon={FaUser}
                  required
                  value={formData.fullName}
                  maxLength={50}
                  // error={errors.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 flex-col">
                  <InputField
                    label="Company Name"
                    name="companyName"
                    required
                    // icon={FaBuilding}
                    value={formData.companyName}
                    maxLength={50}
                    // error={errors.companyName}
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                  />
                  {formErrors.companyName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.companyName}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-2 flex-col">
                  <InputField
                    label="Designation"
                    name="title"
                    required
                    // icon={FaBriefcase}
                    value={formData.title}
                    // error={errors.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                  {formErrors.title && (
                    <p className="text-red-500 text-sm">{formErrors.title}</p>
                  )}
                </div>
                <div className="flex items-start gap-2 flex-col">
                  <InputField
                    label="Business Email"
                    name="email"
                    type="email"
                    // icon={FaEnvelope}
                    required
                    value={formData.email}
                    // error={errors.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
                <div className="flex items-start gap-2 flex-col">
                  <InputField
                    label="Phone Number"
                    name="phone"
                    required
                    // icon={FaPhone}
                    value={formData.phone}
                    // error={errors.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Dropdown
                  label="Industry"
                  name="industry"
                  // icon={FaIndustry}
                  options={[
                    { label: "Finance", value: "finance" },
                    { label: "Micro-Lending", value: "micro-lending" },
                    { label: "BNLP (buy now pay later)", value: "bnlp" },
                    { label: "Payday Loans", value: "payday-loans" },
                    { label: "Credit Unions", value: "credit-unions" },
                    {
                      label: "Alternative Lending",
                      value: "alternative-lending",
                    },
                    { label: "Other", value: "other" },
                  ]}
                  value={formData.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                />
              </div>

              <CheckboxGroup
                label="Interested In:"
                name="interest"
                options={[
                  { label: "Loan Stacking Prevention", value: "loan-stacking" },
                  {
                    label: "Borrower Identity & Fraud Detection",
                    value: "fraud-detection",
                  },
                  { label: "General Inquiry", value: "general-inquiry" },
                  {
                    label: "Compliance & Risk Assessment",
                    value: "compliance-risk",
                  },
                ]}
                value={selectedInterests}
                onChange={setSelectedInterests}
              />

              <div className="flex items-center gap-2">
                <TextArea
                  label="Your Question"
                  name="message"
                  // placeholder="Type your message"
                  // icon={FaCommentDots}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Dropdown
                  label="How Did You Hear About Us?"
                  name="referrals"
                  options={[
                    { label: "Google", value: "google" },
                    { label: "Linkedin", value: "linkedin" },
                    { label: "Referral", value: "Referral" },
                    { label: "Industry Event", value: "IndustryEvent" },
                    { label: "Other", value: "Other" },
                  ]}
                  // icon={FaBullhorn}
                  value={formData.referrals}
                  onChange={(e) => handleChange("referrals", e.target.value)}
                />
              </div>

              <CheckboxGroup
                label="By providing your phone number and checking this box, you agree to receive account-related SMS messages from AcuFi. Message frequency varies. Reply STOP to unsubscribe. Standard message and data rates may apply."
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
              {formErrors.acufi && (
                <p className="text-red-500 text-sm">{formErrors.acufi}</p>
              )}

              <div className="flex justify-end items-end w-[100%]">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#5983E2] text-white rounded-[50px] px-7 py-3 font-semibold text-base mt-2 cursor-pointer"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              <div className="text-[12px] text-[#1A1A1A] mt-2">
                By submitting this form, I confirm that I have read and
                understood AcuFi&apos;s{" "}
                <a href="#" className="underline">
                  Privacy Statement.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center pointer-events-auto">
            <h2
              className={`text-lg font-semibold mb-4 ${
                modalType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalType === "success" ? "Success!" : "Error!"}
            </h2>
            <p className="mb-6">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold cusror-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
