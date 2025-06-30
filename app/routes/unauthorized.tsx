import { getAuth } from "@clerk/react-router/ssr.server";
import React from "react";
import type { Route } from "./+types/unauthorized";
import { redirect } from "react-router";
import { SignedOut, SignInButton } from "@clerk/react-router";
import Header from "~/components/Header";

export const loader = async (args: Route.LoaderArgs) => {
  const { userId } = await getAuth(args);
  if (userId) {
    return redirect("/");
  }
  return null;
};

const Unautorized = () => {
  return (
    <>
      <Header user={false} />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-custom p-8 sm:p-10 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Unauthorized Access
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            You are unauthorized to view this page. Please log in to continue.
          </p>

          {/* Placeholder for Sign-In Button/Action - Clerk components are not supported in Canvas */}
          <div className="cursor-pointer px-6 py-3 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-md">
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            If you don't have an account, please register.
          </p>
        </div>
      </div>
    </>
  );
};

export default Unautorized;
