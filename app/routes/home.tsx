import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { SignedOut, SignInButton } from "@clerk/react-router";
import { getAuth } from "@clerk/react-router/ssr.server";
import { Link, redirect, useLoaderData } from "react-router";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Slimify - Your Personal Weight Tracker" },
    {
      name: "Slimify - Your Personal Weight Tracker",
      content: "Slimify - Your Personal Weight Tracker",
    },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  let user = false;
  if (userId) {
    user = true;
  }

  // Protect the route by checking if the user is signed in

  return Response.json({
    userId,
    user: user,
  });
}

export default function Home() {
  const { userId, user } = useLoaderData();
  return (
    <>
      <Header user={user} />
      {userId ? (
        <main className="bg-gradient-to-br from-[#ffe0e0] to-[#ffdada] min-h-screen py-16 px-8 flex justify-center items-center font-sans">
          <div className="max-w-4xl w-full space-y-12 text-center">
            <header className="mb-10">
              <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight">
                Welcome to <span className="text-orange-600">Slimify</span>,
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Your personal companion to track weight, stay consistent, and
                live healthier. We're thrilled to help you on your wellness
                journey!
              </p>
            </header>

            <div id="accordion-container" className="space-y-6">
              <section className="bg-white rounded-3xl shadow-xl p-8 text-left transition-all duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-orange-500 flex items-center space-x-4 cursor-pointer">
                  {/* onclick="toggleAccordion('weightControl')" */}
                  <span className="text-5xl">🎯</span>{" "}
                  <span>Your Personalized Path to Weight Control</span>
                  {/* Add an arrow icon here that rotates when opened/closed */}
                </h2>
                <div
                  id="weightControl"
                  className="accordion-content mt-6 space-y-6"
                >
                  {" "}
                  {/* hidden by default */}
                  <p className="text-gray-700 leading-relaxed">
                    Understanding your body is the first and most powerful step
                    towards achieving your goals. Let's explore how you can take
                    charge:
                  </p>
                  <ul className="list-none space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Track Your Progress:
                        </strong>{" "}
                        Log your weight **daily or weekly** to stay aware of
                        trends. Celebrate every small achievement – they add up
                        to big victories!
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Calorie Awareness:
                        </strong>{" "}
                        Focus on your **calorie intake versus output**. Slimify
                        helps you understand portion control and make smarter,
                        more informed food choices.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Quality Sleep Matters:
                        </strong>{" "}
                        Aim for **7–9 hours of quality sleep** each night. It's
                        crucial for hormonal balance, energy levels, and overall
                        well-being.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Hydration is Key:
                        </strong>{" "}
                        Drink at least **2–3 liters of water** a day. Proper
                        hydration aids metabolism, helps you feel full, and
                        boosts your energy throughout the day.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Mindful Eating:
                        </strong>{" "}
                        Pay close attention to your hunger and fullness cues.
                        Eating slowly allows your body to register satiety,
                        preventing overeating.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-8 text-left transition-all duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-orange-500 flex items-center space-x-4 cursor-pointer">
                  <span className="text-5xl">⏰</span>{" "}
                  <span>Finding Your Best Workout Time</span>
                </h2>
                <div
                  id="workoutTime"
                  className="accordion-content mt-6 space-y-6"
                >
                  <p className="text-gray-700 leading-relaxed">
                    Consistency trumps intensity when it comes to exercise.
                    Let's discover what schedule truly works for *you* and your
                    lifestyle:
                  </p>
                  <ul className="list-none space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Morning (6–9 AM):
                        </strong>{" "}
                        A fantastic way to **boost metabolism**, set a positive
                        tone for the day, and ensure your workout happens before
                        daily demands arise.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Evening (5–8 PM):
                        </strong>{" "}
                        Often ideal for strength training, as your body
                        temperature is typically higher, leading to increased
                        stamina and power.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Mid-day (12-2 PM):
                        </strong>{" "}
                        A quick lunch break workout can **re-energize you** and
                        break up your day, helping you stay active even with a
                        busy schedule.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Your Best Time:
                        </strong>{" "}
                        Ultimately, the most effective time is when you can
                        **consistently commit** to your workouts long-term.
                        Listen to your body and make it a non-negotiable part of
                        your routine.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-8 text-left transition-all duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-orange-500 flex items-center space-x-4 cursor-pointer">
                  {/* onclick="toggleAccordion('dietTips')" */}
                  <span className="text-5xl">🍎</span>{" "}
                  <span>Nourishing Your Body: Diet Tips</span>
                </h2>
                <div id="dietTips" className="accordion-content mt-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Eating well isn't about deprivation; it's about making
                    smart, sustainable choices that fuel your body and delight
                    your taste buds.
                  </p>
                  <ul className="list-none space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Protein Power:
                        </strong>{" "}
                        Include **high-protein foods** in all your meals (lean
                        meats, fish, beans, lentils, tofu). Protein keeps you
                        feeling full and supports crucial muscle health.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Sugar & Carb Check:
                        </strong>{" "}
                        Gradually cut back on **added sugars and refined
                        carbohydrates**. These often contribute to energy
                        crashes and unwanted cravings.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">Fiber Up:</strong>{" "}
                        Incorporate plenty of **fiber-rich foods** like
                        vegetables, fruits, whole grains (oats, quinoa), and
                        legumes. Fiber aids digestion and significantly boosts
                        satiety.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Smart Meal Planning:
                        </strong>{" "}
                        Aim for **3 balanced main meals and 2 light, healthy
                        snacks** to keep your energy levels stable and prevent
                        overeating.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">Cook at Home:</strong>{" "}
                        Preparing your own meals gives you invaluable control
                        over ingredients, portion sizes, and often leads to
                        significantly healthier choices.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-8 text-left transition-all duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-orange-500 flex items-center space-x-4 cursor-pointer">
                  {/* onClick */}
                  <span className="text-5xl">🧠</span>{" "}
                  <span>Holistic Wellness: Bonus Tips for Your Journey</span>
                </h2>
                <div
                  id="wellnessTips"
                  className="accordion-content mt-6 space-y-6"
                >
                  <p className="text-gray-700 leading-relaxed">
                    Your Slimify journey is about more than just numbers on a
                    scale. It's about nurturing your whole self – mind, body,
                    and spirit.
                  </p>
                  <ul className="list-none space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">Stress Less:</strong>{" "}
                        Practice meditation, yoga, or daily walks to actively
                        reduce stress hormones like cortisol, which can
                        significantly impact weight management.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Connect with Your Body:
                        </strong>{" "}
                        Use Slimify to log your mood and energy levels along
                        with your weight. This invaluable insight can help you
                        find powerful patterns.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Nighttime Habits:
                        </strong>{" "}
                        Avoid late-night snacking. Aim to fast for 12–14 hours
                        overnight to give your digestive system a break and
                        support metabolic health.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Celebrate Non-Scale Victories:
                        </strong>{" "}
                        Pay attention to how your clothes fit, your energy
                        levels, your sleep quality, and your mood improving.
                        These non-scale victories are just as important as the
                        number on the scale!
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <strong className="block text-md">
                          Stay Consistent, Not Perfect:
                        </strong>{" "}
                        Don't let a slip-up derail your progress. Every day is a
                        new chance to make healthy choices. Remember: progress,
                        not perfection, is the ultimate goal.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div id="tabs-container" className="">
              {" "}
            </div>
            <footer className="mt-12">
              <p className="text-lg text-gray-600 font-semibold">
                Remember, Small, consistent steps lead to big, lasting changes.
                You've got this! 💪 We're here to support you every step of the
                way.
              </p>
            </footer>
          </div>
        </main>
      ) : (
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
      )}
    </>
  );
}
