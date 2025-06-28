import { getAuth } from "@clerk/react-router/ssr.server";
import React from "react";
import { Link, redirect } from "react-router";
import type { Route } from "./+types/upload";
import Header from "~/components/Header";

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirect("/unauthorized");
  }
  return null;
}

const Upload = () => {
  return (
    <>
      <Header user={true} />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Track Your Weight
          </h1>

          {/* Method Selection Section */}
          <div id="methodSelection" className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              How would you like to log your weight?
            </h2>
            <Link to={`/manual-upload`}>
              <button className="w-full flex items-center justify-center p-5 bg-red-100 text-red-800 border border-red-300 rounded-xl shadow-md hover:bg-red-200 transition duration-150 ease-in-out text-lg font-medium mb-5">
                <i className="fas fa-calendar-alt text-red-600 text-2xl mr-4"></i>{" "}
                Manual Entry
              </button>
            </Link>

            <Link to={`/camera-upload`}>
              <button className="w-full flex items-center justify-center p-5 bg-orange-100 text-orange-800 border border-orange-300 rounded-xl shadow-md hover:bg-orange-200 transition duration-150 ease-in-out text-lg font-medium">
                <i className="fas fa-camera text-orange-600 text-2xl mr-4"></i>{" "}
                Upload from Camera
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
