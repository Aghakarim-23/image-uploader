import { IoCloudUploadOutline } from "react-icons/io5";
import { FaFolder, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";

const Home = () => {
  const [images, setImages] = useState({});
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setImage(file);
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
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* Image container */}
      <div className="max-w-xs w-full rounded-md border mt-10">
        <div className="border-b">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-50 "
              />
            ) : (
              <img
                src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"
                alt="preview"
                className="w-full h-50 "
              />
            )}
        </div>
        <div className="flex flex-col gap-2 ">
          {/* Edit button */}
          <div className="flex justify-between border-b px-3 py-4">
            <span className="text-xl">Mountain lake</span>
            <button>
              <MdModeEdit className="text-blue-500 hover:text-blue-600 active:text-blue-700 hover:scale-105 transition hover:cursor-pointer text-2xl" />
            </button>
          </div>
          {/* Delete button */}
          <div className="flex justify-between px-3 py-3">
            <span className="text-xl">Mountain lake</span>
            <button>
              <FaTrash className="text-red-500 hover:text-red-600 active:text-red-700 hover:scale-105 transition hover:cursor-pointer text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
