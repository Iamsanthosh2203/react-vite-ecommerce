function Nav() {
  return (
    <nav className="block md:flex justify-center md:justify-between items-center mb-10">
      <div className="flex justify-center gap-6 items-center">
        <a href="/">
          <img width={"150px"} src="src/assets/logo.jpg" alt="logo" />
        </a>
        <ul className="hidden md:flex gap-12 font-oswald font-thin">
          <li>
            <a href="react-vite-ecommerce/products">All Products</a>
          </li>
          <li>
            <a href="/sofa">Sofa</a>
          </li>
          <li>
            <a href="/chair">Chair</a>
          </li>
          <li>
            <a href="/table">Table</a>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <i className="fa-solid fa-cart-shopping text-4xl"></i>
      </div>

      <div className="w-full flex md:hidden">
        <ul className="flex w-full justify-between md:hidden font-oswald font-thin">
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a href="/sofa">Sofa</a>
          </li>
          <li>
            <a href="/chair">Chair</a>
          </li>
          <li>
            <a href="/table">Table</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
