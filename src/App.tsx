import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import routers  from "~/routers/index";
// import { TailwindIndicator } from "./components/tailwind-indicator";
const App: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [trackUrls, setTrackUrls] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.spotify.com/v1/search?q=son+tung&type=album&include_external=audio",
        {
          headers: {
            Authorization:
              "Bearer " +
              "BQAd5qUuQqwINSLPTFT_s8ZRj2onxi5YDjUOPMga8e-vHZPfmDsqCtz0hCsa-niRIVUndEBKL4ldFU8j2JfG09mIDSCiZnq_CESQNpCjw-c7KUgWy7o",
          },
        }
      )
      .then((res) => {
        console.log("khanh", res.data);

        setAlbums(albums);
        setTrackUrls(trackUrls);
        console.log("khanh", trackUrls);
      })
      .catch((err) => {
        console.log("khanh", err);
      });
  }, []);

  return (
    <>
      
      <RouterProvider router={routers} />
    </>
  );
};

export default App;

// <div className="select-none w-full absolute left-0 right-0 top-0	">
//   <div className=" 	flex h-screen w-[100] flex-row overflow-clip rounded-none bg-transparent text-white dark:border-[#413a43] m-0 p-0">
//     <div className="flex flex-grow flex-row">
//       <div className="w-fit float-left	">
//         <SideBar />
//       </div>
//       <div className="w-full ">
//         <Page />
//         asdf
//       </div>
//     </div>
//     <div className="fixed bottom-0 w-full ">{/* <Player /> */}</div>
//     <TailwindIndicator />
//   </div>
// </div>;
