import React from "react";

type LandingPageLayoutProps = {
  children: any;
};

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <section className="mx-auto lg:w-[75%] md:w-[80%] w-[90%] min-h-[70vh] py-9">
      {children}
    </section>
  );
};
export default LandingPageLayout;
