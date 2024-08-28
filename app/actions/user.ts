"use server";

import Country from "../models/Country";
import User from "../models/User";

export const register = async (formData: FormData) => {
  try {
    const country = formData.get("country");
    const role = formData.get("role");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const name = formData.get("name");
    const phoneCode = formData.get("phoneCode");
    const mobile = formData.get("mobile");
    const agree = formData.get("agree");

    if (agree !== "on") {
      return { status: false, message: "User doesnot agreed", data: {} };
    }

    const countryExists = await Country.countDocuments({
      countryCode: country,
    });
    if (!countryExists) {
      return { status: false, message: "Country doesnot exists", data: {} };
    }

    if (password != confirmPassword) {
      return {
        status: false,
        message: "Password and confirm password mismatch",
        data: {},
      };
    }

    const phoneCodeExists = await Country.countDocuments({ phoneCode });
    if (!phoneCodeExists) {
      return { status: false, message: "Phone code doesnot exists", data: {} };
    }

    const user = new User({
      name,
      email,
      password,
      role,
      country,
      phoneCode,
      phone: mobile,
    });

    await user.save();
    return { status: true, message: "User created", data: user };
  } catch (err: any) {
    console.log(err.message);
    return { status: false, message: err.message, data: {} };
  }
};
