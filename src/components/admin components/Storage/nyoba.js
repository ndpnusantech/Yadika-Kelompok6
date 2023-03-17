import React, { useState } from 'react';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    const image = {
      id: Date.now(),
      url: imageUrl
    };
    storedImages.push(image);
    localStorage.setItem('images', JSON.stringify(storedImages));

    setImageUrl('');
    setFile(null);
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded image" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default ImageUpload;