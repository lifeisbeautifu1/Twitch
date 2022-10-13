import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <div className='fixed h-14 w-full flex flex-nowrap justify-between items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      <div className='flex  items-center'>
        <Link href='/'>
          <a className='flex'>
            <Image
              src={Logo}
              alt='/'
              width={36}
              height={36}
              className='cursor-pointer z-10'
            />
          </a>
        </Link>
        <p className='p-4'>Browse</p>
        <div className='p-4'>
          <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='bg-gray-700 rounded-tl-xl rounded-bl-xl outline-none border border-transparent hover:border-gray-400 '>
          <input
            type='text'
            className='bg-transparent p-1 px-4 outline-none min-w-[350px]'
            placeholder='Search'
          />
        </div>
        <div className='p-[6px] rounded-tr-xl rounded-br-xl px-2 border border-gray-600 cursor-not-allowed bg-gray-600'>
          <BsSearch size={20} />
        </div>
      </div>
      <div className='hidden md:flex grop items-center justify-end'>
        <div className='flex items-center'>
          <Link href='/'>
            <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>
              Account
            </button>
          </Link>
          <BsPerson size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
