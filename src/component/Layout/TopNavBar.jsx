import { MessageCircleIcon, NutIcon, QrCodeIcon, Search } from "lucide-react";
import { useAuth } from "../../Context/AuthProvider";

const TopNavBar = () => {

  const {user,role} = useAuth()
  
  return (
    <section className="mt-2 p-3 flex justify-between rounded-2xl bg-[#f8f9fa]">
      {/* Topnav left side  */}
      <div className="flex  justify-between gap-2 px-3 rounded-full py-1 bg-white  items-center">
        <div className=" flex  gap-2 px-3 rounded-full py-2">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search task"
            className=" outline-none "
          />
        </div>

        <div className="flex gap-0.5 bg-gray-200 px-1 rounded-md justify-center items-center">
          <QrCodeIcon size={16} />
          <span className=" font-medium">F</span>
        </div>
      </div>

      {/* Topnav Right side  */}
      <div className="flex justify-center items-center gap-3">
        <div className=" flex justify-center items-center gap-1">
          <div className=" bg-white p-2 rounded-full">
            <MessageCircleIcon />
          </div>
          <div className=" bg-white p-2 rounded-full">
            <NutIcon />
          </div>
        </div>

        {/* User frofile show */}
        <div className="flex justify-center items-center gap-2">
          <div></div>
          <div>
            <h2 className="font-medium">{role}</h2>
            <p className=" text-sm text-gray-700">{user?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavBar;
