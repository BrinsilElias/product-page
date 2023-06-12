import React from 'react'
import { TwitterIcon, LinkdinIcon, FacebookIcon } from './Icons'

const Footer = () => {
  return (
    <div className='py-12 px-8 bg-slate-100 md:py-8'>
        <div className='flex flex-col gap-5 md:justify-between md:flex-row-reverse'>
            <div className='flex items-center gap-6'>
                <TwitterIcon />
                <LinkdinIcon />
                <FacebookIcon />
            </div>
            <p className='text-md text-slate-400'>© 2023 Catalog. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer