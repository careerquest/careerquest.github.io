import * as React from "react";
import Footer from "./footer";

import Header from "./header";

const Layout = ({children }) => {
  

  return (
    <div className="font-body">
      <Header />

      <main>

        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
