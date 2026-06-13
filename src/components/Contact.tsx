import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const PHONE_E164 = '+15135440885';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', rating: '5', feedback: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<null | 'email' | 'sms'>(null);
  const ref = useReveal(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMessage = () => {
    const stars = '⭐'.repeat(Math.max(1, Math.min(5, Number(form.rating) || 5)));
    return `${form.feedback}\n\n— ${form.name.trim() || 'Anonymous'}\nRating: ${stars} (${form.rating}/5)`;
  };

  // No backend — open the visitor's email or SMS app with the review
  // prefilled and addressed to Sashank, so it actually arrives.
  const deliver = (channel: 'email' | 'sms') => {
    setSubmitting(true);
    const text = encodeURIComponent(buildMessage());
    if (channel === 'email') {
      const subject = encodeURIComponent(`Portfolio message from ${form.name.trim() || 'a visitor'}`);
      window.location.href = `mailto:sashank0409@gmail.com?subject=${subject}&body=${text}`;
    } else {
      // iOS expects "&body=", everything else "?body="
      const sep = /iPad|iPhone|iPod/.test(navigator.userAgent) ? '&' : '?';
      window.location.href = `sms:${PHONE_E164}${sep}body=${text}`;
    }
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(channel);
      setForm({ name: '', rating: '5', feedback: '' });
      setTimeout(() => setSuccess(null), 6000);
    }, 900);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    deliver('sms');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    marginBottom: '0.4rem',
    letterSpacing: '0.04em',
  };

  return (
    <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left — info */}
      <div>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '2rem' }}>
          Have a project in mind, an opportunity, or just want to say hi? I'd love to hear from you.
          Drop a message and I'll get back to you promptly.
        </p>

        <div className="space-y-4">
          {[
            {
              label: 'Email',
              value: 'sashank0409@gmail.com',
              href: 'mailto:sashank0409@gmail.com',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: 'Phone',
              value: '(513) 544-0885',
              href: 'tel:+15135440885',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
            },
            {
              label: 'Location',
              value: 'Houston, TX',
              href: null,
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(var(--accent-rgb),0.12)',
                  border: '1px solid rgba(var(--accent-rgb),0.25)',
                  color: 'var(--link)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--link)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label style={labelStyle}>Your Name (optional)</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Anonymous Explorer"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.5)';
              (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(var(--accent-rgb),0.1)';
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--glass-border)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label style={labelStyle}>Rating</label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.5)';
              (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(var(--accent-rgb),0.1)';
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--glass-border)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <option value="5" style={{ background: 'var(--card-solid)' }}>⭐⭐⭐⭐⭐ — Excellent</option>
            <option value="4" style={{ background: 'var(--card-solid)' }}>⭐⭐⭐⭐ — Very Good</option>
            <option value="3" style={{ background: 'var(--card-solid)' }}>⭐⭐⭐ — Good</option>
            <option value="2" style={{ background: 'var(--card-solid)' }}>⭐⭐ — Fair</option>
            <option value="1" style={{ background: 'var(--card-solid)' }}>⭐ — Needs Work</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Your Message *</label>
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Share your thoughts, suggestions, or project ideas..."
            style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.5)';
              (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(var(--accent-rgb),0.1)';
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--glass-border)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 font-semibold rounded-full transition-all duration-300"
            style={{
              color: 'var(--btn-text)',
              padding: '0.7rem 1.8rem',
              fontSize: '0.875rem',
              background: submitting
                ? 'rgba(var(--accent-rgb),0.4)'
                : 'linear-gradient(135deg,var(--accent),var(--accent-strong))',
              cursor: submitting ? 'not-allowed' : 'pointer',
              boxShadow: submitting ? 'none' : '0 0 24px rgba(var(--accent-rgb),0.35)',
            }}
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text It to Me
              </>
            )}
          </button>

          <button
            type="button"
            disabled={submitting}
            onClick={(e) => {
              const formEl = (e.currentTarget as HTMLButtonElement).closest('form');
              if (formEl && formEl.reportValidity()) deliver('email');
            }}
            className="flex items-center gap-2 font-semibold rounded-full transition-all duration-300"
            style={{
              padding: '0.7rem 1.6rem',
              fontSize: '0.875rem',
              color: 'var(--link)',
              background: 'rgba(var(--accent-rgb),0.1)',
              border: '1px solid rgba(var(--accent-rgb),0.3)',
              cursor: submitting ? 'not-allowed' : 'pointer',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Instead
          </button>

          {success && (
            <span
              className="flex items-center gap-2 font-medium animate-fade-in"
              style={{ fontSize: '0.875rem', color: 'var(--link)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {success === 'sms'
                ? 'Opening your messages app — just hit send!'
                : 'Opening your email app — just hit send!'}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
