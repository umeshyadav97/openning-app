import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./styles/Layout.module.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex ">
        <div className="w-full lg:w-1/6 p-4 hidden sm:block">
          <Sidebar />
        </div>
        <div className={`w-full lg:w-5/6 ${inter.className} p-4`}>{children}</div>
      </div>
    </html>
  );
}
