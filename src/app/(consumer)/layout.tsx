import { canAccessAdminPages } from "@/accessPermeations/general";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/clerk";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

export default function ConsumerLayout({
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
        <Link
          href="/"
          className="mr-auto hover:underline flex items-center text-lg cursor-pointer"
        >
          CARBON
        </Link>
        <Suspense>
          <SignedIn>
            <AdminLink />
            <Link
              href="/courses"
              className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
            >
              My Courses
            </Link>
            <Link
              href="/purchases"
              className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
            >
              Purchases History
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
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <Button className="self-center" asChild>
              <SignInButton>Sign In</SignInButton>
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
};

async function AdminLink() {
  const user = await getCurrentUser();
  if (!canAccessAdminPages(user)) return null;

  return (
    <Link
      href="/admin"
      className="hover:bg-accent/10 flex items-center px-2 cursor-pointer"
    >
      Admin
    </Link>
  );
}
