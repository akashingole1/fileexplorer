import React, { useState } from "react";

function Folder({ dir }) {
  const [show, setShow] = useState(false);

  if (dir.type === "folder") {
    return (
      <div
        style={{ padding: 5 }}
        onClick={(e) => {
          setShow(!show);
          e.stopPropagation();
        }}
      >
        <span className="folder">🗂 {dir.name}</span>
        <div style={{ display: `${show ? "block" : "none"}` }}>
          {Array.isArray(dir.items) &&
            dir.items.length &&
            dir.items.map((el, idx) => <Folder key={idx} dir={el} />)}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗄 {dir.name}</span>;
  }
}

export default Folder;
