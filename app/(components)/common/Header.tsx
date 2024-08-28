import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-primary-color text-white flex items-center h-auto p-5 gap-3">
      <div className="border-with-hover p-1">
        <Link href="/">
          <Image
            src="/cliqbuy.webp"
            alt="logo"
            width={80}
            height={80}
            className="bg-transparent"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center gap-[0.5rem] border-with-hover p-1">
        <div className="">
          <MapPinIcon className="size-4" />
        </div>
        <div className="">
          <p className="text-sm font-extralight">
            Delivering to Chennai 600028
          </p>
          <p className="text-base font-semibold">Update Location</p>
        </div>
      </div>
      <form action="" className="w-[700px] flex">
        <div className="flex-[0.95]">
          <input
            type="text"
            name="header-search"
            id="header-search"
            placeholder="Search anything..."
            className="p-2 w-full h-full rounded-md text-black"
          />
        </div>

        <div className="flex-[0.05]">
          <label htmlFor="search-submit" className="">
            <MagnifyingGlassIcon className="size-6" />
          </label>
          <input
            type="submit"
            name="submit"
            id="search-submit"
            className="opacity-0 invisible"
          />
        </div>
      </form>
      <div className="p-1 border-with-hover">
        <p className="font-normal text-sm">
          Hello, <span>Sign in</span>
        </p>
        <p>Account & Lists</p>
      </div>
      <div className="p-1 border-with-hover">
        <div className="p-1">
          <ShoppingCartIcon className="size-8" />
        </div>
        <p>Cart</p>
      </div>
    </header>
  );
};

export default Header;
