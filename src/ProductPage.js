import { Link } from "react-router-dom";

const user = {
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/300x300/1700de73b60f411ad6bfb0c6332aed38.jpg",
  imageSize: 45,
};

function Menu() {
  /* TODO: Add slide bar effect later */
  return (
    <nav className="menu">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <div className="search-icon">🔍</div>
    </nav>
  );
}

function ProductsSection1() {
  return (
    <div className="products-section1">
      <div className="category-box">Category</div>
      <div className="category-box">Category</div>
      <div className="category-box">Category</div>
    </div>
  );
}

function ProductSection2() {
  return (
    <div className="product-section2">
      <div className="product-image">Image</div>
      <div className="product-sec2-txt">
        <h2>Product Name</h2>
        <p>Details</p>
        <p>Details</p>
        <p>Details</p>
      </div>
    </div>
  );
}

function ProductSection3() {
  return (
    <footer className="product-section3">
      <div className="product-sec3-txt">
        <h2>Title</h2>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
      <div className="product-sec3-divider"></div>
      <div className="product-sec3-social">
        <h2>Social</h2>
        <div className="social-icons">
          <span>🦋</span>
          <span>🐕</span>
          <span>(●'◡'●)</span>
          <span>🍃</span>
        </div>
      </div>
    </footer>
  );
}

export default function ProductPage() {
  return (
    <div>
      <Menu />
      <ProductsSection1 />
      <ProductSection2 />
      <ProductSection3 />
    </div>
  );
}
