import React from "react";

const HomeForLoggedInUser = () => {
  return (
    <main className="bg-gradient-to-br from-[#ffe0e0] to-[#ffdada] min-h-screen py-16 px-8 flex justify-center items-center font-sans">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <header className="mb-10">
          <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight">
            Welcome to <span className="text-orange-600">Slimify</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Your personal companion to track weight, stay consistent, and live
            healthier. We're thrilled to help you on your wellness journey!
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
                    Log your weight <span className="font-medium">daily or weekly </span>to stay aware of trends.
                    Celebrate every small achievement – they add up to big
                    victories!
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Calorie Awareness:
                    </strong>{" "}
                    Focus on your <span className="font-medium">calorie intake versus output </span>. Slimify
                    helps you understand portion control and make smarter, more
                    informed food choices.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Quality Sleep Matters:
                    </strong>{" "}
                    Aim for <span className="font-medium"> 7–9 hours of quality sleep</span> each night. It's
                    crucial for hormonal balance, energy levels, and overall
                    well-being.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Hydration is Key:</strong>{" "}
                    Drink at least <span className="font-medium"> 2–3 liters of water</span> a day. Proper
                    hydration aids metabolism, helps you feel full, and boosts
                    your energy throughout the day.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Mindful Eating:</strong>{" "}
                    Pay close attention to your hunger and fullness cues. Eating
                    slowly allows your body to register satiety, preventing
                    overeating.
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
            <div id="workoutTime" className="accordion-content mt-6 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Consistency trumps intensity when it comes to exercise. Let's
                discover what schedule truly works for <span className="font-medium"> you</span> and your lifestyle:
              </p>
              <ul className="list-none space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Morning (6–9 AM):</strong>{" "}
                    A fantastic way to <span className="font-medium"> boost metabolism </span>, set a positive tone
                    for the day, and ensure your workout happens before daily
                    demands arise.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Evening (5–8 PM):</strong>{" "}
                    Often ideal for strength training, as your body temperature
                    is typically higher, leading to increased stamina and power.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Mid-day (12-2 PM):
                    </strong>{" "}
                    A quick lunch break workout can <span className="font-medium"> re-energize you </span>and
                    break up your day, helping you stay active even with a busy
                    schedule.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Your Best Time:</strong>{" "}
                    Ultimately, the most effective time is when you can
                    <span className="font-medium"> consistently commit</span> to your workouts long-term. Listen
                    to your body and make it a non-negotiable part of your
                    routine.
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
                Eating well isn't about deprivation; it's about making smart,
                sustainable choices that fuel your body and delight your taste
                buds.
              </p>
              <ul className="list-none space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Protein Power:</strong>{" "}
                    Include <span className="font-medium"> high-protein foods</span> in all your meals (lean
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
                    Gradually cut back on <span className="font-medium"> added sugars and refined
                    carbohydrates</span>. These often contribute to energy crashes
                    and unwanted cravings.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Fiber Up:</strong>{" "}
                    Incorporate plenty of <span className="font-medium"> fiber-rich foods</span> like vegetables,
                    fruits, whole grains (oats, quinoa), and legumes. Fiber aids
                    digestion and significantly boosts satiety.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Smart Meal Planning:
                    </strong>{" "}
                    Aim for <span className="font-medium"> 3 balanced main meals and 2 light, healthy
                    snacks</span> to keep your energy levels stable and prevent
                    overeating.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Cook at Home:</strong>{" "}
                    Preparing your own meals gives you invaluable control over
                    ingredients, portion sizes, and often leads to significantly
                    healthier choices.
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
            <div id="wellnessTips" className="accordion-content mt-6 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Your Slimify journey is about more than just numbers on a scale.
                It's about nurturing your whole self – mind, body, and spirit.
              </p>
              <ul className="list-none space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Stress Less:</strong>{" "}
                    Practice meditation, yoga, or daily walks to actively reduce
                    stress hormones like cortisol, which can significantly
                    impact weight management.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Connect with Your Body:
                    </strong>{" "}
                    Use Slimify to log your mood and energy levels along with
                    your weight. This invaluable insight can help you find
                    powerful patterns.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">Nighttime Habits:</strong>{" "}
                    Avoid late-night snacking. Aim to fast for 12–14 hours
                    overnight to give your digestive system a break and support
                    metabolic health.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Celebrate Non-Scale Victories:
                    </strong>{" "}
                    Pay attention to how your clothes fit, your energy levels,
                    your sleep quality, and your mood improving. These non-scale
                    victories are just as important as the number on the scale!
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl mt-1">✔</span>
                  <div>
                    <strong className="block text-md">
                      Stay Consistent, Not Perfect:
                    </strong>{" "}
                    Don't let a slip-up derail your progress. Every day is a new
                    chance to make healthy choices. Remember: progress, not
                    perfection, is the ultimate goal.
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
            You've got this! 💪 We're here to support you every step of the way.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default HomeForLoggedInUser;
