import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { SideBar } from "./components/sidebar";
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
      <h1>Spotify</h1>
      <SideBar />
    </>
  );
};

export default App;
{
  /* <RouterProvider router={routers} /> */
}
