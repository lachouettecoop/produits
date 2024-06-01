"use client";

import { useUser } from "@/state/user";
import { useRouter } from "next/navigation";
import MobileLayout from "@/components/layouts/Mobile";
import DesktopLayout from "@/components/layouts/Desktop";
import { LINKS } from "@/hooks/useMenuItems";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuth } = useUser((state) => state);
  const router = useRouter();

  if (!isAuth) {
    router.push(LINKS.login);
  }

  return (
    <>
      <MobileLayout>{children}</MobileLayout>
      <DesktopLayout>{children}</DesktopLayout>
    </>
  );
}
