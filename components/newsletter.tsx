'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="card newsletter">
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0' }}>Stay ahead of the market</h3>
        <p style={{ margin: 0 }}>Get new stock pitches and ledger updates in your inbox.</p>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign up</button>
      </form>
      {submitted && <p className="muted">Thanks! This placeholder form simulates a signup.</p>}
    </section>
  );
}
