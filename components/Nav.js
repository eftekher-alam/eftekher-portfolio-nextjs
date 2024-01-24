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
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
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
    className='flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md  lg:h-screen'
  >
    {/* inner */}
    <div
      className='flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[70px] lg:h-max py-8 bg-white/10 backdrop-blur-sm text-2xl lg:text-xl lg:rounded-full'
    >
      {
        navData.map((link, index) => {
          return <Link key={index} href={link.path} >{link.icon}</Link>
        })
      }
    </div>
  </nav>;
};

export default Nav;
