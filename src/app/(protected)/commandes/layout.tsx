import Drawer from "@/components/layouts/Drawer";
import CommandsList from "./List";
import ContentLayout from "@/components/layouts/Content";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Drawer renderPage={<ContentLayout>{children}</ContentLayout>}>
      <CommandsList />
    </Drawer>
  );
}
