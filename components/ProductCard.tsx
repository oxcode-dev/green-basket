'use client';

import { useCartDetail } from '@/hooks/useCartDetail';
import { useUpdateWishlists } from '@/hooks/useUpdateWishlists';
import { getUser } from '@/store/slices/auth';
import { ProductItem, User } from '@/types';
import { isEmpty, moneyFormat } from '@/types/helper';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';

type ProductCardType = {
  product: ProductItem
}

export const ProductCard = ({ product } : ProductCardType) => {
  //@ts-ignore
  const loggedUser : User | {} = useSelector(getUser)?.user || {};
  const { onClick } = useUpdateWishlists()
  const { getAllCarts, handleAddCart } = useCartDetail()

  const wishlist = useMemo(() => {
    if(product?.wishlists) {
      // @ts-ignore
      return product?.wishlists.find(n => n.product_id === product?.id && n.user_id === loggedUser?.id);
    }
  }, [product]);

  return (
    <div className="product-card flex flex-col justify-center rounded-md border border-gray-300">
      <pre>{JSON.stringify(getAllCarts)}</pre>
      <Link href={`/shop/${product.slug}`} className="flex flex-col justify-center items-center">
        <img 
          src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
          width={160}
          alt='Product Image'
          height={160}
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-2 py-6">
        <Link href={`/shop/${product.slug}`} className="text-gray-800 font-semibold text-lg">
          { product?.title }
        </Link>
        <p dangerouslySetInnerHTML={{ __html: moneyFormat(product?.price || 0)}} className="cart-text text-gray-400 text-md font-medium pb-2.5"></p>

        <div className="inline-flex space-x-3 py-1 cart-btn">
          <a onClick={e => handleAddCart(product.id, e)} href="#" className="inline-flex justify-center items-center bg-green-600 text-white size-6.5 p-1 rounded-full">
            <ShoppingCartIcon className="size-3.5" />
          </a>
          { !isEmpty(loggedUser) ?
            <button 
              onClick={() => onClick(product)}
              className={`
                ${wishlist && !isEmpty(wishlist) ? 'bg-green-600 text-white' : 'text-green-600 bg-white shadow-lg'} 
                inline-flex justify-center items-center size-6.5 p-1 rounded-full cursor-pointer`
              }
            >
              <HeartIcon className="size-3.5" />
            </button> 
          : null }
        </div>
      </div>
    </div>
  )
}
