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
      <Link to="/register">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      </Link>
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

function HomeSection1() {
  return (
    <section className="intro">
      <h1>Fresh and Authentic</h1>
      <p>
        We use the freshest ingredients, and the most authentic cooking methods.
        <br />
        有多新鲜呢？我们的牛肉尝起来和您追着一头活蹦乱跳的牛生啃没有区别！
        我们的蔬菜都是在自家菜地里洗完再采直接入锅的！
        咱家的厨师刚出生就被送到新东方烹饪学校。
        精修30年造就一身颠锅必备腱子肉，极其挑剔的味蕾以及精湛无比的烹饪水平。
        咱店的菜道道精品！
      </p>
    </section>
  );
}

function HomeSection2() {
  return (
    <div className="content">
      <div className="home-image">
        <div className="dummy-image">Image</div>
      </div>
      <div className="divider"></div>
      <div className="home-text1">
        <h2>招牌 | Best Seller</h2>
        <p>jasdhfaljgalsdnflasjdh FOLLOW JUNG WHEEIN PLEASE</p>
      </div>
    </div>
  );
}

function HomeSection3() {
  return (
    <div className="home-section3">
      <div className="options-row">
        <span>option</span>
        <span>option</span>
        <span>option</span>
        <span>option</span>
        <span>option</span>
      </div>

      <div className="option-content">
        <div className="options-col">
          <span>option</span>
          <span>option</span>
          <span>option</span>
        </div>
        <div className="content-boxes">
          <div className="static-content">Static Content</div>
          <div className="content-connector"></div>
          <div className="dynamic-content">Dynamic Content</div>
        </div>
      </div>
    </div>
  );
}

function HomeSection4() {
  return (
    <><div className="home-section4">
      <div className="home-section4-text">
        <h2>丁辉人</h2>
        <div className="underline-p">
          <p>JUNG WHEEIN MY BELOVED ♥ </p>
        </div>
      </div>
      <div className="home-section4-divider"></div>
      <div className="home-section4-social">
        <h3>Social</h3>
        <div className="home-social-icons">
          <span role="img" aria-label="user">
            🦋
          </span>
          <span role="img" aria-label="user">
            🐕
          </span>
          <span role="img" aria-label="user">
            (●'◡'●)
          </span>
          <span role="img" aria-label="user">
            🍃
          </span>
        </div>
      </div>
    </div><iframe style={{"border-radius":12}} src="https://open.spotify.com/embed/track/6jXJlfZ3O43XYbiIJIpVB4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></>
  );
}

export default function HomePage() {
  return (
    <div>
      <Menu />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );
}
