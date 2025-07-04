import Link from 'next/link';

const navLinkStyles = "text-[#000000] no-underline font-dm-sans text-[16px] font-medium leading-normal hover:text-gray-600 whitespace-nowrap decoration-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-1px]";
const activeNavLinkStyles = "border-b-2 border-black pb-1";

const buttonStyles = `
  flex justify-center items-center
  w-[180px] h-[45px]
  px-[10px] py-[8px]
  gap-[12px]
  flex-shrink-0
  rounded-[67.066px]
  text-[#FFFFFF]
  font-dm-sans text-[15px] font-medium leading-normal
  hover:opacity-90 transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-lg hover:shadow-black/20
  backdrop-blur-[0.5px]
  no-underline decoration-transparent
  visited:text-white hover:text-white
  transform hover:-translate-y-1
`;

const Navbar = () => {
  return (
    <div className="w-[1512px] h-[80px] bg-[#f5f5f5] fixed top-0 left-0 right-0 z-50 mx-auto" style={{ margin: '0 auto', transform: 'translateX(-50%)', left: '50%' }}>
      <nav className="h-full flex items-center">
        {/* Left frame with logo */}
        <div className="pl-[70px]">
          <div className="w-[72px] h-[72px]">
            <img src="/logo.svg" alt="UBC UX HUB" className="w-full h-full" />
          </div>
        </div>

        {/* Right frame with nav links and button */}
        <div className="ml-auto pr-[70px] flex items-center gap-[40px]">
          {/* Navigation Links */}
          <Link 
            href="/" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link 
            href="#who-we-are" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            About Us
          </Link>
          <Link 
            href="/events" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            Events
          </Link>
          <Link 
            href="/team" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            Meet the Team
          </Link>

          {/* Become a Member Button */}
          <Link 
            href="/join"
            className={buttonStyles}
            style={{
              background: 'linear-gradient(156deg, #00183B -1.32%, #9478B1 42.98%, #E89595 121.99%)',
              textDecoration: 'none',
              color: '#FFFFFF'
            }}
          >
            Become a Member
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 