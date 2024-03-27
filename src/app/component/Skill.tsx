import React from 'react'
import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
const Skill = () => {
  return (
    <div id='skill'>
    {/* Hello world */}

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            SKILLS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
            {/* skills */}
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <PiFileHtmlFill className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  HTML
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-500 h-1 w-[90%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>90%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <FaCss3Alt  className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  CSS
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[85%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>85%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <TbBrandJavascript  className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  JAVASCRIPT
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[70%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>70%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <TbBrandBootstrap className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  BOOTSTRAP 5
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[90%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>90%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <RiReactjsFill className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  REACT JS
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[75%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>75%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <TbBrandNextjs className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  NEXT JS
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[70%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>70%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%]">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <SiTailwindcss className='font-bold text-2xl' />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  TAILWAIND CSS
                </h2>
              </div>
              <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className="absolute bg-blue-500 h-1 w-[40%] rounded-xl"></div>
                </div>
                <p className='font-bold text-blue-500 text-right'>40%</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>

  </div>
  
  )
}

export default Skill