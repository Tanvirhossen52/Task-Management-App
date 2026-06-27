import {
  Briefcase,
  Calendar,
  FolderRoot,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Smartphone,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import Button from "../common/Button";

function EmpolleeLayout() {

     const menuItems = [
        {
          navIcon: <LayoutDashboard size={20} />,
          label: "Dashboard",
         
          path: "/empollyeDashbord",
        },
        {
          navIcon: <Briefcase size={20} />,
          label: "Task",
          
          path: "/AllTask",
        },
        {
          navIcon: <Calendar size={20} />,
          label: "Review Task",
          
          path: "/ReviewTask",
        },
        {
          navIcon: <MessageSquare size={20} />,
          label: "Messages",
         
          path: "/Messages",
        },
        {
          navIcon: <FolderRoot size={20} />,
          label: "Task Management",
          path: "/Task Management",
        },
      ];

       const generalItems = [
    {
      generalnavIcon: <Settings size={20} />,
      label: "Settings",
      active: false,
    },
    { generalnavIcon: <HelpCircle size={20} />, label: "Help", active: false },
    { generalnavIcon: <LogOut size={20} />, label: "LogOut", active: false },
  ];
  return (
    <div className="w-64  bg-[#f8f9fa] rounded-2xl">
      <div className="flex flex-col  p-2 ">
        {/* Logo section 1 */}
        <div className=" text-center ">
          <div className="flex  items-center gap-2 mb-4">
            <div className="bg-[#1B4332] p-2 rounded-xl text-white font-bold text-md">
              D
            </div>
            <h2 className=" font-bold text-md">Wellcome! Denzo</h2>
          </div>
        </div>

        {/* Menu section 2 */}
        <nav>
          <p className=" text-gray-500 font-semibold text-sm mb-2">Menu</p>
          {menuItems.map((items, index) => (
            <NavLink
              to={items.path}
              key={index}
              className={({isActive})=>`flex items-center gap-2 mb-3 cursor-pointer transition-all${isActive?" text-brand-primary":" text-gray-500"}`}
            >
              
                {items.navIcon}
                <span >{items.label}</span>
              
            </NavLink>
          ))}
        </nav>

        {/* Gneral section 3 */}
        <nav className="mb-3">
          <p className=" text-gray-500 font-semibold text-sm mb-2">GENERAL</p>
          {generalItems.map((items, index) => (
            <Link
              key={index}
              className="flex items-center justify-between mb-3 cursor-pointer transition-all"
            >
              <div
                className={`flex items-center gap-2 ${items.active ? " text-[#1B4332]" : "text-gray-500"}`}
              >
                {items.generalnavIcon}{" "}
                <span
                  className={`font-medium ${items.active ? "text-gray-900 " : "text-gray-500"}`}
                >
                  {" "}
                  {items.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile App section 4 */}
        <div className=" bg-green-950 p-3 text-white w-full  rounded-2xl">
          <div className="flex flex-col gap-2">
            <div className="p-1.5 text-black bg-white rounded-full w-8 h-8 flex justify-center items-center">
              {" "}
              <Smartphone size={20} />
            </div>
            <h2 className="text-xl ">
              {" "}
              <span className="font-medium ">Download</span> our <br /> mobile
              App
            </h2>
            <p className=" text-sm">Get easy in another way</p>
            <Button varinrt="download">Download</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpolleeLayout
