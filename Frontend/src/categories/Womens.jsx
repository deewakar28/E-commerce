import React from 'react'
import ProductCard from '../components/ProductCard'

function Womens() {
    return (
      <div>

      
   
      <div className='mt-8'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'><span className='sm:text-[64px] text-[40px]'>Women's </span> Wear</h1> 
  
      </div>
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard/>
          ))}
        </div>
        </div>
      )
}

export default Womens
