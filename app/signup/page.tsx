import connect from "../config/db";
import Country, { countryInt } from "../models/Country";
import Link from "next/link";
import { register } from "@/app/actions/user";

const countryData = async () => {
  await connect();

  const countries: countryInt[] = await Country.find();
  return countries;
};

const page = async () => {
  const countries = await countryData();

  return (
    <div className="w-[600px] mx-auto mt-12">
      <form action={register}>
        <div className="form-fields text-sm">
          <label htmlFor="country">
            <em className="text-red-600 mr-1">*</em> Country / Region:
          </label>
          <select name="country" id="country" className="form-input grow">
            {countries.map((el, index) => {
              return (
                <option key={index} value={el.countryCode}>
                  {el.countryName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-fields text-sm">
          <label htmlFor="role">
            <em className="text-red-600 mr-1">*</em> Please select trade role:
          </label>

          <div className="flex justify-between gap-2 items-center">
            <div className="flex items-center gap-1">
              <input type="radio" name="role" id="buyer" value="buyer" />
              <label htmlFor="buyer">Buyer</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="radio" name="role" id="seller" value="seller" />
              <label htmlFor="seller">Seller</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="radio" name="role" id="both" value="seller" />
              <label htmlFor="both">Both</label>
            </div>
          </div>
        </div>

        <div className="form-fields text-sm flex">
          <label htmlFor="email">
            <em className="text-red-600 mr-1">*</em> Email:
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please set the email as login name"
            className="form-input grow"
          />
        </div>

        <div className="form-fields text-sm flex">
          <label htmlFor="password">
            <em className="text-red-600 mr-1">*</em> Password:
          </label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Set the login password"
            className="form-input grow"
          />
        </div>

        <div className="form-fields text-sm flex">
          <label htmlFor="confirmPassword">
            <em className="text-red-600 mr-1">*</em> Confirm password:
          </label>

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter the login password again"
            className="form-input grow"
          />
        </div>

        <div className="form-fields text-sm flex">
          <label htmlFor="name">
            <em className="text-red-600 mr-1">*</em> Full name:
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your fullname"
            className="form-input grow"
          />
        </div>

        <div className="form-fields text-sm flex">
          <label htmlFor="mobile">
            <em className="text-red-600 mr-1">*</em> Tel:
          </label>

          <div className="grow flex gap-2">
            <select name="phoneCode" id="phoneCode" className="form-input">
              {countries
                .filter((el) => el.phoneCode != "")
                .map((el, index) => {
                  return (
                    <option key={index} value={el.phoneCode}>
                      {`+${el.phoneCode}`}
                    </option>
                  );
                })}
            </select>

            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter your mobile number"
              className="form-input grow"
            />
          </div>
        </div>

        <div className="form-fields text-sm">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree" className="block grow">
            I agree to
            <span className="text-red-500">(a)Free Membership Agreement</span>,
            <span className="text-red-500">(b) Terms of Use</span>, and
            <span className="text-red-500">(c) Privacy Policy</span>. I agree to
            receive more information from Alibaba.com about its products and
            services.
          </label>
        </div>

        <div className="form-fields text-sm w-100 text-center">
          <button className="btn bg-btn p-2">Agree and Register</button>
        </div>
      </form>

      <div className="text-right text-sm">
        <p className="font-thin">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
