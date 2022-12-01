import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen bg-gray-800 flex" >
        <div className="flex justify-between p-10 text-white gap-5  w-1/2">
            <div className=" flex flex-col">
                <h1 className='text-gray-400 pb-2'>ABOUT</h1>
                <a className='hover:underline' href="">Contact Us</a>
                <a className='hover:underline' href="">About Us</a>
                <a className='hover:underline' href="">Carrers</a>
                <a className='hover:underline' href="">Flipkart Stories</a>
                <a className='hover:underline' href="">Press</a>
                <a className='hover:underline' href="">Flipkart WholeSale</a>
                <a className='hover:underline' href="">Corporate Information</a>
            </div>
            <div className="flex flex-col">
                <h1 className='text-gray-400 pb-2'>HELP</h1>
                <a className='hover:underline' href="">Payments</a>
                <a className='hover:underline' href="">Shipping</a>
                <a className='hover:underline' href="">Cancellation & Returns</a>
                <a className='hover:underline' href="">FAQ</a>
                <a className='hover:underline' href="">Report Infringement</a>
            </div>
            <div className="flex flex-col">
                <h1 className='text-gray-400 pb-2'>POLICY</h1>
                <a className='hover:underline' href="">Return Policy</a>
                <a className='hover:underline' href="">Terms Of Use</a>
                <a className='hover:underline' href="">Security</a>
                <a className='hover:underline' href="">Privacy</a>
                <a className='hover:underline' href="">Sitemap</a>
                <a className='hover:underline' href="">EPR Compaliance</a>
            </div>
            <div className="flex flex-col">
                <h1 className='text-gray-400 pb-2'>SOCIAL</h1>
                <a className='hover:underline' href="">Facebook </a>
                <a className='hover:underline' href="">Twitter</a>
                <a className='hover:underline' href="">Instagram</a>
                <a className='hover:underline' href="">Youtube</a>
                <a className='hover:underline' href="">Telegram</a>
                <a className='hover:underline' href="">Linkedin</a>
                <a className='hover:underline' href="">Whatsapp</a>
            </div>
        </div>
        <div className="w-1/2 text-white justify-between px-32 py-10 flex">
            <div className="w-60">
                <h1 className='text-gray-400 pb-2'>Mail Us:</h1>
                <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India </p>
            </div>
            <div className="w-64">
                <h1 className='pb-2 text-gray-400 '>Registered Office Address:</h1>
                <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone: <span className='text-blue-600 cursor-pointer font-semibold'>044-45614700 </span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer