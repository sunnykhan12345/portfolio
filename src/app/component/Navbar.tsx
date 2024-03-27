import Link from 'next/link'
import { FiDownloadCloud } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-50'>
     <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    {/* img place logo */}
    <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      <span className="ml-3 text-xl">Sana Ullah</span>
    </a>
 

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-red-900 cursor-pointer ">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-red-900 cursor-pointer">About</Link>
      <Link href={"#skill"} className="mr-5 hover:text-red-900 cursor-pointer">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-red-900 cursor-pointer">Projcts</Link>
      <Link href={"#contact"} className="mr-5 hover:text-red-900 cursor-pointer">Contacts</Link>
    </nav>
   <Link href={"/cv/sana ullah.cv.pdf"} target='_blank'>
   <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download Cv <FiDownloadCloud  className='ml-2 text-lg'/>
    
    </button>
   </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar
