import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import { Fragment, useState } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu(!isMenu);

  const { data: session } = useSession();

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
      <div className='hidden md:flex items-center'>
        <div className='bg-gray-700 rounded-tl-xl rounded-bl-xl outline-none border border-transparent hover:border-gray-400 '>
          <input
            type='text'
            className='bg-transparent p-1 px-4 outline-none min-w-[350px]'
            placeholder='Search'
          />
        </div>
        <div className='p-[6px] rounded-tr-xl rounded-br-xl px-3 border border-gray-600 cursor-not-allowed bg-gray-600 hover:bg-gray-500'>
          <BsSearch size={20} />
        </div>
      </div>
      <div className='hidden md:flex grow items-center justify-end'>
        {session ? (
          <div className='flex items-center'>
            <Link href='/account'>
              <div>
                <p className='pr-4 cursor-pointer'>
                  Welcome, {session?.user?.name}
                </p>
              </div>
            </Link>
            <Menu as='div' className='relative text-left'>
              <div className='flex'>
                <Menu.Button>
                  <Image
                    src={session?.user?.image!}
                    width='45'
                    height='45'
                    className='rounded-full'
                    alt='/'
                  />
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
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm cursor-pointer'
                          )}
                        >
                          <Link href='/account'>Account</Link>
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm cursor-pointer'
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className='flex items-center'>
            <Link href='/account'>
              <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>
      <div onClick={toggleMenu} className='block md:hidden z-10 cursor-pointer'>
        {isMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          isMenu
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className='text-center'>
          <li
            onClick={() => setIsMenu(false)}
            className='p-4 text-3xl font-bold'
          >
            <Link href='/#hero'>Home</Link>
          </li>
          <li
            onClick={() => setIsMenu(false)}
            className='p-4 text-3xl font-bold'
          >
            <Link href='/#live'>Live Channels</Link>
          </li>
          <li
            onClick={() => setIsMenu(false)}
            className='p-4 text-3xl font-bold'
          >
            <Link href='/#categories'>Top Categories</Link>
          </li>
          <li
            onClick={() => setIsMenu(false)}
            className='p-4 text-3xl font-bold'
          >
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
