import { data } from "../data/data";
import { testimonials } from "../data/testimonials";
import Connect from "../constant/Connect";
import Footer from "../constant/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Products />
      <Testimonial />
      <Connect />
      <Footer />
    </main>
  );
}

function Main() {
  return (
    <section
      style={{
        backgroundImage: "url(src/assets/sofa-bg-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[55vh] p-10 md:p-32 mb-7"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl md:text-6xl text-center md:text-left bold font-oswald flex flex-col gap-8"
        data-aos="fade-right"
      >
        <span>STYLE</span>
        <span>COMFARTABLE &</span>
        <span>AFFORDABLE</span>
      </h1>

      <button
        className="border-black border md:w-auto w-full px-8 py-4 mt-8 hover:bg-black hover:text-white duration-300"
        data-aos="fade-down"
      >
        Explore Store
      </button>
    </section>
  );
}

function Section1() {
  return (
    <section className="flex md:flex-row flex-col gap-5 mb-5">
      <img src="src/assets/chair.jpg" alt="" data-aos="fade-right" />

      <div
        className="w-full bg-black p-8 md:p-28 text-white flex flex-col"
        data-aos="fade-left"
      >
        <h2 className="text-bold font-oswald text-5xl">Chair Collection !</h2>

        <p className="text-lg mt-5">Launch Offer 15% off!</p>

        <button className="bg-white text-black border px-8 py-4 mt-8 hover:bg-black hover:text-white duration-300 w-full text-center md:w-[40%]">
          View Collections
        </button>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-5 mb-5">
      <div
        className="w-full bg-black p-8 md:p-28 text-white flex flex-col"
        data-aos="fade-left"
      >
        <h2 className="text-bold font-oswald text-5xl">Modern Collection !</h2>

        <p className="text-lg mt-5">New Season Stock</p>

        <button className="bg-white text-black border px-8 py-4 mt-8 hover:bg-black hover:text-white duration-300 w-full text-center md:w-[40%]">
          View Collections
        </button>
      </div>

      <img
        src="src/assets/wooden-chair-collections.jpg"
        alt=""
        data-aos="fade-right"
      />
    </section>
  );
}

function Section3() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly mb-6 gap-5">
      <div
        className="justify-center flex flex-col items-center"
        data-aos="fade-up"
      >
        <i className="fa-solid fa-briefcase text-6xl hover:text-red-500 duration-200"></i>
        <p className="font-semibold">10 Years Experience</p>
      </div>
      <div
        className="justify-center flex flex-col items-center "
        data-aos="fade-up"
      >
        <i className="fa-solid fa-truck text-6xl hover:text-red-500 duration-200"></i>
        <p className="font-semibold">Flexible Delivery</p>
      </div>
      <div
        className="justify-center flex flex-col items-center "
        data-aos="fade-up"
      >
        <i className="fa-solid fa-hammer text-6xl hover:text-red-500 duration-200"></i>
        <p className="font-semibold">Free Installation</p>
      </div>
      <div
        className="justify-center flex flex-col items-center "
        data-aos="fade-up"
      >
        <i className="fa-solid fa-headset text-6xl hover:text-red-500 duration-200"></i>
        <p className="font-semibold">After Sales Support</p>
      </div>
      <div
        className="justify-center flex flex-col items-center "
        data-aos="fade-up"
      >
        <i className="fa-solid fa-calendar-days text-6xl hover:text-red-500 duration-200"></i>
        <p className="font-semibold">5 Years Warranty</p>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section
      className="flex flex-col gap-6 p-10 md:p-24 bg-[#f0f0f0] mb-6"
      data-aos="fade-left"
    >
      <h2 className="text-5xl font-bold text-amber-800">Sale!</h2>
      <p>10% Off On All Products!</p>
      <button className="bg-white text-black border px-8 py-4 mt-8 hover:bg-black hover:text-white duration-300 w-full md:w-[20%]">
        View Collections
      </button>
    </section>
  );
}

function Products() {
  const firstFour = data.slice(0, 6);

  return (
    <section className="flex flex-col items-center justify-center mb-10">
      <h2 className="text-center text-3xl" data-aos="fade-down">
        Our Latest Products
      </h2>
      <div className="w-[20%] h-[1px] bg-black"></div>

      <div className="my-12 flex justify-center flex-wrap">
        <div className="flex flex-wrap justify-center gap-12">
          {firstFour.map((product) => (
            <div
              className="mx-8 h-80 w-72 md:w-80 hover:cursor-pointer"
              key={product.id}
              data-aos="fade-right"
            >
              {/* Image */}
              <div
                className="w-full h-64 bg-red-600 hover:scale-105 duration-300"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Text */}
              <div className="px-3 mt-5">
                <p className="font-oswald font-thin">{product.category}</p>
                <p className="font-thin">{product.title}</p>
                <p className="font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section
      style={{
        backgroundImage:
          "url(src/assets/tetimonialsbg.822d734aab19b2d46eb1.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center mb-8"
    >
      <h2 className="text-center text-4xl " data-aos="fade-down">
        Testimonials
      </h2>
      <div className="w-[20%] h-[1px] bg-black"></div>

      <div className="flex flex-col md:flex-row justify-between mt-6 p-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-right"
            className="basis-[30%] p-4"
          >
            <p className="text-xl text-center">{testimonial.comment}</p>

            <div className="flex items-center justify-center gap-6 mt-4">
              <div
                className="md:w-24 md:h-24 w-12 h-12 rounded-full bg-red-900"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-2xl font-bold">{testimonial.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
