
import React, { useState } from "react";

export default function Admin() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [authenticated, setAuthenticated] = useState(false);

  const handleChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (login.username === "admin" && login.password === "admin123") {
      setAuthenticated(true);
    } else {
      alert("Fel användarnamn eller lösenord");
    }
  };

  if (!authenticated) {
    return (
      <div className="p-6 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input name="username" placeholder="Användarnamn" onChange={handleChange}
            className="w-full p-3 border rounded shadow focus:outline-none focus:ring focus:ring-primary" required />
          <input name="password" type="password" placeholder="Lösenord" onChange={handleChange}
            className="w-full p-3 border rounded shadow focus:outline-none focus:ring focus:ring-primary" required />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">
            Logga in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-primary mb-4">Adminpanel</h1>
      <p>Här kan du redigera innehållet på webbplatsen och ändra färgteman.</p>
      {/* TODO: Lägg till dashboard, editor och theme config */}
    </div>
  );
}
