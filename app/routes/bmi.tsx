import React from "react";
import { Form, useActionData, useLoaderData } from "react-router";
import type { Route } from "./+types/bmi";
import { getAuth } from "@clerk/react-router/ssr.server";
import Header from "~/components/Header";

export const loader = async (args: Route.LoaderArgs) => {
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  let user = false;
  if (userId) {
    user = true;
  }
  return Response.json({
    user
  })
}

export const action = async ({ request }: Route.ClientActionArgs) => {
  if (request.method == "POST") {
    const fd = await request.formData();
    const age = fd.get("age");
    const gender = fd.get("gender");
    const height: any = fd.get("height");
    const weight: any = fd.get("weight");

    const bmi = weight / (height * height);
    return Response.json({ message: bmi.toFixed(2) });
  }
  return null;
};

const BMI = () => {
  const {user} = useLoaderData()
  const data = useActionData();
  return (
    <>
    <Header user={user} />
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          BMI Calculator
        </h1>

        {data?.message && (
          <div className="w-full mx-auto my-6">
            <p className="p-4 rounded-lg text-base text-center font-semibold bg-green-100 border border-green-400 text-green-700 shadow-sm">
              Your BMI: <span className="font-extrabold">{data?.message}</span>{" "}
              kg/m²
            </p>
          </div>
        )}

        <Form method="post" encType="multipart/form-data" reloadDocument>
          {data?.errorMessage && (
            <div className="w-full mx-auto mb-6">
              <p className="p-4 rounded-lg text-base text-center font-semibold bg-red-100 border border-red-400 text-red-700 shadow-sm">
                {data?.errorMessage}
              </p>
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
              <i className="fa-solid fa-calculator text-orange-500 mr-3 text-2xl"></i>
              Calculate Your BMI
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter your details below to instantly calculate your Body Mass
              Index.
            </p>

            <div className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="age"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Age:
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="e.g., 25"
                  min="2"
                  max="120"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out text-base"
                />
                <p className="text-xs text-gray-500 mt-1">Ages: 2 - 120</p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Gender:
                </label>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      required
                      className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                    />
                    <label
                      htmlFor="male"
                      className="ml-2 text-gray-700 text-base"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                    />
                    <label
                      htmlFor="female"
                      className="ml-2 text-gray-700 text-base"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="height"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Height (m):
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="e.g., 1.75"
                  step=".01"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out text-base"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="weight"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Weight (kg):
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="e.g., 70.5"
                  step=".01"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out text-base"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mt-8"
          >
            <i className="fa-solid fa-calculator mr-2"></i> Calculate BMI
          </button>
        </Form>
      </div>
    </div>
    </>
    
  );
};

export default BMI;
