"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    alert("Login system is ready for backend integration.");
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-icon">🎓</div>

        <h1>Welcome Back</h1>

        <p>Login to your school dashboard</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login →
          </button>
        </form>

        <p className="login-bottom">
          Don't have an account?{" "}
          <Link href="/">Go Home</Link>
        </p>
      </div>
    </main>
  );
}