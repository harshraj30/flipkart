import React from 'react'
import Categories from './Categories'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Head = () => {

  //   const moreMouseOver = () => {
  //     let hMobBox = document.getElementById("hMobBox");
  //     let mIcon = document.getElementById("mIcon");
  //     hMobBox.classList.remove("hidden")
  //         mIcon.classList.add('-rotate-180', "duration-300")

  // }

  // const moreMouseLeave = () => {
  //     let hMobBox = document.getElementById("hMobBox");
  //     // let mIcon = document.getElementById("mIcon");
  //     hMobBox.classList.add("hidden")
  //         // mIcon.classList.remove("-rotate-180")
  // }

  return (
    <div className=''>
      <div className=" w-screen bg-white flex gap-10 mt-5 justify-center  ">

        {Categories.map((e, index) => (
          <div name={'index'} key={index} className='flex flex-col items-center group hover:text-blue-700 cursor-pointer' >

            <img className='w-20' src={e.Url} alt="" />
            <h1 className='flex items-center gap-1 text-center text-xl font-semibold '>{e.Name} {e.Menu ? <span className='group-hover:-rotate-180 duration-300'><MdKeyboardArrowDown /></span> : ' '}</h1>

            {e.Menu ?
              <div className="hidden group-hover:block z-20 bg-white border absolute mt-32">
                <div className="w-52  h-6 -mt-10"></div>
                <div className="bg-white w-4 h-4 ml-24 rotate-45"></div>
                {e.menuItom.map((curElem, index) => (
                  <p key={index} className='px-5 py-3 hover:bg-gray-100 text-black hover:text-blue-500 text-lg font-semibold border-y'>{curElem.Name}</p>
                ))}</div> : ''}


          </div>
        ))}


      </div>
    </div>
  )
}

export default Head