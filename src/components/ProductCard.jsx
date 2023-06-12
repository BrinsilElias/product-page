import React from 'react'
import { ReviewIcon, RatingStarIcon } from './Icons'

const ProductCard = () => {
  return (
    <div className='max-w-[167px] py-3 rounded-xl border border-solid border-slate-300'>
        <div className="w-[164px] h-[162px] bg-[url('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg')] bg-contain bg-no-repeat bg-center"></div>
        <div className='mt-2 px-4 flex flex-col gap-2'>
            <h3 className='text-md font-medium text-neutral-600'>Mens Casual Premium Slim Fit T-Shirts</h3>
            <p className='text-[18px] font-semibold text-primary'>$22.3</p>
            <p className='text-sm text-neutral-500'>men's clothing</p>
            <div className="flex items-center gap-1">
                <div className="flex items-center gap-2 px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                  <RatingStarIcon />
                  4.1
                </div>
                <p className='text-sm font-medium text-neutral-500'>(259)</p>
              </div>
        </div>
    </div>
  )
}

export default ProductCard