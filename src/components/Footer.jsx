import logo from "../assets/images/logo.png";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import footerBg from "../assets/images/footer-bg.png";

export const Footer = () => {
  const navLinks = [
    "Features",
    "Solutions",
    "Pricing",
    "Blog",
    "Help Center",
    "Company",
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer
      className="relative overflow-hidden mt-30 max-w-[2000px] mx-auto border border-[#E1E1E1] rounded-t-[48px]  lg:h-[250px]"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 pt-8 md:pt-12 lg:pt-16 h-full flex flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 flex-1 pb-8 lg:pb-0">
          {/* Logo Section */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 top-8 lg:top-16 flex flex-col gap-8 lg:gap-11 items-center lg:items-start">
            <img
              src={logo}
              alt="finably logo"
              className="w-[120px] h-[53px] lg:w-[180px] lg:h-[80px] object-contain"
            />

            <div className="flex items-center gap-4 lg:gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="hover:text-primary transition-colors"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="lg:w-[27px] lg:h-[27px] text-gray-600"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex flex-wrap gap-4  lg:gap-8 justify-center flex-1 mt-35 lg:mt-0">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-primary transition-colors text-sm md:text-base"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-auto pb-3">
          <p className="text-center  text-sm">
            © 2025 Finably. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
