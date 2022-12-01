import React from 'react'
import { useParams , Link } from 'react-router-dom'
import NavBar from './NavBar';
import ProductData from './ProductData'

const Try = () => {
    const data = useParams();
    const result = ProductData.filter(e => e.slug === data.name);
    return (
        <div className="">
        <NavBar/>
            <div className="px-10 w-screen border grid grid-cols-1s ">
                {result.map((e, index) => {
                
                {/* console.log(e.ProD.slice(0,60)) */}
                
                return(
                    
                <Link key={index}  to={'/' + e.ProD}>

                <div className="py-10 my-5 flex overflow-hidden border-b-2 hover:border-blue-700 cursor-pointer duration-700">
                        <div className="flex cursor-pointer justify-center items-center w-1/4 pl-10 h-44 overflow-hidden hover:scale-110 duration-500 ">
                            <img className='h-40 ' src={e.img} alt="" />
                        </div>
                        <div className=" px-16 text-xl  w-1/2">
                            <h1 className='hover:text-blue-700 font-semibold'>{e.ProD ? e.ProD.slice(0,150) + '......' :''}</h1>
                            <h1 className='pt-5 text-gray-600'>{e.brand}</h1>
                            <ul className='pt-5 text-lg '>
                                { e.Details.map((a, index) =>(
                                <li className='list-disc' key={index}> {a} </li>
                                ))} 
                            </ul>
                        </div>
                        <div className="w-1/4">
                            <h1 className='text-3xl font-semibold'>{'₹' + e.price}</h1>
                        </div>
                    </div></Link>
                )})}
            </div>
        </div>
    )
}

export default Try