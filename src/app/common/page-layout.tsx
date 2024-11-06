const PageLayout = ({
  id,
  children,
}: Readonly<{
  id: string;
  children: React.ReactNode;
}>) => {
  return <div className="w-screen h-screen" id={id}>{children}</div>;
};

export default PageLayout;
