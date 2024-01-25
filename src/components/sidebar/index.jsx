import Image from "next/image";
import LogoIcon from "../../../public/icons/logo.svg";
import Dashboard from "../../../public/icons/dashboard.svg";
import Upload from "../../../public/icons/upload.svg";
import Invoice from "../../../public/icons/invoice.svg";
import Schedule from "../../../public/icons/schedule.svg";
import Calender from "../../../public/icons/calender.svg";
import Notofication from "../../../public/icons/notofication.svg";
import Setting from "../../../public/icons/setting.svg";

const sideBar = [
  {
    imageUrl: Dashboard,
    name: "Dashboard",
  },
  {
    imageUrl: Upload,
    name: "Upload",
  },
  {
    imageUrl: Invoice,
    name: "Invoice",
  },
  {
    imageUrl: Schedule,
    name: "Schedule",
  },
  {
    imageUrl: Calender,
    name: "Calender",
  },
  {
    imageUrl: Notofication,
    name: "Notofication",
  },
  {
    imageUrl: Setting,
    name: "Setting",
  },
];

function Sidebar() {
  return (
    <>
      <div className="pt-6">
        <div className="flex justify-center items-center">
          <Image src={LogoIcon} alt="logo" height={46} width={46} />
          <span className="ml-3 font-semibold text-2xl font-Nunito">Base</span>
        </div>

        <div className=" pt-10">
          {sideBar.map((item, index) => (
            <div className="flex  items-center ml-4 pt-8" key="index">
              <div>
                <Image src={item.imageUrl} alt="logo" height={24} width={24} />
              </div>
              <div>
                <span className="ml-4 font-semibold text-base font-Nunito text-gray-500 items-center">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
