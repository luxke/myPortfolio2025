
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const [isInHome, setIsInHome] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const homeSection = document.getElementById("home");

    if (homeSection) {
      const homeRect = homeSection.getBoundingClientRect();
      const isCurrentlyInHome = homeRect.top <= 0 && homeRect.bottom >= 80;
      setIsInHome(isCurrentlyInHome);
    }

    if (currentScrollY === 0) {
      setIsVisible(true);
    }
   
    else if (currentScrollY > lastScrollY && isInHome) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY && isInHome) {
      setIsVisible(false);
    } else {
    
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, isInHome]);

  return (
    <nav
  className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 
    ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    ${isInHome ? "bg-transparent" : "bg-white shadow-lg"} 
    text-gray-800`}
>
      <div className="font-nunito text-xl font-black border-2 border-gray-400 px-2 py-1 ml-2">
        Fl
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium  flex-1 justify-center ml-10">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Contact
            </Link>
          </li>
        </ul>

     {isOpen && (
        <ul className="absolute top-16 left-0 w-full flex flex-col items-end px-6 space-y-4 py-4 md:hidden">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:font-bold transition-all cursor-pointer"
              activeClass="font-bold underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;