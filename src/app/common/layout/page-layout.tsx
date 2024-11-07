interface PageLayoutProps {
  id: string;
  children: React.ReactNode;
  fixed?: boolean
}
const PageLayout = ({
  id,
  children,
  fixed = false
}: Readonly<PageLayoutProps>) => {
  return <div className={`w-screen ${fixed ? "h-screen" : "min-h-screen"} pt-8 px-4 lg:px-32 lg:pt-12`} id={id}>{children}</div>;
};

export default PageLayout;
