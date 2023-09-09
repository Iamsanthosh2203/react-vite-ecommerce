import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Connect() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2021/01/footer-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col justify-center items-center bg-red-500 p-12 md:p-36 gap-8"
    >
      <h3 className="text-2xl text-white" data-aos="fade-up">
        Connect with us!
      </h3>

      <div
        className="flex flex-wrap justify-center gap-5 text-4xl text-white"
        data-aos="fade-down"
      >
        <i className="fab fa-facebook text-blue-500 hover:text-blue-700 duration-200"></i>
        <i className="fab fa-instagram text-pink-500 hover:text-pink-700 duration-200"></i>
        <i className="fab fa-twitter text-blue-400 hover:text-blue-600 duration-200"></i>
        <i className="fab fa-youtube text-red-500 hover:text-red-700 duration-200"></i>
        <i className="fab fa-linkedin text-indigo-500 hover:text-indigo-700 duration-200"></i>
        <i className="fab fa-pinterest text-red-600 hover:text-red-800 duration-200"></i>
      </div>
    </div>
  );
}

export default Connect;
