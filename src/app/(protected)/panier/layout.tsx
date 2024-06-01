import ContentLayout from "@/components/layouts/Content";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContentLayout>{children}</ContentLayout>;
}
