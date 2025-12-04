import logo from "../../assets/images/logo.png";
import { Button } from "../common/Button";

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

          <div className="hidden md:flex gap-6">
            <a href="#" className="text-gray-800">
              Product
            </a>
            <a href="#" className="text-gray-800">
              Pricing
            </a>
            <a href="#" className="text-gray-800">
              Resources
            </a>
            <a href="#" className="text-gray-800">
              Company
            </a>
          </div>

          <Button variant="outline">Get Started</Button>
        </div>
      </nav>
    </>
  );
};
