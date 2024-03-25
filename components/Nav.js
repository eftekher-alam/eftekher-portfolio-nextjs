// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link"

//next router 
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return <nav
    className='flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-0 z-50 top-0 w-full lg:w-16 lg:max-w-md  lg:h-screen'
  >
    {/* inner */}
    <div
      className='flex w-full lg:flex-col items-center justify-around lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[70px] lg:h-max py-8 bg-white/10 backdrop-blur-sm text-2xl lg:text-xl lg:rounded-full'
    >
      {
        navData.map((link, index) => {
          return <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-400`}
          >
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden lg:group-hover:flex'>
              <div className='bg-white relative flex text-primary item-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>
                {/* Arrow of the tooltip */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                </div>
              </div>
            </div>
            <div>
              {link.icon}
            </div>
          </Link>
        })
      }
    </div>
  </nav>;
};

export default Nav;
