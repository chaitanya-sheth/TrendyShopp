import React from "react";
import { Data } from "@/data/Data";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import Link from "next/link";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";
import { useEffect, useState } from "react";

const MobileOffersCard = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const handleAddToBag = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromBag = (item) => {
    dispatch(removeFromCart(item));
  };
   
  const filteredData = Data.filter((item) => !item.discounted_price);



  return (
    <div className="scrollbarHidden mobileOfferCards1">
      {filteredData.map((item, index) => (
        <div key={index} className="d_flex mobileOfferCards2 ">
       
          <div className="mobilecardImage1">
          
        <Link href={item.url}>
            <img src={item.img} alt="Images" width={"55px"} className="mobilecardImage2 adjustHeight" />
            </Link>
        
          </div>
         
          <div className="d_flex flex_col align_items_center justify_content_center">
            <div className="mobileCardDetail1">
              <p className="mobileCardDetail2">{item.name}</p>
              <div style={{marginBottom:"10px"}}>
                <span className="mobileCardDetail4">
                      &#8377;{item.price}
                    </span>
              </div>

          
                        <div>
                            <button
                              className="mobileOfferCardButton1 d_flex"
                              onClick={() => handleAddToBag(item)}
                            >
                          
                              <div>
                                <HiOutlineShoppingBag /><span style={{paddingLeft:"5px"}}>Add to bag</span>
                              </div>
                            
                            </button>
                          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileOffersCard;
