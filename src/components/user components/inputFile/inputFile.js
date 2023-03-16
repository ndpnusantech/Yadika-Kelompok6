import { useState, useRef } from "react";
import "./input.css";

const InputFile = () => {
  const grup = "/assets/inputFile/Grup.svg";
  const vic = "/assets/inputFile/Group 73.png";
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(grup);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = [...e.dataTransfer.files];
    // handle uploaded files here
    const file = files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // handle file upload here
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="inputFile">
      <h2>
        Masukan bukti pembayaran <br /> berupa file img
      </h2>
      <img src={grup} alt="" />
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="box"
        style={{
          border: dragging ? "2px dashed #aaa" : "2px dashed #ccc",
          fontSize: "1.2rem",
          color: dragging ? "#555" : "#aaa",
        }}
      >
        <img
          src={image ? image : vic}
          alt=""
          className={image ? "imageUpload" : "img-vic"}
        />
        <button className="btn-upload" onClick={handleButtonClick}>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
            ref={fileInputRef}
          />
          Upload Image
        </button>{" "}
        <br />
        {image ? (
          <button
            className="btn mt-4"
            style={{
              marginLeft: "280px",
              backgroundColor: "#094067",
              color: "#fff",
            }}
          >
            Konfirmasi
          </button>
        ) : (
          <>
            <h4>Or drop a file,</h4>
            <p>Paste img or URL</p>
          </>
        )}
      </div>
    </div>
  );
};

export default InputFile;
