import { useEffect } from "react";

/* eslint-disable react/prop-types */
const CodePenEmbed = ({
  slug,
  user,
  height = 250,
  defaultTab = "",
  title = "",
  editable = "true",
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <p
      className="codepen"
      data-height={height}
      data-default-tab={defaultTab}
      data-slug-hash={slug}
      data-pen-title={title}
      data-editable={editable}
      data-user={user}
      style={{
        height: `${height}px`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
        margin: "1em 0",
        padding: "1em",
      }}
    >
      <span>
        See the Pen{" "}
        <a href={`https://codepen.io/${user}/pen/${slug}`}>{title}</a> by Junior
        Jusmé (<a href={`https://codepen.io/${user}`}>@{user}</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  );
};

export default CodePenEmbed;
