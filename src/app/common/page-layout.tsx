const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-screen h-screen">{children}</div>;
};

export default PageLayout;
