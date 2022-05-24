import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1612853228637-e89987ca1df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
          alt=""
        />

        <div className="home__row">
        <Product
                id="12321341"
                title="French Hawk Men Colorblocked Slim Fit Polo Collar Pure Cotton T-Shirt"
                price={1599}
                rating={5}
                image="https://i.ibb.co/6bwDNSq/dress.jpg"
                tag="upper-body-dress"
            />
            <Product
                id="49538094"
                title="DIGITAL SHOPEE Women Cotton Pyjama Single Regular Fit Casual Pyjama Track Pants"
                price={1500}
                rating={4}
                image="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                tag='lower-body-dress'
            />
            </div>

            <div className="home__row">
            <Product
                id="4903850"
                title="AMERICAN CREW Men's Regular Fit T-Shirt"
                price={1199}
                rating={3}
                image="https://m.media-amazon.com/images/I/61gqx7hslmL._UX679_.jpg"
                tag="upper-body-dress"
            />
        
            <Product
                id="3254354345"
                title="Amazon Brand - Symbol Men Maroon/Navy Sneakers-9 UK (43 EU) (10 US) (AZ-SM-519)"
                price={2500}
                rating={4}
                image="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8&w=1000&q=80"
                tag='footwear'
            />

            <Product
                id="23445930"
                title="RodZen Men's Cotton Half Sleeve Regular Fit Striped T-Shirt"
                price={1200}
                rating={5}
                image="https://5.imimg.com/data5/SH/GC/MY-8764775/mens-t-shirt-500x500.jpg"
                tag="upper-body-dress"
            />
            </div>

            <div className="home__row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={14999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                tag='electronics'
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
