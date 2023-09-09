import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="">
      <div
        className="flex flex-col justify-center gap-5 p-12 md:p-20"
        data-aos="fade-left"
      >
        <h4 className="text-center text-4xl">Have Questions?</h4>

        <div className="flex justify-center">
          <button className="bg-red-400 py-3 px-12">Contact Us</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 md:p-12 bg-footer justify-between text-white">
        <p className="text-center">Copyright © 2023 Furniture Store</p>
        <p className="text-center">
          Made By <span className="text-blue-400">Santhosh</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
