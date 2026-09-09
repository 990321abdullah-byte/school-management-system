"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link href="/" className="logo">
          <span>🎓</span>
          School<span>MS</span>
        </Link>

        <div className={`nav-links ${open ? "show" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/login">Login</Link>

          <Link href="/login" className="nav-btn">
            Get Started
          </Link>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}