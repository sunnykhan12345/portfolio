'use client'
// import Image from 'next/image'
// import sunn from "../../../public/image/sunny1.jpg"
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I am
        <br className="hidden lg:inline-block"/>
        <Typewriter
            options={{
                strings: ['Front End Web Developer ', 'Sana Ullah'],
                autoStart: true,
                 loop: true,
            }}
/>

      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">Experienced web developer proficient in HTML, CSS, JavaScript, Bootstrap, React.js, and Next.js. Skilled in creating responsive and dynamic web applications with a focus on user experience.</p>
      <div className="flex justify-center">
        <Link href="#contact">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <Image src={sunn} width={500} height={500} className="w-[15rem] mx-auto object-cover object-center rounded-lg" alt="hero" /> */}
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero