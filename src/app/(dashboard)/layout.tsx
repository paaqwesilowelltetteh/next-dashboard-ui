import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import NavBare from "../components/NavBar";
import NavBar from "../components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start p-4"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchooLama</span>
        </Link>
        <Menu />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
