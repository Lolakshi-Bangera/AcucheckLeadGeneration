import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const icons = [
    {
      href: "https://www.linkedin.com/company/acu-fi/",
      icon: <FaLinkedin className="text-[#0A66C2]" size={22} />,
    },
    {
      href: "https://x.com/acu_fi",
      icon: <FaXTwitter className="text-black" size={22} />,
    },
    {
      href: "https://www.youtube.com/@AcuFi_Official",
      icon: <FaYoutube className="text-[#FF0000]" size={22} />,
    },
  ];
  return (
    <>
      <footer className="bg-[#011634] text-gray-300 px-6 md:px-12 py-12 sm:pt-40 rounded-t-[22px] relative top-[-19px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start md:items-start justify-start lg:justify-center">
            <Image
              src="/AcuCheckFooterLogo.png"
              alt="AcuFi Logo"
              width={260}       
              height={130}
              className="object-contain  xl:mt-[-40]"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="https://acufi.com/about-us/" className="underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://acufi.com/contact/" className="underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="https://acufi.com/acufi-consumer-service-center/"
                  className="underline"
                >
                  Acufi Consumer Reporting Agency
                </Link>
              </li>
              <li>
                <Link
                  href="https://acufi.com/privacy-policy/"
                  className="underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mb-2">Newsletter Sign up</h3>
            <p className="text-sm mb-2">
              Stay Updated on the Future of Neo Banking
            </p>
            <Link href="#" className="hover:underline text-sm">
              CTA — Subscribe Now!
            </Link>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <p className="text-[15px] md:text-[15px]">Email: sales@acufi.com</p>
            <p className="text-[15px] md:text-[15px]">Phone: +1-866-711-4350</p>
            <p className="text-[15px] md:text-[15px]">Address: 4864 Sparks Blvd, Nevada, 89436</p>
            <div>
              <h3 className="font-semibold mt-6 mb-2">Follow us</h3>
              <div className="flex gap-4 mt-3">
                {icons.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm text-[#37404C] bg-white py-3">
        © 2025 All Rights Reserved
      </div>
    </>
  );
}
