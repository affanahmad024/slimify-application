import { getAuth } from "@clerk/react-router/ssr.server";
import Weight from "models/weight.model";
import React from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router";
import { weightPrompt } from "~/lib/gemini";
import type { Route } from "./+types/camera-upload";
import Header from "~/components/Header";
import BottomNav from "~/components/BottomNav";

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirect("/unauthorized");
  }
  return Response.json({ userId });
}

export const action = async ({ request }: Route.ClientActionArgs) => {
  type Weight = { weight: number };
  if (request.method == "POST") {
    const fd = await request.formData();
    const userId = fd.get("userId");
    const file = fd.get("file") as File;
    if (file.size == 0) {
      return Response.json({ message: "Please Upload a file" });
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileData = buffer.toString("base64");
      // console.log(fileData)
      const resp = await weightPrompt(fileData, file.type);

      if (!resp || typeof resp.text !== "string") {
        console.error(
          "weightPrompt did not return a valid text response:",
          resp
        );
        return redirect(`/weight-dashboard`);
      }
      const result = JSON.parse(resp.text) as Weight;
      const weight = result.weight;

      if (weight == -1) {
        return Response.json({ message: "please enter a valid photo" });
      }

      const data = new Weight({
        userId,
        weight,
        time: Date.now(),
      });
      data.save();
      return redirect(`/weight-dashboard`);
    } catch (error) {
      console.error("Upload action failed:", error);
    }
  }
  return null;
};

const CameraUpload = () => {
  const { userId } = useLoaderData();
  const data = useActionData();
  return (
    <>
      <Header user={true} />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Track Your Weight
          </h1>
          <Form method="post" encType="multipart/form-data" reloadDocument>
            {data?.message && (
              <div className="w-full max-w-md mx-auto mt-6 px-4">
                <p
                  className={
                    "p-4 rounded-lg text-sm text-center font-semibold bg-red-100 border border-red-400 text-red-700 shadow-sm mb-5"
                  }
                >
                  {data.message}
                </p>
              </div>
            )}

            <input type="hidden" name="userId" id="userId" value={userId} />

            {/* Camera upload section */}
            {/* <div id="cameraUploadForm" className="space-y-6">
                  <h2 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                    <i className="fas fa-camera text-orange-500 mr-3"></i>{" "}
                    Upload from Camera
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Take a picture to log your weight effortlessly.
                  </p>

                  <Link
                    to={`/camera`}
                    className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4"
                  >
                    <i className="fas fa-camera-retro mr-2"></i> Open Camera
                  </Link>
                </div> */}

            {/* File upload section */}
            <div id="fileUploadForm" className="space-y-6">
              <h2 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                <i className="fa-solid fa-file text-orange-500 mr-3"></i> Upload
                from File
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Take a picture to log your weight effortlessly.
              </p>
              <div className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4">
                <input
                  type="file"
                  name="file"
                  id="file"
                  placeholder="Open File"
                  className="cursor-pointer"
                />{" "}
                {/* className="hidden" */}
                {/* <i className="fa-solid fa-file"></i> Open File */}
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4"
            >
              <i className="fas fa-save mr-2"></i> Save Weight
            </button>
          </Form>
          <Link to={`/upload`}>
            <button className="cursor-pointer w-full flex items-center justify-center py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-150 ease-in-out text-sm">
              <i className="fas fa-arrow-left mr-2"></i> Back to Selection
            </button>
          </Link>
        </div>
      </div>
      <BottomNav user={true} />
    </>
  );
};

export default CameraUpload;
