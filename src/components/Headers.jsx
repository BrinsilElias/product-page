import React from 'react'
import { MenuIcon, ShoppingBagSmIcon, ShoppingBagIcon , BellSmIcon, BellIcon } from './Icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import logo from '../assets/logo-small.svg'

const HeaderSm = () => {
  return (
    <nav className='px-4 py-3 border-b border-solid border-neutral-200 sm:px-10'>
        <div className='flex items-center justify-between'>
            <div>
                <img src={logo} alt='Catalog company logo' />
            </div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button aria-label='Navigation links' className='outline-none'>
                        <MenuIcon/>
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content sideOffset={5} collisionPadding={10} className="w-[150px] px-1 py-2 bg-white rounded-md shadow-sm border border-solid border-neutral-200 " >
                        <DropdownMenu.Item className='text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            Category
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            Brand
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            Contact
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            FAQ
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='flex items-center gap-2 text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            <ShoppingBagSmIcon />
                            Shopping Bag
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className='flex items-center gap-2 text-sm font-medium text-neutral-800 py-1.5 px-1 rounded-md hover:bg-slate-100'>
                            <BellSmIcon />
                            Notification
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    </nav>
  )
}

const HeaderLg = () => {
    return (
        <nav className='px-10 py-3 border-b border-solid border-neutral-200 xl:px-20'>
            <div className='flex items-center justify-between'>
                {/* Nav Item 1 */}
                <div className='flex items-center gap-14'>
                    <div>
                        <img src={logo} alt='Catalog company logo' />
                    </div>
                    <div className='flex items-center gap-8'>
                        <p className='text-sm font-medium text-neutral-800'>Category</p>
                        <p className='text-sm font-medium text-neutral-800'>Brand</p>
                        <p className='text-sm font-medium text-neutral-800'>Contact</p>
                        <p className='text-sm font-medium text-neutral-800'>FAQ</p>
                    </div>
                </div>
                {/* Nav Item 2 */}
                <div className='flex items-center gap-4'>
                    <button aria-label='shopping bag'>
                        <ShoppingBagIcon />
                    </button>
                    <button aria-label='notification'>
                        <BellIcon />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export { HeaderSm, HeaderLg }