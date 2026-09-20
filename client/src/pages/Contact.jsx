import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Contact() {
  const { language } = useLanguage();
  const { contact: t, home } = translations[language];
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  };
  return (
    <section className="page-width contact-page section-space">
      <div className="contact-copy">
        <h1>{t.heading}</h1>
        <p className="lead">{t.description}</p>
        <div className="contact-languages">
          <h2>{home.languagesTitle}</h2>
          <p>{home.languagesText}</p>
        </div>
        <img className="contact-image" src="/images/communication-details.webp" alt=""
          width="1536" height="1024" loading="lazy" />
      </div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <label htmlFor="contact-name">{t.fields.name}</label>
        <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required />
        <label htmlFor="contact-email">{t.fields.email}</label>
        <input id="contact-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="contact-phone">{t.fields.phone}</label>
        <input id="contact-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} />
        <label htmlFor="contact-message">{t.fields.message}</label>
        <textarea id="contact-message" name="message" rows="6" value={form.message} onChange={handleChange} required />
        <p className="form-notice" id="form-notice">{t.success}</p>
        <button type="submit" className="button" aria-describedby="form-notice">{t.submit}</button>
        <div role="status" aria-live="polite">{submitted && <p className="form-status">{t.success}</p>}</div>
      </form>
    </section>
  );
}
