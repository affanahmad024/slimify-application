import { SignedOut, SignInButton } from '@clerk/react-router'
import React from 'react'
import { Link } from 'react-router'

const HomeForLoggedOutUser = ({userId}:any) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 mt-5">
          <main className="w-full max-w-4xl bg-white rounded-xl shadow-custom p-8 sm:p-12 text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Slimify: Your Partner in Achieving Your Ideal Weight
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Slimify is a comprehensive weight management application designed
              to empower you on your journey to a healthier you. Effortlessly
              log, track, and analyze your weight data with our intuitive tools
              and smart features.
            </p>
            <>
              {userId ? (
                <Link to={`/weight-dashboard`}>
                  <div className="cursor-pointer px-8 py-4 bg-primary-red text-white text-xl font-semibold rounded-xl bg-red-500 hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-xl">
                    Join Slimify Today!
                  </div>
                </Link>
              ) : (
                <SignedOut>
                  <SignInButton>
                    <div className="cursor-pointer px-8 py-4 bg-primary-red text-white text-xl font-semibold rounded-xl bg-red-500 hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-xl">
                      Join Slimify Today!
                    </div>
                  </SignInButton>
                </SignedOut>
              )}
            </>
          </main>

          <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Feature Card 1: Manual Entry */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-regular fa-keyboard text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Simple Manual Logging
              </h3>
              <p className="text-gray-600">
                Quickly record your weight with date and time. Our user-friendly
                interface makes manual entry a breeze, ensuring your data is
                always up-to-date.
              </p>
            </div>

            {/* Feature Card 2: AI-Powered File Upload */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-cloud-arrow-up text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Intelligent Data Upload
              </h3>
              <p className="text-gray-600">
                Upload files from your smart scales or other devices. Our
                advanced AI automatically reads and integrates your weight data
                seamlessly.
              </p>
            </div>

            {/* Feature Card 3: Personalized Goal Setting */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-trophy text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Set & Achieve Your Goals
              </h3>
              <p className="text-gray-600">
                Define your target weight and track your progress against it.
                Slimify provides visual cues and motivational insights to keep
                you on track.
              </p>
            </div>

            {/* Feature Card 4: Comprehensive Tracking & Visuals */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-up-long text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Insightful Progress Tracking
              </h3>
              <p className="text-gray-600">
                View interactive charts and graphs of your weight over time.
                Understand trends and celebrate milestones with a clear visual
                representation.
              </p>
            </div>

            {/* Feature Card 5: Detailed Analytics & Stats */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-regular fa-chart-bar text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Comprehensive Weight Analytics
              </h3>
              <p className="text-gray-600">
                Dive deep into your weight records. See your current, average,
                and target weights, along with other key metrics to guide your
                health decisions.
              </p>
            </div>

            {/* Feature Card 6: Secure & Private Data */}
            <div className="bg-white rounded-xl shadow-custom p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-user-shield text-red-600 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Your Data, Secure & Private
              </h3>
              <p className="text-gray-600">
                Rest assured, your personal weight data is kept secure and
                private. Slimify is built with your privacy in mind, protecting
                your health journey.
              </p>
            </div>
          </section>

          <section className="w-full max-w-4xl bg-white rounded-xl shadow-custom p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Slimify is more than just a weight tracker; it's a dedicated
              companion for your wellness journey. Join our community and take
              the first step towards a healthier, happier you.
            </p>

            <SignedOut>
              <SignInButton>
                <div className="cursor-pointer px-8 py-4 bg-primary-red text-white text-xl font-semibold rounded-xl bg-red-500 hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-xl">
                  Sign Up For Free
                </div>
              </SignInButton>
            </SignedOut>
          </section>
        </div>
  )
}

export default HomeForLoggedOutUser