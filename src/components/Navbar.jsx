import logo from "../assets/images/logo.png";
import { Button } from "./common/Button";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-[90px]">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="finably logo"
              className="w-[142px] h-[42px] object-contain"
            />
          </div>

          <div className="hidden md:flex gap-[48px] text-black">
            <a href="#" className="">
              Product
            </a>
            <a href="#" className="">
              Pricing
            </a>
            <a href="#" className="">
              Resources
            </a>
            <a href="#" className="">
              Company
            </a>
          </div>

          <Button variant="outline" className="text-[16px]">
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
};
