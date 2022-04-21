
import { useState } from "react";

const CharactersLimitComponent = ({ isShowbutton, content, limit }) => {

  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content === null) {
    // there is nothing more to show
    return (
      <>{content}</>
    );
  }
  if (content.length <= limit) {
    // there is nothing more to show
    return (
      <>{content}</>
    );
  }
  if (!isShowbutton) {
    const toShow = content.substring(0, limit) + "...";
    return (
      <>{toShow}</>
    );
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <>
        {content}
        <span className="readmore-show-hide" onClick={showLess}>show less</span>
      </>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` span
  const toShow = content.substring(0, limit) + "...";
  return (
    <>
      {toShow}
      <span className="readmore-show-hide" onClick={showMore}>show more</span>
    </>
  );
}

export default CharactersLimitComponent;