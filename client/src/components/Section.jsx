import { NavLink } from "react-router-dom";
import SongItem from "./SongItem.jsx";
import Title from "./Title.jsx";

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Section;
