import { RouteId } from "../types";

interface PageLayoutProps {
  id: RouteId;
  children: React.ReactNode;
  fixed?: boolean;
  fullWidth?: boolean;
  fullPage?: boolean;
  spacing?: 'top' | 'bottom' | 'both' | 'none';
  backgroundColor?: string;
  centerContent?: boolean;
}
export const PageLayoutSpacing = "pt-8 px-4 lg:px-32 lg:pt-12";
const PageLayout = ({
  id,
  children,
  fullPage = true,
  fixed = false,
  fullWidth = false,
  centerContent = true,
  spacing = 'both',
  backgroundColor = "white"
}: Readonly<PageLayoutProps>) => {

  const getPadding = (spacing: PageLayoutProps['spacing']) => {
    switch(spacing){
      case 'both':
        return 'py-32';
      case 'bottom': 
        return 'pb-32';
      case 'top':
        return 'pt-32';
      case 'none':
        return '';
      default:
        return '';
    }
  }
  const screenHeight = `${fullPage ? (fixed ? "h-screen" : "") : ""}`
  const centerContentCss = `${centerContent ? "flex justify-center content-center flex-col" : ""}`
  const padding = getPadding(spacing);
  return <div className={`w-screen ${centerContentCss}	${screenHeight} ${fullWidth ? "w-full" : PageLayoutSpacing} ${padding} bg-[${backgroundColor}]` } id={id} style={{
    backgroundColor,
  }}>{children}</div>;
};

export default PageLayout;
