;
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "@/data/Chaitanya/Data";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import Link from "next/link";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";

const sliderImage = [
    { mobileImg:"/slide-3.jpg",desktopImg: "/slide-3-desktop.webp", text: "haircare" },
    { mobileImg:"/slide-2.jpg",desktopImg: "/slide-2-desktop.webp", text: "skincare"},
    { mobileImg:"/slide-4.jpg",desktopImg: "/slide-4-desktop.webp", text: "laundary-dishwash"},
    { mobileImg:"/slide-1.webp",desktopImg: "/slide-1-desktop.webp", text: "hand-bodywash"},
    { mobileImg:"/slide-5.jpg",desktopImg: "/slide-5-desktop.webp", text: "food-and-beverages"},
  ];

const Category = ({ params }) => {
  const { category } = params;
  console.log(category);
  const filteredOffers = Data.filter((item) => item.category === category);

  const responsive = {
    1: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    2: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    3: {
      breakpoint: { max: 1200, min: 767 },
      items: 3,
    },
    4: {
      breakpoint: { max: 767, min: 440 },
      items: 2,
    },
    5: {
      breakpoint: { max: 440, min: 320 },
      items: 1,
    },
  };

  const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    return ((originalPrice - discountedPrice) / originalPrice) * 100;
  };

  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  // console.warn("data in main component from saga ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToBag = (item) => {
    dispatch(addToCart(item));
    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, item.id]);
  };

  const handleRemoveFromBag = (item) => {
    dispatch(removeFromCart(item)); // Dispatching the removeFromCart action
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((productId) => productId !== item.id)
    );
  };

  const isProductAdded = (item) => addedProducts.includes(item.id);

const filteredBySliderImage = sliderImage.find((item) => item.text === category);


  return (
    <>
    {filteredBySliderImage && <img src={filteredBySliderImage.desktopImg} alt="Slider Image" style={{width:"100%"}} className="desktopSlider" />}
    {filteredBySliderImage && <div> <img src={filteredBySliderImage.mobileImg} alt="Slider Image" style={{width:"100%"}} className="mobileSlider" />
    <Link href="/chaitanya/collection" className="browseMoreCategoryButton"><div className="customButtonOfBanner">
                        Browse More Categories
                    </div></Link>
                    </div>}
    <Carousel responsive={responsive}>
    {filteredOffers.map((offer) => {
      return (
        <div key={offer.id}>
          <div className="categoryOfferCard3 d_flex cursor_pointer">
            <div className="categoryOfferCard4">
            <Link href={offer.url}>
              <div className="categoryOfferCard5">
                <img src={offer.img} alt="Image" />
              </div>
              </Link>
              <div>
                <div className="categoryproductDetail">
                  <p className="categoryproductName" title={offer.name}>{offer.name}</p>
                  <div style={{marginBottom:"10px"}}>
                   {offer.discounted_price &&( <span className="categorydiscountedPriceText">
                      &#8377;{offer.discounted_price}
                    </span>)}
                    
                    {offer.discounted_price ? (<span className="categoryoriginalPriceText line-through">
                      &#8377;{offer.price}
                    </span>) : (<span className="categoryoriginalPriceText">
                      &#8377;{offer.price}
                    </span>)}

                    {offer.discounted_price  ? (<span className="categorydiscountedPercent">
                      {getDiscountedPricePercentage(
                        offer.price,
                        offer.discounted_price
                      )}
                      % off
                    </span>) : (<span className="categorydiscountedPercent"></span>)}
                  </div>

                  <div className="d_flex addToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(offer)}
                            >
                              <div>
                                <HiOutlineShoppingBag /><span style={{paddingLeft:"5px"}}>Add to bag</span> 
                              </div>
                            </button>
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </Carousel>
  </>
  );
};

export default Category;

export async function getServerSideProps(context){
  const {params} = context;

  return {
    props: {
      params
    }
  }
}
