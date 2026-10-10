import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-slate-50 to-purple-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            ✨ All-in-one Text Toolkit
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Make Your Text{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Smarter
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Uppercase, clear, count, preview — everything in one place.
              Fast, free and completely simple
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tool"
              className="px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Try Tools Now →
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What You Can Do
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Simple tools that save your time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🔠",
              title: "Uppercase",
              desc: "Text ko instantly UPPERCASE mein convert karo.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              icon: "🔢",
              title: "Word Count",
              desc: "Words aur characters ki live counting dekho.",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: "👁️",
              title: "Preview",
              desc: "Apna text live preview karo type karte waqt.",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: "🗑️",
              title: "Clear Text",
              desc: "Ek click mein pura text clear kar do.",
              color: "from-red-500 to-orange-500",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl text-2xl bg-gradient-to-br ${item.color} shadow-md mb-5`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-16 text-center shadow-2xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to clean up your text?
            </h2>
            <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
              No sign-up. No limits. Just open the tools and get started.
            </p>
            <Link
              to="/tool"
              className="inline-block mt-8 px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Open Tools →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
