
import Image from "next/image";
import "../../app/globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
 
export default function UnderRenovation() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-[white]">
        <Image
          src="/under-renovation.svg"
          alt="Under Renovation"
          width={500}
          height={500}
          priority
        />
      </div>
      <Footer />
    </>
  );
}
 