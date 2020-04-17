import React from "react";

import Dropzone from "react-dropzone";

export default function InputDreg() {
  return (
    <Dropzone accept="image/*">
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <section className="dropdreg">
          <div
            className="content-drop"
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input style={{ height: 100 }} {...getInputProps()} />
            <p></p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
