import React, { useState } from "react";
import axios from "axios";

const Cloudinary = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // *function to upload image to Cloudinary
  const uploadImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Bro_Julius"); // replace with yours

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dw1gzsri4/image/upload",
        formData
      );
      setUrl(res.data.secure_url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };
 
  return (
    <div className="p-4">
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage} className="bg-blue-600 text-white px-4 py-2 mt-2">
        Upload
      </button>

      {url && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={url} alt="Uploaded" className="max-w-xs" />
        </div>
      )}
    </div>
  );
};

export default Cloudinary;