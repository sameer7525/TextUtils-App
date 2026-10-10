import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden pt-10">

      {/* Decorative glow blobs */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== Main Footer Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14">

          {/* Brand + Newsletter */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl shadow-lg">
                📝
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                TextUtils
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed max-w-md">
              A clean, focused toolkit for everything text — convert, count,
              preview aur clear. Built for speed, designed for humans.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-white font-semibold mb-3 text-sm">
                Get product updates
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  ✅ Thanks! You're subscribed.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 focus-within:border-indigo-500 transition-colors"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Product */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tool" className="hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-slate-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TextUtils — Crafted with{" "}
            <span className="text-rose-500">♥</span> for writers & developers.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { label: "GitHub", path: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.6 4.7 18.6 5 18.6 5c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" },
              { label: "Twitter", path: "M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.7-9.9L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.5h2L6.5 3.2H4.4l13.2 17.5z" },
              { label: "LinkedIn", path: "M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.4H3.5V9h3.6v11.4z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to top
            <span className="w-6 h-6 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
