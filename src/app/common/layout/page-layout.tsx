interface PageLayoutProps {
  id: string;
  children: React.ReactNode;
  fixed?: boolean;
  fullWidth?: boolean;
}
export const PageLayoutSpacing = "pt-8 px-4 lg:px-32 lg:pt-12";
const PageLayout = ({
  id,
  children,
  fixed = false,
  fullWidth = false
}: Readonly<PageLayoutProps>) => {
  return <div className={`w-screen ${fixed ? "h-screen" : "min-h-screen"} ${fullWidth ? "w-full" : PageLayoutSpacing}`} id={id}>{children}</div>;
};

export default PageLayout;
