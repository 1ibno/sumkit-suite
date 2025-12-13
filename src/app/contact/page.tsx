"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [source, setSource] = useState("direct");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    if (from) setSource(from);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim() || submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/meoykeaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source,
          _gotcha: "",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-6 md:px-20">
      <div className="mx-auto max-w-content">
        {/* Header */}
        <header className="flex h-16 items-center justify-between">
          <a href="/" className="font-[family-name:var(--font-crimson)] text-xl font-semibold text-accent">SumKit</a>
          <a href="/" className="flex h-7 items-center rounded-pill border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.06)]">
            <span className="text-xs text-text-secondary">← Back to Suite</span>
          </a>
        </header>

        {/* Hero */}
        <section className="mt-10">
          <h1 className="text-h1 text-[rgba(255,255,255,0.96)]">
            Get in touch.
          </h1>
          <p className="mt-3 max-w-[520px] text-body text-text-secondary">
            Questions, feedback, or just want to say, "Hi?" We'd dig hearing from you.
          </p>
        </section>

        {/* Contact Form */}
        <section className="glass-panel mt-8 rounded-glass p-6 md:p-8 max-w-xl">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="text-body text-text-primary">
                Thanks for reaching out! We'll hit you back, soon.
              </p>
              <a href="/" className="mt-4 inline-block text-sm text-accent hover:underline">
                ← Back to SumKit
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-label uppercase text-text-secondary">Name (optional)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="input-field mt-2 w-full rounded-input px-4 py-2.5 text-input text-text-primary"
                />
              </div>
              <div>
                <label className="text-label uppercase text-text-secondary">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="input-field mt-2 w-full rounded-input px-4 py-2.5 text-input text-text-primary"
                />
              </div>
              <div>
                <label className="text-label uppercase text-text-secondary">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  className="input-field mt-2 w-full resize-none rounded-input px-4 py-3 text-input text-text-primary"
                />
              </div>
              <input type="hidden" name="source" value={source} />
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-input bg-accent px-5 py-2.5 text-button text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              {error && (
                <p className="mt-2 text-center text-xs text-red-400">{error}</p>
              )}
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 pb-8 sm:flex-row">
          <p className="text-xs text-text-muted">SumKit &bull; Free AI text tools. &copy; {new Date().getFullYear()}</p>
          <div className="flex gap-4">
            <a href="/" className="text-xs text-text-secondary transition-colors hover:text-text-primary">Home</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
