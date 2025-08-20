// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/authcontext";
import "./dashboard.css";

export default function Dashboard() {
  const { user, logout, token } = useAuth(); // assumes you store {user, token} in context
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // OPTIONAL: load protected data (e.g., /api/admin/submissions) if your backend exposes it
  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        setErr("");

        // If you don't have this API yet, comment this out safely.
        const res = await fetch("http://localhost:5000/api/admin/submissions", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // your backend should verify this
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to load: ${res.status}`);
        }

        const data = await res.json();
        if (!ignore) setSubmissions(data);
      } catch (e) {
        if (!ignore) setErr(e.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    if (token) load();
    else setLoading(false);

    return () => { ignore = true; };
  }, [token]);

  return (
    <section className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Welcome{user?.firstName ? `, ${user.firstName}` : ""} 👋</h1>
          <p className="dash__subtitle">Here’s your Total Health control center.</p>
        </div>

        <button className="dash__logout" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dash__grid">
        {/* Profile card */}
        <div className="card card--profile">
          <h2 className="card__title">Your Profile</h2>
          <div className="profile__row">
            <span className="profile__label">Name</span>
            <span className="profile__value">
              {user?.firstName || "-"} {user?.lastName || ""}
            </span>
          </div>
          <div className="profile__row">
            <span className="profile__label">Email</span>
            <span className="profile__value">{user?.email || "-"}</span>
          </div>
          <div className="profile__row">
            <span className="profile__label">Member Since</span>
            <span className="profile__value">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
            </span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="card">
          <h2 className="card__title">Quick Actions</h2>
          <div className="actions">
            <button className="btn">Book Appointment</button>
            <button className="btn btn--secondary">Update Profile</button>
            <button className="btn btn--ghost">Manage Newsletter</button>
          </div>
        </div>

        {/* Protected data list (optional) */}
        <div className="card card--wide">
          <div className="card__header">
            <h2 className="card__title">Recent Contact Submissions</h2>
            <span className="badge">
              {loading ? "Loading…" : `${submissions?.length || 0}`}
            </span>
          </div>

          {err && <div className="alert">{err}</div>}

          {!loading && !err && (submissions?.length || 0) === 0 && (
            <p className="empty">No submissions found.</p>
          )}

          {!loading && !err && submissions?.length > 0 && (
            <ul className="list">
              {submissions.map((s) => (
                <li key={s._id} className="list__item">
                  <div className="list__title">
                    {s.firstName} {s.lastName} — <span className="muted">{s.email}</span>
                  </div>
                  <div className="list__message">{s.message}</div>
                  <div className="list__meta">
                    {new Date(s.date).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
