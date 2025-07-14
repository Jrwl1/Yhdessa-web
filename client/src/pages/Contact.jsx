import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

/**
 * Contact page with styled form in a premium card layout
 */
export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Kiitos viestistäsi! / Tack för ditt meddelande! / Thank you for your message!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl mt-12">
      <h1 className="text-5xl font-extrabold text-primary mb-4">{t.heading}</h1>
      <p className="mb-6 text-gray-700">{t.description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Namn / Nimi / Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          name="email"
          placeholder="E-post / Sähköposti / Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          name="phone"
          placeholder="Telefon / Puhelin / Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Meddelande / Viesti / Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-accent text-text px-6 py-3 rounded-full shadow hover:scale-105 transform transition"
        >
          Skicka / Lähetä / Send
        </button>
      </form>
    </div>
  );
}