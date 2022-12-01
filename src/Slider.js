import React, { useState } from 'react'
import imageStore from './SliderStorage'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Slider = () => {
    
    const [mlvalue , setMlValue] = useState(0)

    const lbtn = () => { 
        if (mlvalue > 0 ) {
            setMlValue(mlvalue - 100)
            
            console.log(mlvalue)
        }
        else{
            setMlValue((imageStore.length -1) *100 )
            console.log(mlvalue)
            
        }
        
    }
    
    const rbtn = () => {
        
        if (mlvalue != (imageStore.length -1) * 100 ) {
            setMlValue(mlvalue + 100)
            console.log(mlvalue)
            
            
        }
        else{
            setMlValue(0)
            console.log(mlvalue)
            
        }
              
    
    }


    return (
        <div>
            <div className=" flex mt-5 h-96 overflow-hidden mx-4 ">
                <div className='z-10 absolute mt-32 p-5'>
                    <div className="flex justify-between w-[95vw] pl-2  ">
                        <div onClick={lbtn} className=' w-fit bg-white py-5 rounded-md '><MdArrowBackIosNew className='w-10 h-10' /></div>
                        <div onClick={rbtn} className=' w-fit bg-white py-5 rounded-md '><MdArrowForwardIos className='w-10 h-10' /></div>
                    </div>
                </div>
                <div className={` flex overflow-hidden  mx-4 duration-500 -ml-[${mlvalue + '%' }]`} >
                    {imageStore.map((e , index) => (
                        <img key={index} className='w-[97vw]' src={e} alt="" />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Slider