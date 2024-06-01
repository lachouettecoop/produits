import Drawer from "@/components/layouts/Drawer";
import ProductsFilters from "./Filters";
import ContentLayout from "@/components/layouts/Content";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Drawer renderPage={<ContentLayout>{children}</ContentLayout>}>
      <ProductsFilters />
    </Drawer>
  );
}
