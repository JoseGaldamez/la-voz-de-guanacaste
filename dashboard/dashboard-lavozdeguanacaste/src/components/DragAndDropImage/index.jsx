import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragAndDropImage.css";
import firebase from "../../auth/firebaseAuth.js";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

export const DragAndDropImage = ({ banner }) => {
  const [file, setFile] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (fileImage) => {
    fileImage.arrayBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: fileImage.type });
      const url = URL.createObjectURL(blob);
      setUrlImage(url);
    });

    setFile(fileImage);
  };

  const urlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUpload = async () => {
    setLoading(true);
    const storageRef = ref(firebase.storage, `/${banner}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setProgress(percent);
      },
      (err) => {
        toast.error(err.message);
        setLoading(false);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((urlDownload) => {
          handleSaveChanges(urlDownload);
        });
      }
    );
  };

  const handleSaveChanges = async (urlDownload) => {
    const data = {
      [banner]: { image: urlDownload, url: url },
    };

    await fetch(
      "https://lavozdeguanacaste-app-default-rtdb.firebaseio.com/ads.json",
      {
        method: "PATCH",
        body: JSON.stringify(data),
      }
    );

    setUrlImage(urlDownload);
    setProgress(0);
    setLoading(false);

    toast.success("Los datos se han guardado correctamente");
  };

  return (
    <div className="upload-image-container">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={["JPG", "PNG", "JPEG"]}
      />
      {urlImage && <img src={urlImage} alt="imagen" />}
      <input
        onChange={urlChange}
        type="text"
        placeholder="https://url.destino.com/"
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? `Subiendo... ${progress} %` : "Guardar cambios"}
      </button>
    </div>
  );
};
