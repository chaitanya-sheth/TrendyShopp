import React, { useEffect, useState } from "react";
import { Data } from "@/data/Chaitanya/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";

const findOfferById = (id) => {
  return Data.find((item) => item.id === id);
};

const ProductId = ({params}) => {
  const [addedProducts, setAddedProducts] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  const { pId } = params;
  const formattedPId = pId.toString().padStart(3, '0');
  const offer = findOfferById(formattedPId);  

  if (!offer) {
    return <h1>Product not found</h1>;
  }

  const { img, name, description, price, discounted_price } = offer;
   
  // console.warn("data in main component from saga ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  
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
  return (
    <div className="productdetailpage">
      <div className="detailImages">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
        </Carousel>
      </div>
      <div className="details">
        <h1 className="fontStyle">{name}</h1>
        {discounted_price ? (<span>MRP: <span style={{textDecoration:"line-through"}}> &#8377;{price}</span></span>):
        (<span>MRP: <span> &#8377;{price}</span></span>)}
        {discounted_price && <p><b>Offer Price:  &#8377;{discounted_price}</b></p>}
         {isProductAdded(offer) ? (
                          <div className="d_flex detailPageAddToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect minusButtonEffect"
                              onClick={() => handleRemoveFromBag(offer.id)}
                            >
                              <div>
                                <HiMinus />
                              </div>
                            </button>
                            <button className="d_flex justify_content_center align_items_center buttonEffect">
                              <div>
                              <HiOutlineShoppingBag/>
                              </div>
                            </button>
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect plusButtonEffect"
                              onClick={() => handleAddToBag(offer)}
                            >
                              <div>
                                <HiPlus />
                              </div>
                            </button>
                          </div>
                        ) : (
                          <div className="d_flex detailPageAddToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(offer)}
                            >
                              <div>
                                <HiOutlineShoppingBag /><span style={{paddingLeft:"5px"}}>Add to bag</span>
                              </div>
                            </button>
                          </div>
                        )}
      </div>
    </div>
  );
};

export default ProductId;

export async function getServerSideProps(context){
  const {params} = context;

  return {
    props: {
      params
    }
  }

}
