import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase.js";

const PETITION_TEXT = `We, the undersigned residents of the neighborhoods adjacent to the proposed American Community Developers project on the Irmo/Richland County border, respectfully request that the Town of Irmo Planning Commission require the following before approval of any zoning change:

1. A completed, publicly available Traffic Impact Analysis (TIA)
2. Formal consultation with Lexington-Richland School District 5 regarding enrollment capacity
3. Documented road infrastructure improvement commitments from the developer
4. A thorough review of the project's compatibility with the existing low-density residential character of the surrounding area

A development of this scale — 330 units including 200 workforce apartments, 90 senior duplexes, and 40 single-family homes — represents a fundamental change to our neighborhood. We ask that the Town proceed with caution and ensure all impact studies are complete before any approvals are granted.`;

export default function Petition() {
  const [signatures, setSignatures] = useState([]);
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminClicks, setAdminClicks] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "signatures"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const sigs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSignatures(sigs);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function handleSubmit() {
    if (!form.name.trim() || !form.address.trim()) {
      setError("Please provide your name and street address.");
      return;
    }
    setError("");
    try {
      await addDoc(collection(db, "signatures"), {
        name: form.name.trim(),
        address: form.address.trim(),
        email: form.email.trim(),
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setForm({ name: "", address: "", email: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  function handleTitleClick() {
    const clicks = adminClicks + 1;
    setAdminClicks(clicks);
    if (clicks >= 5) {
      setShowAdmin(true);
      setAdminClicks(0);
    }
  }

  const sigCount = signatures.length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f0e8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#1a1a1a",
    }}>
      {/* Header */}
      <div style={{
        background: "#1c3a2a",
        padding: "0",
        borderBottom: "4px solid #8b6914",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px 28px" }}>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a8c5b0",
            marginBottom: 10,
            fontFamily: "'Georgia', serif",
          }}>
            Town of Irmo, South Carolina · Resident Petition
          </div>
          <h1
            onClick={handleTitleClick}
            style={{
              fontSize: "clamp(22px, 5vw, 36px)",
              fontWeight: "normal",
              color: "#f5f0e8",
              margin: "0 0 8px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              cursor: "default",
            }}
          >
            Oppose Premature Approval of the<br />
            <em style={{ color: "#d4a843" }}>American Community Developers Project</em>
          </h1>
          <div style={{
            fontSize: 13,
            color: "#a8c5b0",
            marginTop: 12,
          }}>
            Planning Commission Hearing · Monday, May 11, 2026 · 6:00 PM
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 60px" }}>

        {/* Signature count banner */}
        <div style={{
          background: "#1c3a2a",
          color: "#f5f0e8",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}>
          <div style={{
            fontSize: 42,
            fontWeight: "bold",
            color: "#d4a843",
            lineHeight: 1,
            minWidth: 64,
            textAlign: "center",
          }}>
            {loading ? "—" : sigCount}
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: "bold" }}>
              {sigCount === 1 ? "neighbor has signed" : "neighbors have signed"}
            </div>
            <div style={{ fontSize: 12, color: "#a8c5b0", marginTop: 2 }}>
              Help us reach 500 signatures before Monday's hearing
            </div>
          </div>
          <div style={{
            marginLeft: "auto",
            width: 120,
            height: 6,
            background: "#0d1f16",
            borderRadius: 3,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${Math.min(100, (sigCount / 500) * 100)}%`,
              background: "#d4a843",
              borderRadius: 3,
              transition: "width 0.5s ease",
            }} />
          </div>
        </div>

        {/* What We've Learned */}
        <div style={{
          background: "#1c3a2a",
          padding: "24px 28px",
          marginBottom: 32,
        }}>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#d4a843",
            marginBottom: 16,
            fontFamily: "'Georgia', serif",
          }}>
            What We've Learned
          </div>
          <ul style={{
            margin: 0,
            paddingLeft: 20,
            listStyleType: "'\u2022  '",
            color: "#f5f0e8",
            fontSize: 15,
            lineHeight: 1.75,
            fontFamily: "'Georgia', serif",
          }}>
            <li style={{ marginBottom: 10 }}>
              The Traffic Impact Analysis (TIA) is not complete. The Town confirmed this in writing — yet Monday's hearing proceeds anyway.
            </li>
            <li style={{ marginBottom: 10 }}>
              Lexington-Richland School District 5 has not been formally contacted about this proposal. Also confirmed in writing.
            </li>
            <li>
              The property is currently zoned Neighborhood Commercial. This is a significant rezoning, not a minor variance.
            </li>
          </ul>
        </div>

        {/* Petition text */}
        <div style={{
          borderLeft: "3px solid #8b6914",
          paddingLeft: 20,
          marginBottom: 36,
        }}>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#7a6a40",
            marginBottom: 12,
          }}>
            Petition Statement
          </div>
          <div style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#2a2a2a",
            whiteSpace: "pre-line",
          }}>
            {PETITION_TEXT}
          </div>
        </div>

        {/* Hearing Call to Action */}
        <div style={{
          background: "#d4a843",
          padding: "28px 28px 24px",
          marginBottom: 32,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: "clamp(22px, 5vw, 30px)",
            fontWeight: "bold",
            color: "#1c3a2a",
            marginBottom: 8,
            fontFamily: "'Georgia', serif",
          }}>
            Come to the Hearing
          </div>
          <div style={{
            fontSize: 17,
            color: "#1c3a2a",
            fontWeight: "bold",
            marginBottom: 4,
            fontFamily: "'Georgia', serif",
          }}>
            Monday, May 11 · 6:00 PM
          </div>
          <div style={{
            fontSize: 15,
            color: "#2d5c42",
            marginBottom: 12,
            fontFamily: "'Georgia', serif",
          }}>
            Irmo Municipal Building, 7300 Woodrow Street
          </div>
          <div style={{
            fontSize: 13,
            color: "#3a5a3a",
            fontStyle: "italic",
            fontFamily: "'Georgia', serif",
          }}>
            Your presence matters as much as your signature.
          </div>
        </div>

        {/* Form */}
        {!submitted ? (
          <div style={{
            background: "#fff",
            border: "1px solid #d4c9a8",
            padding: "28px 28px 24px",
            marginBottom: 40,
          }}>
            <div style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#7a6a40",
              marginBottom: 20,
            }}>
              Add Your Signature
            </div>

            {[
              { key: "name", label: "Full Name", placeholder: "Jane Smith", required: true },
              { key: "address", label: "Street Address (neighborhood verification)", placeholder: "e.g. 100 Oak Lane", required: true },
              { key: "email", label: "Email Address (optional — for updates only)", placeholder: "jane@example.com", required: false },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: 16 }}>
                <label style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  color: "#3a3a3a",
                  marginBottom: 6,
                  fontFamily: "'Georgia', serif",
                }}>
                  {field.label} {field.required && <span style={{ color: "#8b2020" }}>*</span>}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #c8bfa0",
                    background: "#faf8f2",
                    fontSize: 15,
                    fontFamily: "'Georgia', serif",
                    color: "#1a1a1a",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>
            ))}

            {error && (
              <div style={{
                color: "#8b2020",
                fontSize: 13,
                marginBottom: 12,
                padding: "8px 12px",
                background: "#fdf0f0",
                border: "1px solid #e8c0c0",
              }}>
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              style={{
                background: "#1c3a2a",
                color: "#f5f0e8",
                border: "none",
                padding: "13px 28px",
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Georgia', serif",
                marginTop: 4,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.target.style.background = "#2d5c42"}
              onMouseLeave={e => e.target.style.background = "#1c3a2a"}
            >
              Sign the Petition
            </button>

            <div style={{ fontSize: 11, color: "#9a8a6a", marginTop: 14, lineHeight: 1.5 }}>
              Your address is used only to verify you are a neighboring resident. Email addresses, if provided, will only be used to share updates about this petition and the hearing process.
            </div>
          </div>
        ) : (
          <div style={{
            background: "#eef5f0",
            border: "1px solid #a8c5b0",
            padding: "24px 28px",
            marginBottom: 40,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
            <div style={{ fontSize: 17, color: "#1c3a2a", fontWeight: "bold", marginBottom: 6 }}>
              Thank you — your signature has been recorded.
            </div>
            <div style={{ fontSize: 13, color: "#4a6a58" }}>
              Please share this page with your neighbors. The more signatures we have by Monday, the stronger our voice at the hearing.
            </div>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: 16,
                background: "transparent",
                border: "1px solid #4a6a58",
                color: "#1c3a2a",
                padding: "8px 20px",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Georgia', serif",
              }}
            >
              Add another signature
            </button>
          </div>
        )}

        {/* Signature list */}
        {signatures.length > 0 && (
          <div>
            <div style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#7a6a40",
              marginBottom: 16,
              paddingBottom: 8,
              borderBottom: "1px solid #d4c9a8",
            }}>
              Signatories ({sigCount})
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {signatures.map((sig, i) => (
                <div key={sig.id} style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: "1px solid #e8e0cc",
                }}>
                  <div style={{
                    fontSize: 11,
                    color: "#9a8a6a",
                    minWidth: 24,
                    textAlign: "right",
                  }}>
                    {i + 1}.
                  </div>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: "bold", color: "#1a1a1a" }}>
                      {sig.name}
                    </span>
                    <span style={{
                      fontSize: 12,
                      color: "#6a5a3a",
                      marginLeft: 10,
                    }}>
                      {sig.address}
                    </span>
                  </div>
                  <div style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: "#b0a080",
                  }}>
                    {sig.timestamp?.toDate
                      ? sig.timestamp.toDate().toLocaleDateString("en-US", { month: "short", day: "numeric" })
                      : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin panel */}
        {showAdmin && (
          <div style={{
            marginTop: 48,
            background: "#1a1a1a",
            color: "#f0f0f0",
            padding: 24,
            fontSize: 12,
            fontFamily: "monospace",
          }}>
            <div style={{ marginBottom: 12, color: "#d4a843", fontWeight: "bold" }}>
              ADMIN — Full Signature Data
            </div>
            <div style={{ marginBottom: 12 }}>
              <button
                onClick={() => {
                  const csv = ["Name,Address,Email,Date", ...signatures.map(s => {
                    const date = s.timestamp?.toDate
                      ? s.timestamp.toDate().toLocaleString()
                      : "";
                    return `"${s.name}","${s.address}","${s.email}","${date}"`;
                  })].join("\n");
                  const blob = new Blob([csv], { type: "text/csv" });
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(blob);
                  a.download = "petition-signatures.csv";
                  a.click();
                }}
                style={{
                  background: "#d4a843",
                  color: "#1a1a1a",
                  border: "none",
                  padding: "6px 14px",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: 12,
                  marginRight: 12,
                }}
              >
                Download CSV
              </button>
              <button
                onClick={() => setShowAdmin(false)}
                style={{
                  background: "transparent",
                  color: "#888",
                  border: "1px solid #555",
                  padding: "6px 14px",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                Close
              </button>
            </div>
            {signatures.map((s, i) => (
              <div key={s.id} style={{ marginBottom: 6, borderBottom: "1px solid #333", paddingBottom: 6 }}>
                <span style={{ color: "#d4a843" }}>{i + 1}.</span>{" "}
                {s.name} · {s.address} · {s.email || "no email"} ·{" "}
                <span style={{ color: "#888" }}>
                  {s.timestamp?.toDate ? s.timestamp.toDate().toLocaleString() : ""}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 48,
          paddingTop: 20,
          borderTop: "1px solid #d4c9a8",
          fontSize: 11,
          color: "#9a8a6a",
          lineHeight: 1.6,
        }}>
          <strong>Next Steps:</strong> Planning Commission & Public Hearing — Mon. May 11 at 6:00 PM · Public Meeting — May 18, 4:30–6:30 PM · Town Council 1st Reading — May 19, 6:00 PM · All meetings at the Town of Irmo Municipal Building, 7300 Woodrow Street
        </div>
      </div>
    </div>
  );
}
