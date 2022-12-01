import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CgSearch } from 'react-icons/cg'
import ProductData from './ProductData'

const NavBar = () => {

    const submit = () => {
    let harsh = document.getElementsByClassName('mai_hu_harsh')

    let result = ProductData.filter(e => e.slug === harsh[0].value
     )
    console.log(result)
    }


    return (
        <div className="">
            <div className="items-center bg-blue-600 flex py-3 gap-8 justify-center">
                <div className="flex gap-10 ">
                    <div className="flex flex-col">
                        <img className='w-28' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
                        <div className="font-semibold cursor-pointer text-white hover:underline text-center flex items-center gap-1">
                            <p className='text-white'>Explore <span className='text-yellow-400 '>Plus</span></p>
                            <img className='w-4 h-4' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <input className='mai_hu_harsh rounded-l-sm shadow-md px-5 text-xl py-2 shadow-gray-500 outline-none' size={50} type="text" placeholder='Search for products, brands and more' />
                        <span onClick={submit} className='rounded-r-sm bg-white flex items-center w-10 justify-center'> <CgSearch className='text-blue-700 cursor-pointer w-6 h-6 font-bold' /></span>
                    </div>
                </div>
                <div className="flex items-center gap-14 " >
                    <div className="group">
                        <button className='border bg-white text-xl text-blue-600 font-semibold px-7 py-1'>Login</button>
                        <div className="absolute z-20 hidden group-hover:block -ml-10 mt-2 shadow-xl">
                            <div className="w-64 h-3 -mt-3"></div>
                            <div className="bg-white w-4 h-4 ml-20 rotate-45"></div>
                            <div className="pt-4 flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                <a className='hover:bg-gray-100 bg-white p-5 border-y text-xl font-bold' href="">New Costomer?</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">My Profile</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">Flipkart Plus Zone</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">Orders</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">Wishlist</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">Rewards</a>
                                <a className='hover:bg-gray-100 bg-white p-5 border-y' href="">Gift Cards</a>
                            </div>
                        </div>
                    </div>
                    <a className=' text-xl font-semibold text-white' href="">Become a Seller</a>
                    <div className="group">
                        <a className='flex gap-1 items-center text-xl font-semibold text-white' href="">More <span className='group-hover:-rotate-180 duration-300'><MdKeyboardArrowDown /> </span></a>
                        <div className="hidden group-hover:block">
                            <div className="mt-5 -ml-20 z-20 border shadow-xl bg-white flex flex-col absolute text-lg font-semibold">
                                <div className="w-64 h-8 -mt-8"></div>
                                <div className="bg-white w-5 h-5 -mt-2 ml-24 rotate-45"></div>
                                <a className='hover:bg-gray-100 p-5 border-y cursor-pointer'>Notification Preferences</a>
                                <a className='hover:bg-gray-100 p-5 border-y cursor-pointer'>24*7 Customer Care</a>
                                <a className='hover:bg-gray-100 p-5 border-y cursor-pointer'>Advertise</a>
                                <a className='hover:bg-gray-100 p-5 border-y cursor-pointer'>Download App</a>
                            </div>
                        </div>
                    </div>
                    <a className=' text-xl font-semibold text-white' href="">Cart</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar