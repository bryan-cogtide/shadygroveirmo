const UPDATES = [
  {
    date: "May 19, 2026",
    text: "Town Council voted 4-1 to reject Ordinance 26-12 on first reading. The proposed development is dead in its current form. Thank you to everyone who signed, showed up, and made your voice heard.",
  },
  {
    date: "May 11, 2026",
    text: "The Planning Commission voted unanimously to recommend approval. The community responded \u2014 and won.",
  },
  {
    date: "May 11, 2026",
    text: "WLTX covered tonight\u2019s hearing \u2014 the story led the 11:00 PM news.",
    link: {
      url: "https://www.wltx.com/article/news/local/irmo-residents-rally-against-proposed-200-unit-development/101-7f92bc69-9b43-4c4b-b1e6-9c0b4b0069de",
      label: "Watch the story \u2192",
    },
  },
  {
    date: "May 8\u201311, 2026",
    text: "Over 727 neighbors signed this petition in less than five days. The full signature list was presented to the Planning Commission in person tonight.",
  },
];

const COUNCIL_MEMBERS = [
  {
    name: "Bill Danielson",
    title: "Mayor",
    phone: "(803) 606-4991",
    phoneLink: "tel:+18036064991",
    email: "billdanielson@townofirmosc.com",
  },
  {
    name: "Dr. Barb Waldman",
    title: "Mayor Pro Tem",
    phone: "(803) 319-2147",
    phoneLink: "tel:+18033192147",
    email: "barbwaldman@townofirmosc.com",
  },
  {
    name: "Phyllis Coleman",
    title: "Council Member",
    phone: "(803) 629-1883",
    phoneLink: "tel:+18036291883",
    email: "phylliscoleman@townofirmosc.com",
  },
  {
    name: "Gabriel Penfield",
    title: "Council Member",
    phone: "(803) 386-8531",
    phoneLink: "tel:+18033868531",
    email: "gabrielpenfield@townofirmosc.com",
  },
  {
    name: "Mike Ward",
    title: "Council Member",
    phone: "(803) 602-4113",
    phoneLink: "tel:+18036024113",
    email: "mikeward@townofirmosc.com",
  },
];

const PETITION_TEXT = `We, the undersigned residents of the neighborhoods adjacent to the proposed American Community Developers project on the Irmo/Richland County border, respectfully request that the Town of Irmo Planning Commission require the following before approval of any zoning change:

1. A completed, publicly available Traffic Impact Analysis (TIA)
2. Formal consultation with Lexington-Richland School District 5 regarding enrollment capacity
3. Documented road infrastructure improvement commitments from the developer
4. A thorough review of the project's compatibility with the existing low-density residential character of the surrounding area

A development of this scale — 330 units including 200 workforce apartments, 90 senior duplexes, and 40 single-family homes — represents a fundamental change to our neighborhood. We ask that the Town proceed with caution and ensure all impact studies are complete before any approvals are granted.`;

export default function Petition() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f0e8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#1a1a1a",
    }}>
      {/* Victory Banner */}
      <div style={{
        background: "#d4a843",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontSize: "clamp(36px, 8vw, 56px)",
            fontWeight: "bold",
            color: "#1c3a2a",
            marginBottom: 16,
            fontFamily: "'Georgia', serif",
          }}>
            We Won. 4-1.
          </div>
          <div style={{
            fontSize: 16,
            color: "#1c3a2a",
            lineHeight: 1.7,
            fontFamily: "'Georgia', serif",
            maxWidth: 600,
            margin: "0 auto",
          }}>
            On May 19, 2026, the Irmo Town Council voted 4-1 to reject Ordinance 26-12. The proposed 330-unit American Community Developers development on Shady Grove Road is dead. If ACD ever returns, they start over from scratch — new application, new process, same community watching.
          </div>
        </div>
      </div>

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
            We Won — And We're Just Getting Started.
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 60px" }}>

        {/* Commemorative signature count */}
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
            1,286
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: "bold" }}>
              neighbors signed this petition in under two weeks.
            </div>
          </div>
        </div>

        {/* Updates */}
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
            marginBottom: 8,
            fontFamily: "'Georgia', serif",
          }}>
            What's Happening — Stay Informed
          </div>
          <div style={{
            fontSize: 13,
            color: "#a8c5b0",
            marginBottom: 20,
            fontStyle: "italic",
            fontFamily: "'Georgia', serif",
          }}>
            This page will be updated as the process moves forward. Bookmark it and check back often.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {UPDATES.map((update, i) => (
              <div key={i} style={{
                paddingLeft: 16,
                borderLeft: "3px solid #d4a843",
              }}>
                <div style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#d4a843",
                  marginBottom: 4,
                  fontFamily: "'Georgia', serif",
                }}>
                  {update.date}
                </div>
                <div style={{
                  fontSize: 15,
                  color: "#f5f0e8",
                  lineHeight: 1.65,
                  fontFamily: "'Georgia', serif",
                }}>
                  {update.text}
                  {update.link && (
                    <>
                      {" "}
                      <a
                        href={update.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#d4a843",
                          textDecoration: "underline",
                          textUnderlineOffset: 3,
                        }}
                      >
                        {update.link.label}
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid #2d5c42",
            fontSize: 13,
            color: "#a8c5b0",
            fontFamily: "'Georgia', serif",
          }}>
            Have updates to share? Email{" "}
            <a
              href="mailto:hello@shadygroveirmo.org"
              style={{ color: "#d4a843", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              hello@shadygroveirmo.org
            </a>{" "}
            or check our{" "}
            <a
              href="https://www.facebook.com/groups/2013848222539737"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4a843", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Facebook Group
            </a>
          </div>
        </div>

        {/* Your Town Council */}
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
            Your Town Council
          </div>

          <div style={{
            fontSize: 15,
            color: "#f5f0e8",
            lineHeight: 1.65,
            marginBottom: 20,
            fontFamily: "'Georgia', serif",
          }}>
            Know your elected officials. Stay engaged.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
            {COUNCIL_MEMBERS.map((member, i) => (
              <div
                key={i}
                style={{
                  background: "#0d1f16",
                  padding: "14px 16px",
                  borderLeft: "3px solid #d4a843",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#f5f0e8",
                  fontFamily: "'Georgia', serif",
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontSize: 12,
                  color: "#a8c5b0",
                  fontFamily: "'Georgia', serif",
                }}>
                  {member.title}
                </div>
                <div style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 13,
                  marginTop: 4,
                }}>
                  <a
                    href={member.phoneLink}
                    style={{
                      color: "#d4a843",
                      textDecoration: "none",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    style={{
                      color: "#d4a843",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
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
            How We Won \u2014 What The Record Shows
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
              The Traffic Impact Analysis is NOT complete — yet the commission approved it anyway.
            </li>
            <li style={{ marginBottom: 10 }}>
              Lexington-Richland School District 5 has NOT been formally contacted. No condition requires it.
            </li>
            <li style={{ marginBottom: 10 }}>
              The only traffic condition requires the developer meet SCDOT minimums — the legal floor for any project anywhere. No specific road improvements. No binding mitigation.
            </li>
            <li style={{ marginBottom: 10 }}>
              The developer's own application listed 120 senior units and 50 single-family homes. The approved conditions say 90 and 40. Numbers changed in private negotiations without public input.
            </li>
            <li>
              The commission approved this partly on the characterization that it's a senior housing project. Phase 1 is 200 workforce apartments. Senior housing is Phase 2 — the smaller component.
            </li>
          </ul>
        </div>

        {/* Petition text - collapsed */}
        <details style={{
          borderLeft: "3px solid #8b6914",
          paddingLeft: 20,
          marginBottom: 36,
        }}>
          <summary style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#7a6a40",
            cursor: "pointer",
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ fontSize: 14, transition: "transform 0.2s" }}>\u25B6</span>
            About This Campaign
          </summary>
          <div style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#2a2a2a",
            whiteSpace: "pre-line",
            marginTop: 12,
          }}>
            {PETITION_TEXT}
          </div>
        </details>

        {/* Community Hub CTA */}
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
            marginBottom: 16,
            fontFamily: "'Georgia', serif",
          }}>
            This Community Is Just Getting Started.
          </div>
          <div style={{
            fontSize: 16,
            color: "#1c3a2a",
            lineHeight: 1.7,
            fontFamily: "'Georgia', serif",
            maxWidth: 600,
            margin: "0 auto",
          }}>
            We built something real in two weeks — 1,286 signatures, media coverage, direct relationships with elected officials, and a platform that didn't exist before. We're turning this site into a permanent community hub for zoning actions, development news, and civic updates in the Irmo/Shady Grove corridor. Stay connected. Stay informed. When the next thing comes up — and it will — we'll be ready.
          </div>
        </div>

        {/* Facebook Group - prominent */}
        <div style={{
          background: "#1c3a2a",
          padding: "20px 28px",
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#d4a843" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <div>
            <a
              href="https://www.facebook.com/groups/2013848222539737"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#f5f0e8",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "'Georgia', serif",
              }}
            >
              Join Our Facebook Group
            </a>
            <div style={{
              fontSize: 13,
              color: "#a8c5b0",
              marginTop: 4,
              fontFamily: "'Georgia', serif",
            }}>
              Where neighbors share updates, organize, and stay connected between meetings.
            </div>
          </div>
        </div>

        {/* Stay Connected - Mailchimp form */}
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
            marginBottom: 8,
          }}>
            Stay Connected
          </div>
          <div style={{
            fontSize: 14,
            color: "#4a4a4a",
            marginBottom: 20,
            lineHeight: 1.6,
            fontFamily: "'Georgia', serif",
          }}>
            Sign up to stay informed about zoning actions and community updates in the Irmo/Shady Grove corridor.
          </div>

          <form
            action="https://shadygroveirmo.us6.list-manage.com/subscribe/post?u=7d34c858fac28a75af30a65e7&amp;id=1c7f6739bb&amp;f_id=00fe21e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="Email Address *"
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
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                placeholder="First Name"
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
              <input
                type="text"
                name="LNAME"
                id="mce-LNAME"
                placeholder="Last Name"
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
              <input
                type="text"
                name="MMERGE8"
                id="mce-MMERGE8"
                placeholder="Street / Community"
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
              {/* Honeypot */}
              <div aria-hidden="true" style={{ position: "absolute", left: -5000 }}>
                <input type="text" name="b_7d34c858fac28a75af30a65e7_1c7f6739bb" tabIndex="-1" defaultValue="" />
              </div>
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                value="Stay Connected"
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
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 48,
          paddingTop: 20,
          borderTop: "1px solid #d4c9a8",
          fontSize: 11,
          color: "#9a8a6a",
          lineHeight: 1.6,
          textAlign: "center",
        }}>
          shadygroveirmo.org · A neighborhood project
        </div>
      </div>
    </div>
  );
}
