import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Button } from "./common/Button";
import { useClickOutside } from "../hooks/useClickOutside";
import { navLinks } from "../data/navLinks";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useClickOutside(() => setOpenDropdown(null));

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white relative">
      <div className="container mx-auto px-4 flex items-center justify-between h-[90px]">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="finably logo"
            className="w-[142px] h-[42px] object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-[50px] text-black">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              ref={
                link.hasDropdown && openDropdown === link.label
                  ? dropdownRef
                  : null
              }
            >
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(link.label)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-b-[12px] shadow-lg border border-gray-100 p-6 z-50">
                      <div className="flex gap-12">
                        {link.dropdown.sections.map((section, index) => (
                          <div key={index} className="shrink-0">
                            {section.title && (
                              <>
                                <h3 className="text-xl font-medium text-black mb-2 whitespace-nowrap">
                                  {section.title}
                                </h3>
                                <div className="h-px bg-[#DBEFFF] my-8"></div>
                              </>
                            )}
                            <ul className="space-y-5">
                              {section.links.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to={item.href}
                                    className="hover:text-primary transition-colors block whitespace-nowrap"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <Button variant="outline" className="text-[16px]">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
