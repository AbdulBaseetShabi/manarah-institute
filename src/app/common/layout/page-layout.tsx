interface PageLayoutProps {
  id: string;
  children: React.ReactNode;
  fixed?: boolean;
  fullWidth?: boolean;
  fullPage?: boolean;
  spacing?: 'top' | 'bottom' | 'both';
  backgroundColor?: string;
}
export const PageLayoutSpacing = "pt-8 px-4 lg:px-32 lg:pt-12";
const PageLayout = ({
  id,
  children,
  fullPage = true,
  fixed = false,
  fullWidth = false,
  spacing = 'both',
  backgroundColor = "white"
}: Readonly<PageLayoutProps>) => {
  const screenHeight = `${fullPage ? (fixed ? "h-screen" : "min-h-screen") : ""}`
  const padding = spacing === 'both' ? 'py-32' : spacing === 'top' ? 'pt-32' : 'pb-32';
  return <div className={`w-screen ${screenHeight} ${fullWidth ? "w-full" : PageLayoutSpacing} ${padding} bg-[${backgroundColor}]` } id={id} style={{
    backgroundColor,
  }}>{children}</div>;
};

export default PageLayout;
