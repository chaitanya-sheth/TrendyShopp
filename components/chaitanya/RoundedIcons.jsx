import React from "react";
import Link from "next/link";

const RoundedIcons = () => {
  const roundedIcon = [
    { img: "hair_care.jpg", text: "Hair Care" , url:"/chaitanya/collection/haircare"},
    { img: "skin_care.jpg", text: "Skin Care" ,url:"/chaitanya/collection/skincare"},
    { img: "laundry_dishwash.jpg", text: "Laundary & Dishwash", url:"/chaitanya/collection/laundary-dishwash" },
    { img: "hand_bodywash.jpg", text: "Hand & Bodywash" ,url:"/chaitanya/collection/hand-bodywash"},
    { img: "food_beverages.jpg", text: "Food Beverages" ,url:"/chaitanya/collection/food-and-beverages"},
  ];
  return (
    <div className="scrollbarHidden d_flex roundedIconsBox">
      {roundedIcon.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="roundedIconDiv d_flex flex_col align_items_center">
              <Link href={item.url}><img className="roundedIconImg " src={item.img}></img></Link>
              <div className="roundedIconText">{item.text}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RoundedIcons;
