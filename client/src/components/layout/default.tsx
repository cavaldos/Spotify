import React from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "~/components/sidebar";
import { TailwindIndicator } from "~/components/tailwind-indicator";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <div className="select-none w-full absolute left-0 right-0 top-0	">
        <div className=" 	flex h-screen w-[100] flex-row overflow-clip rounded-none bg-transparent text-white dark:border-[#413a43] m-0 p-0">
          <div className="flex flex-grow flex-row">
            <div className="w-fit float-left	">
              <SideBar />
            </div>
            <div className="w-full ">
              <Outlet />
            </div>
          </div>
          <div className="fixed bottom-0 w-full ">{/* <Player /> */}</div>
          <TailwindIndicator />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
