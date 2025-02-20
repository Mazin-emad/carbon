import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

const Navbar = () => {
  return (
    <header className="h-12 flex shadow bg-background z-10">
      <nav className="container flex gap-4">
        <div className="mr-auto flex items-center gap-2">
          <Link
            href="/"
            className="hover:underline text-lg cursor-pointer"
          >
            CARBON
          </Link>
          <Badge>Admin</Badge>
        </div>
        <Link
          href="admin/courses"
          className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
        >
          Courses
        </Link>
        <Link
          href="/admin/products"
          className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
        >
          Products
        </Link>
        <Link
          href="/admin/sales"
          className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
        >
          Sales
        </Link>
        <div className="size-8 self-center">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "100%",
                  height: "100%",
                },
              },
            }}
          />
        </div>
      </nav>
    </header>
  );
};
