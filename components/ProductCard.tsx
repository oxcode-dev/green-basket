import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const ProductCard = () => {
  return (
    <div className="product-card flex flex-col justify-center rounded-md border border-gray-300">
      <div className="flex flex-col justify-center items-center">
        <img 
          src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
          width={160}
          alt='Product Image'
          height={160}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-2 py-6">
        <p className="text-gray-800 font-semibold text-lg">
          Bell Pepper
        </p>
        <p className="cart-text text-gray-400 text-md font-medium pb-2.5">
          $100.00
        </p>

        <div className="inline-flex space-x-3 py-1 cart-btn">
          <a href="#" className="inline-flex justify-center items-center bg-green-600 text-white size-6.5 p-1 rounded-full">
            <ShoppingCartIcon className="size-3.5" />
          </a>
          <a href="#" className="inline-flex justify-center items-center bg-green-600 text-white size-6.5 p-1 rounded-full">
            <HeartIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
