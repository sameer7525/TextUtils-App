
import React from "react";

const features = [
  {
    icon: "Aa",
    title: "Text Transformation",
    description:
      "Convert text to uppercase or lowercase in just one click.",
  },
  {
    icon: "01",
    title: "Instant Word Count",
    description:
      "Count words, characters and reading time without any hassle.",
  },
  {
    icon: "✓",
    title: "Simple & Efficient",
    description:
      "Copy, edit and manage your text with a clean, distraction-free interface.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        <section className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            About TextUtils
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your text, <span className="text-indigo-500">simplified.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            TextUtils is a simple and efficient text utility app
            designed to help you transform, analyze and manage
            your text with ease.
          </p>
        </section>

        {/* Card */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Our purpose
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Less effort. Better productivity.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Whether you're writing notes, preparing assignments
                or working with everyday text, TextUtils brings
                useful tools together in one convenient place.
                Our goal is to keep things fast, accessible and easy
                to use.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl font-bold text-indigo-700">
                T
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                Everything in one place
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Useful text tools, a clean interface and a
                straightforward experience — without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              What you can do
            </h2>
            <p className="mt-2 text-slate-600">
              Essential tools to make working with text easier.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 font-semibold text-indigo-700">
                  {feature.icon}
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mt-10 rounded-2xl bg-indigo-600 px-6 py-7 text-center text-white sm:px-10">
          <h2 className="text-xl font-semibold">
            Simple tools. Smarter work.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-indigo-100">
            TextUtils is built around one idea: everyday text
            operations should be quick, easy and accessible.
          </p>
        </section>

      </div>
    </main>
  );
}
