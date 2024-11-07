const PageLayout = ({
  id,
  children,
}: Readonly<{
  id: string;
  children: React.ReactNode;
}>) => {
  return <div className="w-screen h-screen pt-8 px-4 lg:px-32 lg:pt-12" id={id}>{children}</div>;
};

export default PageLayout;
