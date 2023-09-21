import React from "react";

import Section from "~/components/Section.jsx";
import songs from "~/data/songs.js";
const Home = () => {
  return (
    <>
      <div className="grid gap-y-8">
        <Section title="Recently played" more="/blabla" items={songs} />
        <Section title="Shows to try" more="/blabla" items={songs} />
        <Section title="Made For Tayfun Erbilen" more="/blabla" items={songs} />
      </div>
    </>
  );
};

export default Home;
