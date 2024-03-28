import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div id='about'>
      <>
  {/* Hello world */}
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto w-[300px] h-[330px]"
          alt="hero"
          src={require("../../../public/image/sunny1.jpg") }
             width={200} height={200}/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Me
        </h1>
        <p className="mb-8 leading-relaxed">

        Hello! I'm Sana Ullah, a recent graduate from Agriculture University of Peshawar with a Bachelor's degree in Computer Science. Passionate about leveraging technology to solve real-world problems, I have a keen interest in front-end web development. My journey in BSCS has equipped me with a solid foundation in programming, problem-solving, and web development skills. With a commitment to continuous learning and a drive to excel, I'm excited to embark on a career where I can contribute my expertise to create engaging and user-friendly web experiences. Let's connect and innovate together!
        </p> 

        <div className="flex justify-center">

         <Link href={"/cv/sana ullah.cv.pdf"} target='_blank'>
           <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
               View Cv
          </button>
         </Link>
         
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default About
