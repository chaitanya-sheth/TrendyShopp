import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='categoryPage'>
    <Link className='categoryLinkTag' href='/chaitanya/collection/haircare'>
    <img href='/chaitanya/collection/haircare' src='/category1.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/chaitanya/collection/skincare'><img src='/category2.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/chaitanya/collection/laundary-dishwash'><img src='/category3.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/chaitanya/collection/hand-bodywash'><img src='/category4.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/chaitanya/collection/food-and-beverages'><img src='/category5.jpg' className='categoryImages'></img></Link>
    </div>
  )
}

export default page