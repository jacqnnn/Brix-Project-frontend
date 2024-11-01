import { Link } from "react-router-dom";
import React, { useState } from 'react';

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

//1. leetcode first
//2. finish as many features
//3. system design: learn simple stuff. aws: part of system design
//4. build own website githup dev pack VERY USEFUL!!! 
// JETBRAINS: a lot of tools, datagrip can connect all in one GUI
// digitalOcean: rent server, virtual machine (heroku is replacement of DO)
// namecheap: get own domain: jacquelyn.me :D
// Notion: save thoughts/docs/anything, very flexible
// MSAzure: replacement for aws. GCP. BEST TO LEARN AWS 
// ICONS8: find icons!!!!!!!!!!
//browserstack: use diff simulators to test
// stripe: online payment


// https://5sing.kugou.com/index.html
// https://www.heroku.com/
// for deployment deploy backend and frontend. 
// big companys will use aws. 
// basics: use aws amplify for frontend, aws lambda function for backend, API gateway(can generate url) to expose lambda function, upload local status content: s3, use route 53 to handle url
// first: leetcode: 1 question / day -> understand question, solve, look for optimization answers
// system design: questions like: how to implement twitter? NEED FOR BIG COMPANYS
// OOP
function UserSec1() {
  // SAVE PRODUCTS IN BACKEND
  // saving img is optional. but need to save url
  // save in backend and render in frontend
    const albumImages = [
        'https://preview.redd.it/mamamoo-wheein-the-2nd-mini-album-whee-main-artwork-v0-rex2uqavgtb81.jpg?width=640&crop=smart&auto=webp&s=14117af53175c3efb58292cb0fa190507d7810ac',
        'https://m.media-amazon.com/images/I/61cS9qw33eL._AC_UF894,1000_QL80_.jpg',
        'https://i.scdn.co/image/ab67616d0000b2733a3a9fc83ad7c3eb68b3064c',
        'https://i.scdn.co/image/ab67616d0000b273c8502cdee5c24e284ec657b0',
        'https://i.scdn.co/image/ab67616d0000b27336e521e6f9a52a4e6332cace',
        'https://i.scdn.co/image/ab67616d0000b27303283d5584f073727a108978',
        'https://i.scdn.co/image/ab67616d00001e022fd7578726f4b309556f52f7'
      ];

    const albumLinks = [
        'https://open.spotify.com/track/6dmRJBF95zrUIB2BXFCHDc?si=6ef7acb63d5b4c81',
        'https://open.spotify.com/album/32pXXle0zoKIFG03iefH2c?si=3w_Oxp5yTZCh6mkEV4l-VQ',
        'https://open.spotify.com/album/1EABDeQeCq83PJMBYBSXet?si=AYNTcoDJQ_S2UJEgyHi36A',
        'https://open.spotify.com/album/6RKopanQbo5q7FjwpbhfKM?si=4q2FoPslRi-azBKej63-KQ',
        'https://open.spotify.com/album/5QQf1nuuF2uSWM74TGN0F6?si=0AVBd2EtQ1m3Gq61ZAYxPg',
        'https://open.spotify.com/album/7zhSn5lo1BsHmvumiZS3qu?si=1hpqS2PsSGKaSxGL6D34Lw',
        'https://open.spotify.com/album/0ZALZSUmLfGRPriHLcL4PE?si=QrNnS0F6So-k7GVNNfIiEQ'
    ];

    const albumNames = [
        'WHEE',
        'Redd',
        'IN the mood',
        'magnolia',
        'coco water',
        'soar',
        "Wheee"
    ]

    const songPreviews = [
      'https://open.spotify.com/embed/album/4BLxIwHfv87WeOQ9A4sm9E?utm_source=generator',
      'https://open.spotify.com/embed/album/32pXXle0zoKIFG03iefH2c?utm_source=generator',
      'https://open.spotify.com/embed/album/1EABDeQeCq83PJMBYBSXet?utm_source=generator', 
      'https://open.spotify.com/embed/album/6RKopanQbo5q7FjwpbhfKM?utm_source=generator', 
      'https://open.spotify.com/embed/album/5QQf1nuuF2uSWM74TGN0F6?utm_source=generator',
      'https://open.spotify.com/embed/album/7zhSn5lo1BsHmvumiZS3qu?utm_source=generator',
      'https://open.spotify.com/embed/album/0ZALZSUmLfGRPriHLcL4PE?utm_source=generator'
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const totalProducts = 20;
    const totalPages = totalProducts / productsPerPage;
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentAlbumImages = albumImages.slice(startIndex, endIndex);
    const currentAlbumLinks = albumLinks.slice(startIndex, endIndex);
    const currentAlbumNames = albumNames.slice(startIndex, endIndex);
    const currentSongPreviews = songPreviews.slice(startIndex, endIndex);

  return (
    <section className="user-sec1">
        <h1>Albums</h1>
        <div className="product-grid">
        {currentAlbumImages.map((image, index) => (
            <div key={index} className="product-item">
              <div className="product-image"> 
              <a href={currentAlbumLinks[index]} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={currentAlbumNames[index]} />
              </a>
              {/* insert one song preview from spotify from the album */}
              <iframe
              src={currentSongPreviews[index]}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: 12, marginTop: '8px' }}
            ></iframe>
            </div>
            <div className="album-name">{currentAlbumNames[index]}</div>
          </div>
          ))}
        </div>
        <div className="pages">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              onClick={() => handlePageClick(index + 1)}
              style={{
                cursor: 'pointer',
                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                margin: '0 0.5rem',
              }}
            >
              {index + 1}
            </span>
          ))}
        </div>
    </section>
  );
}

function UserSec2() {
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

export default function UserPage() {
  return (
    <div>
      <Menu />
      <UserSec1 />
      <UserSec2 />
    </div>
  );
}
