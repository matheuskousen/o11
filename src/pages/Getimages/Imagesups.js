import React, { useState, useEffect } from "react";
import api from "../../servers/api";

export default function Imagesupload() {
  const [file, setFile] = useState([]);

  const imgId = localStorage.getItem("imgId");
  useEffect(() => {
    api
      .get("post", {
        headers: {
          Authorization: imgId,
        },
      })
      .then((response) => {
        setFile(response.data);
      });
  }, [imgId]);
  return (
    <div>
      {file.map((myimgs) => (
        <div key={myimgs.id}>
          <img src={myimgs.key} alt="logo" />
        </div>
      ))}
    </div>
  );
}
