export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4 pb-20 md:pb-4">{children}</div>;
}
