import React from "react";

/**
 * Premium Footer with warm colors and subtle glass effect
 */
export default function Footer() {
  return (
    <footer className="bg-secondary/80 backdrop-blur text-text py-6 mt-12 rounded-t-3xl shadow-inner">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Yhdessä Talterapi. All rights reserved.
      </div>
    </footer>
  );
}