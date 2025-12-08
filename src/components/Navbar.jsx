import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Button } from "./common/Button";
import { useClickOutside } from "../hooks/useClickOutside";
import { navLinks } from "../data/navLinks";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setOpenDropdown(null));
  const mobileMenuRef = useClickOutside(() => setIsMobileMenuOpen(false));

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex  gap-8 lg:gap-[50px] text-black mx-2">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative text-base lg:text-lg"
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
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-b-[12px] shadow-lg border border-gray-100 p-6 z-50 animate-fade-in">
                      <div className="flex gap-12">
                        {link.dropdown.sections.map((section, index) => (
                          <div key={index} className="shrink-0">
                            {section.title && (
                              <>
                                <h3 className="text-lg font-medium text-black mb-2 whitespace-nowrap">
                                  {section.title}
                                </h3>
                                <div className="h-px bg-[#DBEFFF] my-5"></div>
                              </>
                            )}
                            <ul className="space-y-5">
                              {section.links.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to={item.href}
                                    className="hover:text-primary transition-colors duration-200 block whitespace-nowrap text-base"
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
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="outline" className="text-[16px]">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className="text-primary transition-opacity duration-200"
            />
          ) : (
            <Menu
              size={24}
              className="text-primary transition-opacity duration-200"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 max-h-[calc(100vh-90px)] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6">
            {navLinks.map((link) => (
              <div key={link.label} className="mb-6">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="w-full text-left text-lg font-medium text-black mb-3 flex items-center justify-between"
                    >
                      {link.label}
                      {openDropdown === link.label ? (
                        <ChevronUp size={20} className="text-primary" />
                      ) : (
                        <ChevronDown size={20} className="text-primary" />
                      )}
                    </button>

                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-4">
                        {link.dropdown.sections.map((section, index) => (
                          <div key={index} className="mb-4">
                            {section.title && (
                              <h4 className="text-base font-medium text-gray-600 mb-3">
                                {section.title}
                              </h4>
                            )}
                            <ul className="space-y-3">
                              {section.links.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to={item.href}
                                    className="text-black hover:text-primary transition-colors block text-sm"
                                    onClick={handleLinkClick}
                                  >
                                    - {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="text-lg font-medium text-black block mb-3"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                className="text-[16px] w-full"
                onClick={handleLinkClick}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
