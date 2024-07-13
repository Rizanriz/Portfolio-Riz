import React from 'react'
import './Slider.css'
import Image from 'next/image'
import img1 from '../../public/project imgs/Bank.png'
import img2 from '../../public/project imgs/sundown.png'
import img3 from '../../public/project imgs/Futurestic.png'
import img4 from '../../public/project imgs/Rejoice.png'
import img5 from '../../public/project imgs/Travel.png'
import img6 from '../../public/project imgs/canculator.png'
import img7 from '../../public/project imgs/food Delivery.png'
import img8 from '../../public/project imgs/freelance.png'

function Animation1() {

  return (
    <>
    <div className=''>
      <h1 className='text-center text-[40px] font-semibold text-white'>Mini Projects</h1>
    </div>
        <div className="wrapper z-[99]">
        <div className="item item1">< a className='text' href="https://rizanriz.github.io/Bank" 
        target='_blank'><Image className='item-img mb-2' src={img1} alt="" /><p>Bank Website</p></a></div>
        <div className="item item2">< a className='text' href="https://github.com/Rizanriz/Rejouice" 
        target='_blank'><Image className='item-img mb-2' src={img2} alt="" /><p>Sundown Studio</p></a></div>
        <div className="item item3">< a className='text' href="https://rizanriz.github.io/futurestic" 
        target='_blank'><Image className='item-img mb-2' src={img3} alt="" /><p>Gaming website</p></a></div>
        <div className="item item4">< a className='text' href="https://github.com/Rizanriz/Rejouice" 
        target='_blank'><Image className='item-img mb-2' src={img4} alt="" /><p>Rejouice</p></a></div>
        <div className="item item5">< a className='text' href="https://github.com/Rizanriz/Rejouice" 
        target='_blank'><Image className='item-img mb-2' src={img5} alt="" /><p>Travel Guaid</p></a></div>
        <div className="item item6">< a className='text' href="https://github.com/Rizanriz/react-simple-calculator" 
        target='_blank'><Image className='item-img mb-2' src={img6} alt="" /><p>Calculator</p></a></div>
        <div className="item item7">< a className='text' href=" https://rizanriz.github.io/FoodieXpress" 
        target='_blank'><Image className='item-img mb-2' src={img7} alt="" /><p>Food Delivery</p></a></div>
        <div className="item item8">< a className='text' href="https://github.com/Rizanriz/Rejouice" 
        target='_blank'><Image className='item-img mb-2' src={img8} alt="" /><p>Free Lance</p></a></div>
      </div>
    </>
  )
}

export default Animation1