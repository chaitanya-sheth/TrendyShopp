"use client"
import React from "react";
import "../styles/globals.css";
import "../styles/mobile.css";
import Link from "next/link";
import { useSelector } from "react-redux";
// import { useRouter } from "next/router";

const MobileBottomNavbar = (router) => {
  const navdata = [
    { img: "/home.png", text: "Home", url: "/" },
    { img: "/catagory.jpg", text: "Category", url: "/collection" },
    { img: "/offer.png", text: "Offers", url: "/offers" },
    { img: "/cart.png", text: "Cart", url: "/cart" },
  ];

  const result = useSelector((state) => state.cartData);
  // console.warn("data in header", result);
  // const router = useRouter();

  return (
    <div className="mobilebottomnavbar ">
      <div className="width_100 bottomnavbarflex justify_content_between">
        {navdata.map((item) => {
          const isActive = router.asPath === item.url
          console.log("url",item.url)
          return (
            <div
              // className="bottomnavbarflex flex_col align_items_center justify_content_center"
              className={`bottomnavbarflex flex_col align_items_center justify_content_center ${
                isActive ? "active" : ""
              }`}
              // className={`${router.pathname === item.url ? "active" : " "}`}
              // }`}
              key={item.url}
            >
              <Link href={item.url} style={{ textDecoration: "none" }}  
              // className={`${router.pathname === item.url ? "active" : " "}`}
              // className={`bottomnavbarflex flex_col align_items_center justify_content_center ${
              //   isActive ? "active" : ""
              // }`}
              >
                <div className="bottomNavbarImg">
                  <img src={item.img} width="16px" height="16px"></img>
                </div>
                <div className="bottomTagNames">{item.text}</div>
              </Link>
            </div>
          );
        })}
      </div>
      {result.length > 0 ? <span className="mobilecartQuantity">{result.length}</span> : null}
    </div>
  );
};

export default MobileBottomNavbar;
