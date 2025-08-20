import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="text-lg text-gray-500 mb-4 flex gap-2">
      <Link to="/" className="hover:underline font-medium">Home</Link>

      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index} className="flex gap-2 items-center">
            <span>{">"}</span>
            {isLast ? (
              <span className="text-black font-medium capitalize">{value}</span>
            ) : (
              <Link to={routeTo} className="hover:underline capitalize">
                {value}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
