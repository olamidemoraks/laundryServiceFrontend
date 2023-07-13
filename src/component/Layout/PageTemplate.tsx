import React from "react";

type PageTemplateProps = {
  children: any;
};

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className="mx-auto flex  my-10 w-[25rem] justify-center px-4 py-4 ">
      {children}
    </div>
  );
};
export default PageTemplate;
