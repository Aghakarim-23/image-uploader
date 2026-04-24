import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center px-4">
      <h1 className="text-[120px] font-bold text-sky-400 leading-none">404</h1>

      <h2 className="text-3xl font-semibold mt-2">Page Not Found</h2>

      <p className="text-gray-400 mt-3 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
