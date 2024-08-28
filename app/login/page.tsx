import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[600px] relative">
      <Image
        src="/uploads/banner/login-banner.jpg"
        alt="alt"
        fill
        className="absolute top-0 left-0 object-cover"
      />

      <div className="max-w-screen-sm h-auto absolute top-12 right-32 w-96 p-4 bg-white">
        <div className="flex justify-end h-[50px]">
          <Image
            src=""
            alt="alt"
            width={50}
            height={50}
            className="border border-gray-400"
          />
        </div>
        <form action="">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input w-full"
              placeholder="Enter password"
            />
          </div>

          <div className="mt-2">
            <button type="submit" className="block btn">
              Signin
            </button>
          </div>
        </form>

        <div className="mt-1 mb-3 text-right">
          <Link href="/signup" className="text-sm text-blue-400">
            Create account
          </Link>
        </div>

        <hr />

        {/* TODO: need to implement google login */}
      </div>
    </div>
  );
};

export default page;
