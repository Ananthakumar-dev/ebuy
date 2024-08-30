import Link from "next/link";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <>
      <header className="bg-header h-[80px] text-white flex justify-between  items-center p-4 gap-4">
        <Link href="/" className="block h-full w-[210px]">
          <div className="bg-[url('/images/logo.png')] h-full w-full bg-contain bg-no-repeat bg-center"></div>
        </Link>

        <form
          action=""
          className="hidden md:flex items-center max-w-[600px] flex-grow"
        >
          <input
            type="search"
            name="search"
            id="header-search"
            placeholder="Search..."
            className="hidden md:block py-[4px] px-2 rounded-l-lg shadow-inner text-black outline-none w-full"
          />
          <label
            htmlFor="header-search"
            className="inline-block border border-l-0 rounded-r-lg px-2 py-0.5"
          >
            <button type="submit">
              <MagnifyingGlassIcon className="size-5" />
            </button>
          </label>
        </form>

        <div className="flex items-center gap-5">
          <div className="md:hidden">
            <button type="button">
              <MagnifyingGlassIcon className="size-6" />
            </button>
          </div>

          <div className="md:flex gap-2 p-2 items-center cursor-pointer border border-transparent hover:border-gray-200 hover:rounded-lg">
            <button type="button">
              <GlobeAltIcon className="size-6" />
            </button>

            <p className="hidden md:block">English-USD</p>
          </div>

          <div className="md:flex gap-2 items-center p-2 cursor-pointer border border-transparent hover:border-gray-200 hover:rounded-lg">
            <button type="button">
              <UserIcon className="size-6" />
            </button>

            <p className="hidden md:block">Signin</p>
          </div>

          <div>
            <button className="bg-btn py-1.5 px-6 rounded-2xl font-semibold text-sm whitespace-nowrap md:text-md">
              Sign up
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-header h-[30px] text-white flex justify-between  items-center px-4 py-6 gap-4 text-sm font-[500]">
        <ul className="flex gap-4 items-center *:cursor-pointer">
          <li className="flex items-center gap-1">
            <Bars3Icon className="size-6" />
            <span>All categories</span>
          </li>
          <li> Featured categories </li>
          <li>Trade Assurance</li>
        </ul>
        <ul className="hidden md:flex gap-4 items-center *:cursor-pointer">
          <li>Help Center</li>
          <li>Become a Seller or Supplier</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
