// import React from 'react'
// import { Link , useParams } from 'react-router-dom'
// import ProductData from './ProductData'

// const ProDetailsProduct = () => {
//     const data = useParams();
//     const result = ProductData.filter(e => e.ProD === data.name);
//     console.log(result)
//     return (
//         <div>
//             {ProductData.map((e) => (
//                     <div className='px-10 '>
//                         <div className=" p-5 hover:scale-110 duration-500 overflow-hidden flex justify-center">
//                             <img className='h-44 ' src={e.img} alt="" />
//                         </div>
//                         <div className="py-5 text-center">
//                             <h1 className='font-semibold text-lg leading-8'>{e.product}</h1>
//                             <h2 className='text-xl text-green-600 leading-8'>{e.price}</h2>
//                             <p className='text-lg text-gray-600 leading-8'>{e.brand}</p>
//                         </div>
//                     </div>
//             ))}
//         </div>
//     )
// }

// export default ProDetailsProduct