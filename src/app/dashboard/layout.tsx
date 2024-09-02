import LeftSideBar from "@/components/admin/LeftSideBar";
import TopBar from "@/components/admin/TopBar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Secret - Admin Dashboard",
  description: "Admin dashboard to manage Secret data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section lang="en">
      <div>
        {/* <ToasterProvider /> */}
        <div className="flex max-lg:flex-col text-grey-1">
          <LeftSideBar />
          <TopBar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </section>
  );
}
