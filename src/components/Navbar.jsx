import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

const NavMenu = () => {
  return (
    <>
      <div className="lg:flex items-center gap-8">
        <li className="hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Home</a>
        </li>
        <li className="hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Exlore</a>
        </li>
        <li className="hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Travel</a>
        </li>
        <li className="hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Blog</a>
        </li>
        <li className=" hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Pricing</a>
        </li>
      </div>
      <div className="lg:flex lg:items-center gap-4 mt-2 pt-2 border-t-white border-t-2 lg:border-none lg:mt-0 lg:pt-0 lg:justify-end">
        <li className="hover:border-b-red-500 hover:border-b-2 rounded-lg">
          <a href="#"> Login </a>
        </li>
        <li className="hover:border-b-red-500 hover:border-b-1 rounded-lg lg:px-8 lg:py-5 lg:bg-[#FF7757]  ">
          <a href="#"> Sign up</a>
        </li>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className=" w-full flex gap-2 justify-between items-center font-semibold ">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl">
        <SiYourtraveldottv /> Travellian
      </div>

      {/* Menu Toggledown */}
      <div className="flex gap-4 text-xl">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="cursor-pointer">
            <AiOutlineMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-base"
          >
            <NavMenu />
          </ul>
        </div>
        <ul className="hidden lg:grid lg:grid-cols-2 lg:list-none gap-8">
          <NavMenu />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
