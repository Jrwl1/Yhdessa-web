import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(t.success);
  };

  return (
    <div className="bg-background px-6 py-16 text-text">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h1 className="text-4xl font-extrabold text-primary md:text-5xl">{t.heading}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">{t.description}</p>

          <img
            src="/images/therapy-room-placeholder.webp"
            alt=""
            className="mt-8 h-[320px] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,43,77,0.12)] md:p-8"
        >
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block font-medium text-slate-800">{t.fields.name}</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-slate-800">{t.fields.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-slate-800">{t.fields.phone}</span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-medium text-slate-800">{t.fields.message}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="min-h-[160px] w-full rounded-xl border border-slate-300 p-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex rounded-full bg-accent px-7 py-3 font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            {t.submit}
          </button>

          {status && (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
