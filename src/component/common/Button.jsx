import React from "react";
import { Link } from "react-router";

const Button = ({
  children,
  type,
  to,
  onClick,
  varinrt = "primary",
  className = "",
  ...props
}) => {
  const baseClasses = "px-6 py-2.5 rounded-full font-medium  transition duration-200 flex justify-center items-center gap-2 "
  const varinrts={
    primary:"bg-gradient-to-r  from-brand-primary/90 to-brand-secondary/90 hover:from-brand-primary  text-white hover:to-brand-secondary ",
    secondary:"border border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-500",
    download:"bg-brand-secondary/80  hover:bg-brand-secondary  text-white  ",
  }
  const buttonClasses = `${baseClasses} ${varinrts[varinrt] ||varinrts.primary} ${className}`

  if (to) {
  return(
    <Link to={to} className={buttonClasses} {...props} >{children}</Link>
  )
  
}
  return (
    <button onClick={onClick} className={buttonClasses} {...props}  >
      {children}
    </button>

  );
};

export default Button;
