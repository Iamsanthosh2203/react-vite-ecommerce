import Footer from "../constant/Footer";
import { data } from "../data/data";

function Sofa() {
  return (
    <>
      <SofaProducts />
      <Footer />
    </>
  );
}

function SofaProducts() {
  const sofaProducts = data.filter((product) => product.category === "Sofa");

  return (
    <section className="flex flex-col items-center justify-between mb-10">
      <h2 className="text-center text-3xl">Our Latest Products</h2>
      <div className="w-[20%] h-[1px] bg-black"></div>

      <div className="my-12 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {sofaProducts.map((product) => (
            <div
              className="mx-8 h-80 w-64 md:w-80 hover:cursor-pointer my-8"
              key={product.id}
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

export default Sofa;
