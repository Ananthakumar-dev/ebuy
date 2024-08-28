import React from "react";

const footerLinks = [
  "Policies and rules",
  "Legal Notice",
  "Product Listing Policy",
  "Intellectual Property Protection",
  "Privacy Policy",
  "Terms of Use",
  "Integrity Compliance"
];

const Footer = () => {
  return <footer className="border-t border-gray-200 my-4 bg-gray-100 w-full text-center pt-6 *:mb-2">
    <p> E buy | ebuy.com </p>

    <p>
      {
        footerLinks.map((el, index) => {
          return <span key={index} className="cursor-pointer">{`${el} `} &#183; </span>
        })
      }
    </p>

    <p>Copyright © 2023 Ananthakumar. All rights reserved.</p>
  </footer>;
};

export default Footer;
