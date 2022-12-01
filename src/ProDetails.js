import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import ProductData from './ProductData';

const ProDetails = () => {
    const topic = useParams();
    const harsh = ProductData.filter(e => e.ProD === topic.name);
    console.log()
    return (
        <>
            <NavBar />
            <div className="mt-10">
                {harsh.map((e) => (
                    <div className="">
                        <div className="flex ">

                            <div className="w-1/3 ">
                                <div className="border hover:border-blue-300 cursor-pointer duration-300 py-10 flex  justify-center">
                                    <img className='w-80' src={e.img} alt="" />
                                </div>
                                <div className=" flex gap-10 justify-center py-5">
                                    <button className='bg-yellow-500 shadow-md rounded-md shadow-gray-500 hover:bg-yellow-700 px-16 font-semibold text-white py-3 text-2xl'>Add To Cart</button>
                                    <button className='bg-orange-700 shadow-md rounded-md shadow-gray-500 hover:bg-orange-500 px-16 font-semibold text-white py-3 text-2xl'>By Now</button>
                                </div>
                            </div>
                            <div className="w-1/2 px-5">
                                <p className='text-xl font-semibold'>{e.ProD}</p>
                            </div>
                        </div>

                    </div>


                ))}
            </div>
        </>
    )
}

export default ProDetails