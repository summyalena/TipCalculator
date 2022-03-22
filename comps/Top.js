import React from 'react'
import Logo from '../public/logo.svg'
import Image from 'next/Image'
const Top = () => {
  return (
      <div className="text-center sm:h-[10vh] sm:pt-6"> 
      <h3 className="text-[white] font-serif hover:font-sans text-xl lg:text-left lg:ml-3 sm:text-center font-semi-bold">Recreated by Assumpta Okolike</h3>
      <p className="text-[#26c0ab] font-serif hover:font-sans text-l lg:text-left lg:ml-3 sm:text-center font-semi-bold">Using Nextjs and Tailwind CSS</p>
       <div className="pt-6">
       <Image src={Logo}/>
       </div>

      </div>
    
  )
}

export default Top