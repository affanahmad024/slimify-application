import React from "react";
import { Form, useActionData } from "react-router";
import type { Route } from "./+types/bmi";

export const action = async ({request}: Route.ClientActionArgs) => {
  if (request.method == "POST") {
    const fd = await request.formData()
    const age = fd.get("age")
    const gender = fd.get("gender")
    const height = fd.get("height")
    const weight = fd.get("weight")

    // const bmi = weight / (height * height)
  }
}

const BMI = () => {
    const data = useActionData()
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            BMI Calculator
          </h1>
          <Form method="post" encType="multipart/form-data" reloadDocument>
            {data?.errorMessage && (
              <div className="w-full max-w-md mx-auto mt-6 px-4">
                <p
                  className={
                    "p-4 rounded-lg text-sm text-center font-semibold bg-red-100 border border-red-400 text-red-700 shadow-sm mb-5"
                  }
                >
                  {data?.errorMessage}
                </p>
              </div>
            )}

            {/* File upload section */}
            <div id="fileUploadForm" className="space-y-6">
              <h2 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                <i className="fa-solid fa-calculator text-orange-500 mr-3"></i> Modify Values
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                log your values and calculate BMI effortlessly
              </p>
              <div className="bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4">
                <label htmlFor="age">Age: </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="25"
                />{" "}
                <p>Ages: 2 - 120</p>
                <label htmlFor="gender">Gender</label>{" "}
                <input type="radio" name="gender" id="male" value={"male"} />
                <label htmlFor="male">Male</label>{" "}

                <input type="radio" name="gender" id="female" value={"female"} />
                <label htmlFor="gender">Female</label>
                <br />

                <label htmlFor="height">Height (m):</label>
                <input type="number" name="height" id="height" placeholder="1.80" required/>

                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" name="weight" id="weight" placeholder="65"/>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4"
            >
              <i className="fa-solid fa-calculator mr-2"></i> Calculate
            </button>
            {data?.message ? (
              <div className="w-full max-w-md mx-auto mt-6 px-4">
                <p
                  className={
                    "p-4 rounded-lg text-sm text-center font-semibold bg-red-100 border border-red-400 text-red-700 shadow-sm mb-5"
                  }
                >
                  {data?.message} kg/m2
                </p>
              </div> 
            ): <><p>20.1 kg/m2</p></>}
          </Form>
        </div>
      </div>
    </>
  );
};

export default BMI;
