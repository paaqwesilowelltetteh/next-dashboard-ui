import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        link: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        link: "/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        link: "/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        link: "/parents",
      },
      {
        icon: "/class.png",
        label: "Classes",
        link: "/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        link: "/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        link: "/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        link: "/assignments",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        link: "/payments",
      },
      {
        icon: "/message.png",
        label: "Messages",
        link: "/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        link: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        link: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        link: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        link: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{menu.title}</span>
            {menu.items.map((item, index) => (
                <Link href={item.link} key={index} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 p-2">
                  <Image src={item.icon} alt={item.label} width={20} height={20}/>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
