const SectionLayout = ({
    id,
    children,
  }: Readonly<{
    id: string;
    children: React.ReactNode;
  }>) => {
    return <div id={id}>{children}</div>;
  };
  
  export default SectionLayout;
