import { useState } from "react";

const UPDATES = [
  {
    date: "June 5, 2026",
    heading: "Newberry County Unanimously Denies Project Altair Data Center",
    text: "While outside our direct corridor, this is worth noting: Newberry County Council voted unanimously this week to deny the land-sale ordinance required for Project Altair, a large-scale data center proposal, and placed a 12-month moratorium on all new data center permits in the county. The project had faced intense community pushback. It’s further proof that organized, engaged communities make a difference. We proved it here two weeks ago. Newberry County proved it this week.",
  },
  {
    date: "June 5, 2026",
    heading: "Richland County Comp Plan Deferred to June 16th",
    text: "Richland County Council deferred the second reading of the Reimagine Richland comprehensive plan to June 16th. Jason Branham — our District 1 representative and the lone NO vote on first reading — led the charge on that deferral. Council members were to submit proposed revisions by June 5th. We’ll have more information as the June 16th date approaches and will keep you updated here.",
    expandedText: "If you’d like to thank Jason Branham for his work representing our district, his email is linked below.",
    expandedLinks: [
      {
        url: "mailto:branham.jason@richlandcountysc.gov",
        label: "branham.jason@richlandcountysc.gov",
      },
    ],
  },
  {
    date: "June 5, 2026",
    heading: "PrimeSpace Storage — Second Reading Pushed to July",
    text: "At Tuesday’s Irmo Town Council workshop, council members determined the PrimeSpace Storage expansion wasn’t ready for a second reading. Between inadequate setbacks from the upcoming Broad River Road widening, insufficient detail on elevation renderings, and unacceptable building materials, the developer must submit new drawings before this moves forward — effectively pushing the second reading to July at the earliest. The process is working. That said, consistent presence at council meetings matters even between votes. The June Irmo Town Council meeting is still worth attending to signal that this community is paying attention.",
  },
  {
    date: "May 29, 2026",
    heading: "Two Meetings — Same Night — Tuesday June 2nd",
    text: "This Tuesday at 6 PM our community needs to be in two places at once. The Irmo Town Council is holding a workshop at 7300 Woodrow Street covering Broad River Road development including the PrimeSpace Storage expansion. At the same time, Richland County Council holds its final public hearing on the Reimagine Richland comprehensive plan at 2020 Hampton Street in Columbia — the document that governs most of our properties for the next decade. Jason Branham, our District 1 rep and the lone NO vote on first reading, needs community support in that room. If you're near Irmo, go to 7300 Woodrow Street. If you're closer to Columbia, go to 2020 Hampton Street. If you can't attend either, email your Richland County Council representatives — contact info is on this page.",
  },
  {
    date: "May 29, 2026",
    heading: "What Vision Does Irmo Have for Broad River Road?",
    text: "The PrimeSpace Storage expansion at 7949 Broad River Road is moving toward a second reading. In 2023, Irmo Town Council moved self-storage facilities out of the General Commercial zone entirely — limiting them to Light Manufacturing zones only. Tuesday's workshop is a chance to ask whether carving out special exceptions for more storage units reflects the vision Irmo should have for that corridor. We think Broad River Road deserves better than storage units and car washes. Come to the workshop and say so: Tuesday June 2, 6:00 PM, Irmo Municipal Building, 7300 Woodrow Street.",
  },
  {
    date: "May 20, 2026",
    heading: "Richland County's New Comprehensive Plan — What You Should Know",
    text: "While our community was focused on last night's Irmo Town Council vote, Richland County held a Special Called meeting to take its third step toward adopting a new comprehensive plan — the governing document that will shape land use decisions across the county for the next decade.\n\nWe've now had a chance to review both the current 2015 plan and the proposed 2025 draft side by side. The differences are significant and deserve community attention.",
    expandedText: "The maps tell the story.\n\nThe 2015 Future Land Use Map shows street names throughout — you can find your road, your property, your neighborhood, and know exactly what land use designation applies. Boundaries are clear. Geography is anchored.\n\nThe proposed 2025 \"Conservation and Development Map\" shows no street names. Major route numbers only. Land use boundaries float without geographic reference. Large areas — particularly around lake properties — carry no designation at all, left as white margins open to staff interpretation. When a developer asks for a rezoning in one of these areas, staff will decide whether it \"complies\" with the plan. Without clear boundaries tied to real roads, that's a judgment call with no anchor.",
    mapComparison: {
      heading: "See For Yourself — Compare the Maps",
      subtext: "The difference between the 2015 map and the 2025 draft is stark. The 2015 map shows named roads and clear boundaries. The 2025 draft removes street names entirely and leaves large areas with no land use designation.",
      buttons: [
        { label: "View 2015 Map (Current)", url: "/2015-future-land-use-map.pdf" },
        { label: "View 2025 Draft Map (Proposed)", url: "/2025-conservation-development-map-draft.pdf" },
      ],
      footer: "Both maps are also available for download.",
    },
    expandedTextContinued: "Rural areas in northwest Richland County — our corridor — are reclassified in ways that invite higher density development. The new Broad River Road Mixed-Use Corridor designation runs directly through this area.\n\nThe process itself raised red flags. The public hearing for this plan was advertised at 6pm. The agenda, released less than 24 hours before the meeting, moved the start time to 5pm. Sign-up sheets for public comment were pulled at 5:15pm. Some residents who showed up at the advertised time were unable to participate.\n\nThe third and final reading is tentatively scheduled for June 2nd. That is less than two weeks away.\n\nIf you have concerns about how this plan affects your property or your community, contact Richland County Council. Jason Branham is our district representative.",
    expandedLinks: [
      {
        url: "mailto:branham.jason@richlandcountysc.gov",
        label: "branham.jason@richlandcountysc.gov",
      },
    ],
    expandedFooter: "We will continue tracking this at shadygroveirmo.org.",
  },
  {
    date: "May 19, 2026",
    heading: "Also That Night: PrimeSpace Storage Expansion Passes First Reading — A Question Worth Asking",
    text: "On the same evening the Shady Grove development was rejected, Irmo Town Council passed the first reading of a conditional rezoning for PrimeSpace Storage at 7949 Broad River Road (Ordinance 26-11), allowing a 42,000 square foot expansion of an existing self-storage facility with conditions including landscaping and façade improvements.",
    expandedText: "Here's the detail worth noting: in 2023, Irmo Town Council specifically moved self-storage out of the General Commercial zone, limiting it to Light Manufacturing zones only. Tuesday's approval carved out a special exception for this one property — effectively reversing a decision the council made just two years ago.\n\nThe conditions attached are meaningful — upgraded landscaping, façade improvements, no outdoor or contractor storage. But the broader question remains: is more storage space on Broad River Road consistent with the kind of growth Irmo actually wants for that corridor? We're tracking this through its second reading and will report back.",
  },
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

const COUNTY_COUNCIL_MEMBERS = [
  {
    name: "Jason Branham",
    title: "District 1 (Our District)",
    phone: "(803) 542-0002",
    phoneLink: "tel:+18035420002",
    email: "branham.jason@richlandcountysc.gov",
    highlight: true,
    note: "Voted NO on the comp plan. Our ally on this fight.",
  },
  {
    name: "Derrek Pugh",
    title: "District 2 (Vice Chair)",
    phone: "(803) 977-4339",
    phoneLink: "tel:+18039774339",
    email: "pugh.derrek@richlandcountysc.gov",
  },
  {
    name: "Tyra Little",
    title: "District 3",
    phone: "(803) 422-0203",
    phoneLink: "tel:+18034220203",
    email: "little.tyra@richlandcountysc.gov",
  },
  {
    name: "Paul Livingston",
    title: "District 4",
    phone: "(803) 576-5463",
    phoneLink: "tel:+18035765463",
    email: "livingston.paul@richlandcountysc.gov",
  },
  {
    name: "Allison Terracio",
    title: "District 5",
    phone: "(803) 622-6029",
    phoneLink: "tel:+18036226029",
    email: "terracio.allison@richlandcountysc.gov",
  },
  {
    name: "Don Weaver",
    title: "District 6",
    phone: "(803) 995-3703",
    phoneLink: "tel:+18039953703",
    email: "weaver.don@richlandcountysc.gov",
  },
  {
    name: "Gretchen Cooper",
    title: "District 7",
    phone: "(803) 977-4337",
    phoneLink: "tel:+18039774337",
    email: "cooper.gretchen@richlandcountysc.gov",
  },
  {
    name: "Tish Dozier Alleyne",
    title: "District 8",
    phone: "(803) 457-2597",
    phoneLink: "tel:+18034572597",
    email: "alleyne.tish@richlandcountysc.gov",
  },
  {
    name: "Jesica Mackey",
    title: "District 9 (Chair)",
    phone: "(803) 977-4338",
    phoneLink: "tel:+18039774338",
    email: "mackey.jesica@richlandcountysc.gov",
  },
  {
    name: "Cheryl English",
    title: "District 10",
    phone: "(803) 949-0770",
    phoneLink: "tel:+18039490770",
    email: "english.cheryl@richlandcountysc.gov",
  },
  {
    name: "Chakisse Newton",
    title: "District 11",
    phone: "(803) 973-9652",
    phoneLink: "tel:+18039739652",
    email: "newton.chakisse@richlandcountysc.gov",
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

function UpdateEntry({ update }) {
  const [expanded, setExpanded] = useState(false);
  const hasExpanded = !!update.expandedText;

  return (
    <div style={{
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
      {update.heading && (
        <div style={{
          fontSize: 17,
          fontWeight: "bold",
          color: "#f5f0e8",
          marginBottom: 8,
          fontFamily: "'Georgia', serif",
        }}>
          {update.heading}
        </div>
      )}
      <div style={{
        fontSize: 15,
        color: "#f5f0e8",
        lineHeight: 1.65,
        fontFamily: "'Georgia', serif",
        whiteSpace: "pre-line",
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
      {hasExpanded && (
        <>
          {expanded && (
            <div style={{
              fontSize: 15,
              color: "#f5f0e8",
              lineHeight: 1.65,
              fontFamily: "'Georgia', serif",
              whiteSpace: "pre-line",
              marginTop: 12,
            }}>
              {update.expandedText.split("\n\n").map((para, j) => {
                const isBold = para === "The maps tell the story." ||
                  para === "The process itself raised red flags." ||
                  para.startsWith("The third and final reading");
                return (
                  <div key={j} style={{
                    marginBottom: 12,
                    fontWeight: isBold ? "bold" : "normal",
                    fontStyle: isBold ? "italic" : "normal",
                  }}>
                    {para}
                  </div>
                );
              })}
              {update.mapComparison && (
                <div style={{
                  background: "#0d1f16",
                  padding: "20px 24px",
                  marginTop: 16,
                  marginBottom: 16,
                  borderLeft: "3px solid #d4a843",
                }}>
                  <div style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#d4a843",
                    marginBottom: 8,
                    fontFamily: "'Georgia', serif",
                  }}>
                    {update.mapComparison.heading}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: "#a8c5b0",
                    lineHeight: 1.6,
                    marginBottom: 16,
                    fontFamily: "'Georgia', serif",
                  }}>
                    {update.mapComparison.subtext}
                  </div>
                  <div style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginBottom: 12,
                  }}>
                    {update.mapComparison.buttons.map((btn, b) => (
                      <a
                        key={b}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          background: "#1c3a2a",
                          color: "#f5f0e8",
                          border: "1px solid #d4a843",
                          padding: "10px 20px",
                          fontSize: 14,
                          fontFamily: "'Georgia', serif",
                          textDecoration: "none",
                          letterSpacing: "0.04em",
                          cursor: "pointer",
                          flex: "1 1 200px",
                          textAlign: "center",
                          minWidth: 200,
                        }}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: "#a8c5b0",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}>
                    {update.mapComparison.footer}
                  </div>
                </div>
              )}
              {update.expandedTextContinued && update.expandedTextContinued.split("\n\n").map((para, j) => {
                const isBold = para === "The process itself raised red flags." ||
                  para.startsWith("The third and final reading");
                return (
                  <div key={`cont-${j}`} style={{
                    marginBottom: 12,
                    fontWeight: isBold ? "bold" : "normal",
                    fontStyle: isBold ? "italic" : "normal",
                  }}>
                    {para}
                  </div>
                );
              })}
              {update.expandedLinks && update.expandedLinks.map((link, k) => (
                <div key={k} style={{ marginBottom: 8 }}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      color: "#d4a843",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              {update.expandedFooter && (
                <div style={{
                  marginTop: 8,
                  fontStyle: "italic",
                  color: "#a8c5b0",
                }}>
                  {update.expandedFooter}
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              color: "#d4a843",
              fontSize: 13,
              fontFamily: "'Georgia', serif",
              cursor: "pointer",
              padding: "8px 0 0",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            {expanded ? "▲ Show less" : "▼ Read more"}
          </button>
        </>
      )}
    </div>
  );
}

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
              <UpdateEntry key={i} update={update} />
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

        {/* Your Richland County Council */}
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
            Your Richland County Council
          </div>

          <div style={{
            fontSize: 15,
            color: "#f5f0e8",
            lineHeight: 1.65,
            marginBottom: 20,
            fontFamily: "'Georgia', serif",
          }}>
            The Richland County comprehensive plan goes to a final vote on June 2nd. Contact your representatives — all of them — before then. Jason Branham (District 1) was the lone NO vote on the plan and has raised the possibility of deferral. The other ten members voted yes.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
            {COUNTY_COUNCIL_MEMBERS.map((member, i) => (
              <div
                key={i}
                style={{
                  background: member.highlight ? "#2a2410" : "#0d1f16",
                  padding: "14px 16px",
                  borderLeft: member.highlight ? "3px solid #d4a843" : "3px solid #2d5c42",
                  borderRight: member.highlight ? "1px solid #d4a843" : undefined,
                  borderTop: member.highlight ? "1px solid #d4a843" : undefined,
                  borderBottom: member.highlight ? "1px solid #d4a843" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: member.highlight ? "#d4a843" : "#f5f0e8",
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
                {member.note && (
                  <div style={{
                    fontSize: 12,
                    color: "#d4a843",
                    fontStyle: "italic",
                    fontFamily: "'Georgia', serif",
                  }}>
                    {member.note}
                  </div>
                )}
                <div style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 13,
                  marginTop: 4,
                  flexWrap: "wrap",
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

          <div style={{
            fontSize: 14,
            color: "#a8c5b0",
            lineHeight: 1.65,
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            paddingTop: 12,
            borderTop: "1px solid #2d5c42",
          }}>
            The June 2nd vote is the last opportunity to push for deferral or amendments before this plan becomes official. Be brief, be respectful, and ask them to defer until road names and clear boundaries are restored to the map.
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
            How We Won — What The Record Shows
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
            <span style={{ fontSize: 14, transition: "transform 0.2s" }}>▶</span>
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
