import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    <div id='project'>
      
  {/* Hello world */}
  <section className="text-gray-600 body-font hover:cursor-pointer">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects
        </h1>
      </div>
      <div className="flex flex-wrap -m-8">
        {/* projects  */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/marvellex2.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Marvellex Company
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Marvellex
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created for the marvellex software company islamabad. 
              </p>
             <Link href={'https://marvellex.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
         {/* projects 2  */}
         <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/ec2.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                E-Commerce Shopping 
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               E-Commerce
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created for the Online E-Commerce Shopping . 
              </p>
             <Link href={'https://shopping-commerce-web-y89f.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
          {/* projects 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/port.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Personal PortFolio
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               PortFolio
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created for the Personal Portfolio. . 
              </p>
             <Link href={'https://my-portfolio-m9l8.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
          {/* projects 4 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/login.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Facebook Login Clone
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Login Clone
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created for the Facebook Login Clone.
              </p>
             <Link href={'https://login-clone-pi.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
          {/* projects 5 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/crud.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Croud Operation
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Crud
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created for Crud Operation . 
              </p>
             <Link href={'https://burger-website-seven.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
          {/* projects 6 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require("../../../public/projects/gems.PNG")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Gems Stone
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Gems Stone
              </h1>
              <p className="leading-relaxed">
               this is the project which i've  created Famouse Gems Stone Website . 
              </p>
             <Link href={'https://gamestones-website.vercel.app/'} className='text-blue-500 hover:underline' target='_blank'>
             <p className="leading-relaxed">
               Veiw Project
              </p>
             </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
    </div>
  )
}

export default Project