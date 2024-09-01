import React from "react";
import SideNav from "../(components)/dashboard/SideNav";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex align-center gap-6 mt-2 h-[calc(100vh-144px)]">
      {/* Because header has 80px and nav has 30px total 110px */}
      <SideNav />
      {children}
    </div>
  );
};

export default layout;
