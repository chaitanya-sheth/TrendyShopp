import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
// import { BsCart } from "react-icons/bs";
// import {BsPersonCircle} from 'react-icons/bs';
const data = [
    { id: 1, name: "Home", url: "/chaitanya" },
    { id: 2, name: "Categories", url:"/chaitanya/collection",subMenu: true },
    { id: 3, name: "Offers & Combos", url: "/chaitanya/offers"},
    
];

const subMenuData = [
    { id: 1, name: "Hair Care" , url:"/chaitanya/collection/haircare"},
    { id: 2, name: "Skin Care", url:"/chaitanya/collection/skincare"},
    { id: 3, name: "Laundary & Dishwash", url:"/chaitanya/collection/laundary-dishwash"},
    { id: 4, name: "Hand & Bodywash", url:"/chaitanya/collection/hand-bodywash"},
    { id: 5, name: "Food Beverages", url:"/chaitanya/collection/food-and-beverages"},
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <div className="dataArrayComponents align_items_center">
        <ul className="dataStyle d_flex align_items_center ">
            {data.map((item) => {
                return (
                    
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ?(
                            <li className="catagory d_flex align_items_center"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                
                                {item.name}
                                <BsChevronDown size={14}/>

                                {showCatMenu && (
                                    <ul className="catagoryIcon">
                                        {subMenuData.map((submenu)=>{
                                            return(
                                                <Link key={submenu.id} href={submenu.url} onClick={()=>setShowCatMenu(false)}>
                                                    <li className="catagoryComponents d_flex align_items_center">{
                                                        submenu.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) :  (
                            <li className="cursor_pointer">
                            <Link href={item.url}>{item.name}</Link></li>
                        )}
                    </React.Fragment>
                   
        
                );
            })}
        </ul>
        
        
        </div>
    );
};

export default Menu;