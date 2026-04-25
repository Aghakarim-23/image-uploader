import { IoCloudUploadOutline } from "react-icons/io5";
import { FaFolder, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  
  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    const mapped = files.map((file) => ({
      id: uuidv4(),
      name: file.name,
      size: file.size,
      type: file.type,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...mapped]);
  };

  const handleDelete = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  const handleRename = (id, newName) => {
    setImages((prev) =>
      prev.map((image) =>
        image.id === id ? { ...image, name: newName } : image,
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Image uploader container */}
      <div className="max-w-xl w-full flex flex-col items-center text-center gap-4 border-2 border-dashed border-violet-400 p-6 rounded-md">
        <IoCloudUploadOutline className="text-6xl text-violet-700" />
        <p>
          <b>Drag & drop Images here</b>
          <br />
          or click to browse files
        </p>
        <div className="flex items-center gap-3 px-4 py-2 rounded-md text-white bg-violet-700 active:bg-violet-800 hover:scale-105 transition relative">
          <FaFolder className="" />
          <span>Choose Files</span>
          <input
            type="file"
            name="image"
            id="image"
            multiple
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Image container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((image) => (
          <div
            onClick={() => console.log(image)}
            key={image.id}
            className="max-w-xs w-full rounded-md border mt-10"
          >
            <div className="border-b">
              <img
                src={image.preview}
                className="w-full h-48 object-contain "
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 ">
              {/* Edit button */}
              <div className="flex justify-between border-b px-3 py-4">
                {editingId === image.id ? (
                  <input
                    className="border rounded-md pl-2 py-2"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleRename(image.id, editValue);
                        setEditingId(null);
                      }
                    }}
                  />
                ) : (
                  <span className="text-[14px]">{image.name}</span>
                )}
                <button
                  onClick={() => {
                    setEditingId(image.id);
                    setEditValue(image.name);
                  }}
                >
                  <MdModeEdit className="text-blue-500 hover:text-blue-600 active:text-blue-700 hover:scale-105 transition hover:cursor-pointer text-2xl" />
                </button>
              </div>
              {/* Delete button */}
              <div className="flex justify-between gap-4 px-3 py-3">
                <span className="text-[14px]">{image.type}</span>
                <span className="text-[14px]">
                  {(image.size / 1024 / 1024).toFixed(2)} MB
                </span>
                <button
                  onClick={() => {
                    handleDelete(image.id);
                  }}
                >
                  <FaTrash className="text-red-500 hover:text-red-600 active:text-red-700 hover:scale-105 transition hover:cursor-pointer text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
