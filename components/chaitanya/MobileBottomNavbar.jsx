import React , {useState} from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const MobileBottomNavbar = (router) => {
  const navdata = [
    { id:"1" , img: "/home.png", text: "Home", url: "/chaitanya" },
    { id:"2" , img: "/catagory.jpg", text: "Category", url: "/chaitanya/collection" },
    { id:"3" , img: "/offer.png", text: "Offers", url: "/chaitanya/offers" },
    { id:"4" , img: "/chaitanya/cart.png", text: "Cart", url: "/chaitanya/cart" },
  ];

  const result = useSelector((state) => state.cartData);
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (itemId) => {
    setActiveItem(itemId);
  };
 
  return (
    <div className="mobilebottomnavbar ">
      <div className="width_100 bottomnavbarflex justify_content_between">
        {navdata.map((item) => {
         
          return (
            <div
        
              className={`bottomnavbarflex flex_col align_items_center justify_content_center ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
              
             
              key={item.id}
            >
              <Link href={item.url} style={{ textDecoration: "none" }}  
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
