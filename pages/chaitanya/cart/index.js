;
import { emptyCart } from "@/redux/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi";
import productList from "@/redux/productAction";
import { addToCart } from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import Link from "next/link";
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const cartData = useSelector((state) => state.cartData);
  console.log("From cart Page", cartData);
  const mergeCartItems = (data) => {
    const mergedItems = [];

    for (let item of data) {
      const existingItem = mergedItems.find(
        (mergedItem) => mergedItem.id === item.id
      );

      if (existingItem) {
        // const eachItemPrice = item.price;
        existingItem.quantity += 1;
      } else {
        mergedItems.push({
          id: item.id,
          name: item.name,
          price: item.price,
          img: item.img,
          quantity: 1,
          discounted_price: item.discounted_price,
          url:item.url,
        });
      }
    }
    for (let item of mergedItems) {
      for (let item of mergedItems) {
        const eachItemPrice = item.price;
        item.totalprice = item.quantity * eachItemPrice;
      }
      for (let item of mergedItems) {
        const eachItemDiscountedPrice = item.discounted_price;
        item.totalDiscountedprice = item.quantity * eachItemDiscountedPrice;
      }
    }
    return mergedItems;
  };

  const mergedCartData = mergeCartItems(cartData);

  let totalAmount = mergedCartData.reduce((total, item) => {
    if (item.discounted_price) {
      return total + item.discounted_price;
    } else {
      return total + item.price;
    }
  }, 0);
  const handleAddToBag = (item) => {
    console.log("hadle add to bag",item);
    dispatch(addToCart(item));
  };

  const handleRemoveFromBag = (item) => {
    dispatch(removeFromCart(item));
  };

  const isCartEmpty = mergedCartData.length === 0;
  
  return (
    <div>
      <div className="cart-page-container d_flex flex_col">
        <h1 className="cartHeading">Shopping Cart</h1>
        <button
          className="emptyCartButton"
          onClick={() => dispatch(emptyCart())}
          style={{ display: isCartEmpty ? 'none' : 'block' }}
        >
          Deselect All Items
        </button>
        {isCartEmpty ? (
          <div className="d_flex justify_content_center w_100 ">
           <img className="emptyCartImage" src="/emptyCart.jpeg"></img>
           <div className="emptyCartRightSection">
           <h5 className="emptyCartText">Cart is Empty</h5>
           <Link href="/"><button className="shopNowButton">Shop Now</button></Link>
           </div>
           
           </div>
        ) : (
        mergedCartData.map((item) => (
          <div key={item.id} style={{marginBottom:"5vh"}} className="d_flex">
            <div className="cartImageSection">
             {item.quantity>0 && <Link href={item.url}><img src={item.img} className="cartImage" alt="image"></img></Link>}
            </div>
            <div className="cartDetailSection">
              <div className="cartProductName">{item.name}</div>
              <div className="cartProductPrice">
                {item.discounted_price ? 
                <span>&#8377;{ item.totalDiscountedprice} <span>(&#8377;{item.discounted_price} for each)</span> </span>
               : 
               <span>&#8377;{item.totalprice} <span className="eachItemPrice">(&#8377;{item.price} for each)</span> </span>
               
               }
              </div>
              <div className="cartProductQuantity">
                <button onClick={() => handleRemoveFromBag(item.id)}>
                  <div>
                    <HiMinus />
                  </div>
                </button>
                <span  style={{padding:"10px"}}>{item.quantity}</span>
                <button onClick={() => handleAddToBag(item)}>
                  <div>
                    <HiPlus />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )))}

        {/* <td className="cartTotalLabel">Total</td>
                <td className="cartTotalAmount" colSpan="2">
                  {totalAmount}
                </td> */}

        <div></div>
      </div>
    </div>
  );
};

export default Cart;
