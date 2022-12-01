import React from 'react'
import {Link } from 'react-router-dom'
import ProductData from './ProductData'

const Product = () => {
    return (
        <div className="mt-16">
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(0, 6).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(6, 12).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(12, 18).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(18, 24).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(24, 30).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(30, 36).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(36, 42).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(42, 48).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(48, 54).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mb-10 overflow-hidden px-10 cursor-pointer'>
                {ProductData.slice(54, 60).map((e) => (
                    <Link to={'/category/'+ e.slug}>
                        <div className='px-10 '>
                            <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
                                <img className='h-44 ' src={e.img} alt="" />
                            </div>
                            <div className="py-5 text-center">
                                <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
                                <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
                                <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Product