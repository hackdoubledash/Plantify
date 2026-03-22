import { useState } from "react";

const theme = {
  mint: "#3EB489",
  mintLight: "#A8D5C2",
  mintPale: "#E8F7F2",
  mintDark: "#2A8C67",
  white: "#FFFFFF",
  offWhite: "#F7FCF9",
  text: "#1A2E25",
  textMid: "#4A6B5A",
  textLight: "#8AA898",
  border: "#D4EDE4",
  shadow: "rgba(62,180,137,0.12)",
};

const screens = ["splash", "onboarding", "login", "home", "blueprint", "booking", "subscriptions", "store", "profile"];

const GoogleFontsLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${theme.mintPale}; }
    ::-webkit-scrollbar-thumb { background: ${theme.mintLight}; border-radius: 4px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .fade-up { animation: fadeUp 0.6s ease forwards; }
    .fade-up-2 { animation: fadeUp 0.6s ease 0.15s forwards; opacity: 0; }
    .fade-up-3 { animation: fadeUp 0.6s ease 0.3s forwards; opacity: 0; }
    .fade-up-4 { animation: fadeUp 0.6s ease 0.45s forwards; opacity: 0; }
    .float { animation: float 3s ease-in-out infinite; }
    .btn-press:active { transform: scale(0.96); }
  `}</style>
);

// ─── NAV BAR ───────────────────────────────────────────────────────────────
function BottomNav({ current, setScreen }) {
  const tabs = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "blueprint", icon: "🌿", label: "Visualize" },
    { id: "booking", icon: "👷", label: "Book" },
    { id: "store", icon: "🛒", label: "Store" },
    { id: "profile", icon: "👤", label: "Profile" },
  ];
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: theme.white, borderTop: `1px solid ${theme.border}`,
      display: "flex", justifyContent: "space-around", padding: "10px 0 16px",
      boxShadow: `0 -4px 20px ${theme.shadow}`, zIndex: 100,
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => setScreen(t.id)} className="btn-press"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            padding: "4px 12px", borderRadius: 12,
            transition: "all 0.2s",
          }}>
          <span style={{ fontSize: 20 }}>{t.icon}</span>
          <span style={{
            fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: current === t.id ? 600 : 400,
            color: current === t.id ? theme.mint : theme.textLight,
          }}>{t.label}</span>
          {current === t.id && (
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: theme.mint, marginTop: 1 }} />
          )}
        </button>
      ))}
    </div>
  );
}

// ─── SPLASH ────────────────────────────────────────────────────────────────
function SplashScreen({ setScreen }) {
  return (
    <div style={{
      height: "100%", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: `linear-gradient(160deg, ${theme.mintDark} 0%, ${theme.mint} 50%, ${theme.mintLight} 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      {/* decorative circles */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: [180, 120, 80, 200, 60][i],
          height: [180, 120, 80, 200, 60][i],
          borderRadius: "50%",
          border: `1px solid rgba(255,255,255,${[0.08, 0.06, 0.1, 0.05, 0.12][i]})`,
          top: ["10%", "60%", "30%", "-5%", "75%"][i],
          left: ["-5%", "70%", "80%", "40%", "-10%"][i],
        }} />
      ))}

      <div className="float" style={{ marginBottom: 28 }}>
        <div style={{
          width: 100, height: 100, borderRadius: 32,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 52, boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}>🌿</div>
      </div>

      <div className="fade-up" style={{ textAlign: "center", marginBottom: 8 }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 42,
          color: theme.white, fontWeight: 700, letterSpacing: "-0.5px",
        }}>Plantify</h1>
      </div>
      <div className="fade-up-2" style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 300 }}>
          See It. Plant It. Live It.
        </p>
      </div>

      <div className="fade-up-3" style={{ display: "flex", flexDirection: "column", gap: 12, width: "80%" }}>
        <button className="btn-press" onClick={() => setScreen("onboarding")} style={{
          background: theme.white, color: theme.mintDark,
          border: "none", borderRadius: 16, padding: "16px 0",
          fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
          cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          transition: "all 0.2s",
        }}>Get Started</button>
        <button className="btn-press" onClick={() => setScreen("login")} style={{
          background: "rgba(255,255,255,0.15)", color: theme.white,
          border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 16, padding: "16px 0",
          fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
          cursor: "pointer", backdropFilter: "blur(6px)",
          transition: "all 0.2s",
        }}>I already have an account</button>
      </div>
    </div>
  );
}

// ─── ONBOARDING ─────────────────────────────────────────────────────────────
function OnboardingScreen({ setScreen }) {
  const [step, setStep] = useState(0);
  const slides = [
    { emoji: "📸", title: "Snap Your Space", desc: "Take a photo of any outdoor or indoor area you want to transform into a beautiful garden." },
    { emoji: "🤖", title: "AI Visualizes It", desc: "Our AI instantly generates a stunning blueprint showing how your space will look after planting." },
    { emoji: "👷", title: "We Make It Real", desc: "Book verified gardening professionals to bring your vision to life — on your schedule." },
    { emoji: "🔄", title: "We Maintain It", desc: "Choose a 2, 4, 6, or 12-month maintenance plan and never worry about your garden again." },
  ];
  const slide = slides[step];
  return (
    <div style={{
      height: "100%", display: "flex", flexDirection: "column",
      background: theme.offWhite,
    }}>
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: "40px 32px",
      }}>
        <div className="float" style={{
          width: 140, height: 140, borderRadius: 40,
          background: `linear-gradient(135deg, ${theme.mintPale}, ${theme.mintLight})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 64, marginBottom: 40,
          boxShadow: `0 12px 40px ${theme.shadow}`,
        }}>{slide.emoji}</div>
        <h2 className="fade-up" style={{
          fontFamily: "'Playfair Display', serif", fontSize: 28, color: theme.text,
          textAlign: "center", marginBottom: 16, fontWeight: 700,
        }}>{slide.title}</h2>
        <p className="fade-up-2" style={{
          color: theme.textMid, fontSize: 15, textAlign: "center",
          lineHeight: 1.7, fontWeight: 300,
        }}>{slide.desc}</p>
      </div>

      {/* dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === step ? 24 : 8, height: 8, borderRadius: 4,
            background: i === step ? theme.mint : theme.border,
            transition: "all 0.3s",
          }} />
        ))}
      </div>

      <div style={{ padding: "0 32px 40px", display: "flex", gap: 12 }}>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} className="btn-press" style={{
            flex: 1, padding: "15px 0", borderRadius: 14,
            border: `1.5px solid ${theme.border}`, background: theme.white,
            color: theme.textMid, fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            fontWeight: 500, cursor: "pointer",
          }}>Back</button>
        )}
        <button onClick={() => step < slides.length - 1 ? setStep(step + 1) : setScreen("login")}
          className="btn-press" style={{
            flex: 2, padding: "15px 0", borderRadius: 14,
            border: "none", background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
            color: theme.white, fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 16px ${theme.shadow}`,
          }}>
          {step === slides.length - 1 ? "Let's Begin 🌿" : "Next"}
        </button>
      </div>
    </div>
  );
}

// ─── LOGIN ──────────────────────────────────────────────────────────────────
function LoginScreen({ setScreen }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.white }}>
      <div style={{
        background: `linear-gradient(160deg, ${theme.mintDark}, ${theme.mint})`,
        padding: "48px 32px 40px", borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>🌿</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: theme.white, fontWeight: 700 }}>
          {isLogin ? "Welcome Back" : "Join Plantify"}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginTop: 6 }}>
          {isLogin ? "Sign in to your garden journey" : "Start your green transformation"}
        </p>
      </div>

      <div style={{ flex: 1, padding: "32px 28px", overflowY: "auto" }}>
        {!isLogin && (
          <div className="fade-up" style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: theme.textMid, fontWeight: 500, marginBottom: 6, display: "block" }}>FULL NAME</label>
            <input placeholder="Rahul Sharma" style={inputStyle} />
          </div>
        )}
        <div className="fade-up" style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, color: theme.textMid, fontWeight: 500, marginBottom: 6, display: "block" }}>EMAIL ADDRESS</label>
          <input placeholder="ali@email.com" style={inputStyle} />
        </div>
        <div className="fade-up-2" style={{ marginBottom: 8 }}>
          <label style={{ fontSize: 12, color: theme.textMid, fontWeight: 500, marginBottom: 6, display: "block" }}>PASSWORD</label>
          <input placeholder="••••••••" type="password" style={inputStyle} />
        </div>

        {isLogin && (
          <div style={{ textAlign: "right", marginBottom: 24 }}>
            <span style={{ fontSize: 13, color: theme.mint, fontWeight: 500, cursor: "pointer" }}>Forgot password?</span>
          </div>
        )}

        <button className="btn-press" onClick={() => setScreen("home")} style={{
          width: "100%", padding: "16px 0", borderRadius: 16,
          border: "none", background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
          color: theme.white, fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          fontWeight: 600, cursor: "pointer", marginTop: 8,
          boxShadow: `0 6px 24px ${theme.shadow}`,
        }}>{isLogin ? "Sign In" : "Create Account"}</button>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <span style={{ color: theme.textLight, fontSize: 14 }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <span onClick={() => setIsLogin(!isLogin)} style={{ color: theme.mint, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: "24px 0", gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: theme.border }} />
          <span style={{ color: theme.textLight, fontSize: 12 }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: theme.border }} />
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["🌐 Google", "📱 PhonePe"].map(s => (
            <button key={s} className="btn-press" style={{
              flex: 1, padding: "13px 0", borderRadius: 14,
              border: `1.5px solid ${theme.border}`, background: theme.white,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              color: theme.text, cursor: "pointer",
            }}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "14px 16px", borderRadius: 14,
  border: `1.5px solid #D4EDE4`, background: "#F7FCF9",
  fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#1A2E25",
  outline: "none",
};

// ─── HOME ───────────────────────────────────────────────────────────────────
function HomeScreen({ setScreen }) {
  const features = [
    { icon: "🤖", label: "AI Visualize", screen: "blueprint", color: "#E8F7F2" },
    { icon: "👷", label: "Book Labor", screen: "booking", color: "#FFF3E8" },
    { icon: "🔄", label: "Subscribe", screen: "subscriptions", color: "#EEF0FF" },
    { icon: "🛒", label: "Shop", screen: "store", color: "#FFF8E8" },
  ];
  const tips = ["Water your plants every morning for best results 🌤️", "Tulsi grows best in direct sunlight 🌿", "Add vermicompost every 3 months for healthier soil 🌱"];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{
        background: `linear-gradient(160deg, ${theme.mintDark}, ${theme.mint})`,
        padding: "48px 24px 60px", borderBottomLeftRadius: 36, borderBottomRightRadius: 36,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>Good morning 🌅</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: theme.white, fontSize: 24, fontWeight: 700 }}>Rahul Sharma</h2>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, cursor: "pointer",
          }}>🔔</div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "12px 16px",
          display: "flex", alignItems: "center", gap: 10, marginTop: 20,
          backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.2)",
        }}>
          <span style={{ fontSize: 18 }}>🔍</span>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Search plants, services, products...</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 100px", marginTop: -20 }}>
        {/* Quick Actions */}
        <div style={{
          background: theme.white, borderRadius: 20, padding: 20,
          boxShadow: `0 4px 24px ${theme.shadow}`, marginBottom: 20,
        }}>
          <h3 style={{ fontSize: 13, color: theme.textLight, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5 }}>QUICK ACTIONS</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {features.map(f => (
              <button key={f.label} onClick={() => setScreen(f.screen)} className="btn-press" style={{
                background: f.color, border: "none", borderRadius: 16, padding: "16px 14px",
                cursor: "pointer", textAlign: "left", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: theme.text }}>{f.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Subscription Banner */}
        <div style={{
          background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
          borderRadius: 20, padding: "18px 20px", marginBottom: 20,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginBottom: 4 }}>ACTIVE PLAN</p>
            <p style={{ color: theme.white, fontWeight: 600, fontSize: 16 }}>Premium — 6 Months</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>Next visit: March 28</p>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.2)", borderRadius: 12, padding: "8px 14px",
            color: theme.white, fontSize: 13, fontWeight: 500, cursor: "pointer",
          }}>View →</div>
        </div>

        {/* Garden Tip */}
        <div style={{ background: theme.white, borderRadius: 20, padding: 20, boxShadow: `0 4px 24px ${theme.shadow}` }}>
          <h3 style={{ fontSize: 13, color: theme.textLight, fontWeight: 600, marginBottom: 14, letterSpacing: 0.5 }}>🌱 DAILY GARDEN TIP</h3>
          {tips.map((tip, i) => (
            <div key={i} style={{
              padding: "12px 14px", background: theme.mintPale, borderRadius: 12,
              marginBottom: i < tips.length - 1 ? 10 : 0,
              borderLeft: `3px solid ${theme.mint}`,
            }}>
              <p style={{ fontSize: 13, color: theme.textMid, lineHeight: 1.5 }}>{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BLUEPRINT ──────────────────────────────────────────────────────────────
function BlueprintScreen() {
  const [step, setStep] = useState(0);
  const [style, setStyleChoice] = useState(null);
  const styles = [
    { id: "tropical", label: "Tropical 🌴", color: "#E8F7F2" },
    { id: "minimal", label: "Minimalist 🪴", color: "#F5F5F0" },
    { id: "floral", label: "Floral Garden 🌸", color: "#FFF0F5" },
    { id: "herbal", label: "Herb Garden 🌿", color: "#F0F7E8" },
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{ padding: "48px 24px 24px", background: theme.white, borderBottom: `1px solid ${theme.border}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: theme.text, fontWeight: 700 }}>AI Garden Visualizer</h2>
        <p style={{ color: theme.textLight, fontSize: 13, marginTop: 4 }}>Upload a photo and see your space transformed</p>
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {["Upload", "Choose Style", "View Blueprint"].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                background: step >= i ? theme.mint : theme.border,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: theme.white, fontSize: 11, fontWeight: 700,
              }}>{i + 1}</div>
              <span style={{ fontSize: 11, color: step >= i ? theme.mint : theme.textLight, fontWeight: step >= i ? 600 : 400 }}>{s}</span>
              {i < 2 && <div style={{ width: 16, height: 1, background: theme.border }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "24px 20px 100px" }}>
        {step === 0 && (
          <div className="fade-up">
            <div style={{
              background: theme.white, borderRadius: 20, padding: 32, textAlign: "center",
              border: `2px dashed ${theme.mintLight}`, marginBottom: 20, cursor: "pointer",
            }} onClick={() => setStep(1)}>
              <div className="float" style={{ fontSize: 56, marginBottom: 16 }}>📸</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: theme.text, marginBottom: 8 }}>Upload Your Space</h3>
              <p style={{ color: theme.textLight, fontSize: 13, lineHeight: 1.6 }}>Tap to take a photo or upload from gallery. Works for balconies, gardens, rooftops & more.</p>
              <div style={{
                marginTop: 20, background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
                color: theme.white, borderRadius: 12, padding: "12px 24px",
                display: "inline-block", fontSize: 14, fontWeight: 600,
              }}>📷 Take / Upload Photo</div>
            </div>

            <div style={{ background: theme.white, borderRadius: 20, padding: 20, boxShadow: `0 4px 24px ${theme.shadow}` }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: theme.text, marginBottom: 12 }}>Recent Blueprints</h3>
              {["My Backyard — Tropical", "Balcony — Minimalist"].map((b, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
                  borderBottom: i === 0 ? `1px solid ${theme.border}` : "none",
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: theme.mintPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🌿</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 500, fontSize: 14, color: theme.text }}>{b}</p>
                    <p style={{ fontSize: 12, color: theme.textLight }}>Created 3 days ago</p>
                  </div>
                  <span style={{ color: theme.mint, fontSize: 18 }}>→</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="fade-up">
            <div style={{
              background: theme.white, borderRadius: 20, padding: 20,
              marginBottom: 20, boxShadow: `0 4px 24px ${theme.shadow}`,
            }}>
              <div style={{
                height: 160, borderRadius: 14, background: `linear-gradient(135deg, ${theme.mintPale}, ${theme.mintLight})`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, marginBottom: 16,
              }}>🏡</div>
              <p style={{ fontSize: 13, color: theme.textLight, textAlign: "center" }}>Your uploaded space</p>
            </div>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: theme.text, marginBottom: 16 }}>Choose a Garden Style</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              {styles.map(s => (
                <button key={s.id} onClick={() => setStyleChoice(s.id)} className="btn-press" style={{
                  background: s.color, border: `2px solid ${style === s.id ? theme.mint : "transparent"}`,
                  borderRadius: 16, padding: "20px 14px", cursor: "pointer", textAlign: "center",
                  transition: "all 0.2s",
                }}>
                  <p style={{ fontSize: 24, marginBottom: 6 }}>{s.label.split(" ")[1]}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: theme.text }}>{s.label.split(" ")[0]}</p>
                </button>
              ))}
            </div>

            <button onClick={() => style && setStep(2)} className="btn-press" style={{
              width: "100%", padding: "16px 0", borderRadius: 16, border: "none",
              background: style ? `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})` : theme.border,
              color: theme.white, fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              fontWeight: 600, cursor: style ? "pointer" : "not-allowed",
            }}>Generate Blueprint 🤖</button>
          </div>
        )}

        {step === 2 && (
          <div className="fade-up">
            <div style={{
              background: theme.white, borderRadius: 20, overflow: "hidden",
              boxShadow: `0 4px 24px ${theme.shadow}`, marginBottom: 20,
            }}>
              <div style={{
                height: 200, background: `linear-gradient(135deg, ${theme.mintPale} 0%, ${theme.mintLight} 50%, ${theme.mint} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 64, position: "relative",
              }}>
                🌳
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: theme.mint, color: theme.white, fontSize: 11,
                  fontWeight: 600, padding: "4px 10px", borderRadius: 20,
                }}>AI Generated ✨</div>
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: theme.text, marginBottom: 8 }}>Your Garden Blueprint</h3>
                <p style={{ color: theme.textMid, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  AI has designed a beautiful Tropical garden for your space. Featuring palm trees, ferns, and flowering plants arranged to maximize visual impact.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["🌴 Palm Tree", "🌿 Fern", "🌸 Hibiscus", "🪴 Bird of Paradise"].map(p => (
                    <span key={p} style={{
                      background: theme.mintPale, color: theme.mintDark,
                      fontSize: 12, fontWeight: 500, padding: "5px 10px", borderRadius: 20,
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-press" style={{
                flex: 1, padding: "14px 0", borderRadius: 14,
                border: `1.5px solid ${theme.mint}`, background: theme.white,
                color: theme.mint, fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                fontWeight: 600, cursor: "pointer",
              }}>💾 Save</button>
              <button className="btn-press" style={{
                flex: 2, padding: "14px 0", borderRadius: 14, border: "none",
                background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
                color: theme.white, fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                fontWeight: 600, cursor: "pointer",
              }}>👷 Book Labor Now</button>
            </div>
          </div>
        )}
      </div>

      {step > 0 && (
        <div style={{ padding: "0 20px 16px" }}>
          <button onClick={() => setStep(step - 1)} style={{
            background: "none", border: "none", color: theme.mint,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, cursor: "pointer",
          }}>← Back</button>
        </div>
      )}
    </div>
  );
}

// ─── BOOKING ─────────────────────────────────────────────────────────────────
function BookingScreen() {
  const workers = [
    { name: "Rajan Sharma", rating: 4.9, jobs: 142, speciality: "Landscape Design", price: 1800, emoji: "👨‍🌾" },
    { name: "Priya Nair", rating: 4.8, jobs: 98, speciality: "Floral Gardens", price: 1500, emoji: "👩‍🌾" },
    { name: "Arjun Patel", rating: 4.7, jobs: 76, speciality: "Herb & Organic", price: 1200, emoji: "👨‍🌾" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{ padding: "48px 24px 20px", background: theme.white, borderBottom: `1px solid ${theme.border}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: theme.text, fontWeight: 700 }}>Book a Gardener</h2>
        <p style={{ color: theme.textLight, fontSize: 13, marginTop: 4 }}>All professionals are verified & rated</p>
        <div style={{
          display: "flex", gap: 8, marginTop: 16, overflowX: "auto", paddingBottom: 4,
        }}>
          {["All", "Landscape", "Floral", "Organic", "Maintenance"].map((f, i) => (
            <div key={f} style={{
              padding: "7px 16px", borderRadius: 20, whiteSpace: "nowrap",
              background: i === 0 ? theme.mint : theme.mintPale,
              color: i === 0 ? theme.white : theme.mintDark,
              fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>{f}</div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 100px" }}>
        {workers.map((w, i) => (
          <div key={i} className="fade-up" style={{
            background: theme.white, borderRadius: 20, padding: 20,
            marginBottom: 16, boxShadow: `0 4px 24px ${theme.shadow}`,
          }}>
            <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: theme.mintPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32,
              }}>{w.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{ fontWeight: 600, fontSize: 16, color: theme.text }}>{w.name}</h3>
                  <span style={{ background: theme.mintPale, color: theme.mintDark, fontSize: 12, fontWeight: 600, padding: "3px 8px", borderRadius: 8 }}>
                    ⭐ {w.rating}
                  </span>
                </div>
                <p style={{ color: theme.mint, fontSize: 13, fontWeight: 500, marginTop: 2 }}>{w.speciality}</p>
                <p style={{ color: theme.textLight, fontSize: 12, marginTop: 2 }}>{w.jobs} jobs completed</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: theme.text, fontWeight: 700 }}>₹{w.price.toLocaleString()}</span>
                <span style={{ color: theme.textLight, fontSize: 12 }}> / visit</span>
              </div>
              <button className="btn-press" style={{
                background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
                color: theme.white, border: "none", borderRadius: 12, padding: "10px 20px",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SUBSCRIPTIONS ───────────────────────────────────────────────────────────
function SubscriptionsScreen() {
  const [selected, setSelected] = useState(2);
  const plans = [
    { label: "2 Months", price: 5999, visits: 2, features: ["2 maintenance visits", "Basic plant care", "Email support"] },
    { label: "4 Months", price: 10999, visits: 4, features: ["4 maintenance visits", "Seasonal advice", "Priority support", "Plant health check"] },
    { label: "6 Months", price: 15999, visits: 6, features: ["6 maintenance visits", "Plant health tracking", "Priority support", "Seasonal planting guide", "10% store discount"] },
    { label: "12 Months", price: 27999, visits: 12, features: ["Monthly visits", "Full plant management", "24/7 support", "Free starter kit", "20% store discount", "Free AI blueprints"] },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{ padding: "48px 24px 20px", background: theme.white, borderBottom: `1px solid ${theme.border}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: theme.text, fontWeight: 700 }}>Maintenance Plans</h2>
        <p style={{ color: theme.textLight, fontSize: 13, marginTop: 4 }}>Keep your garden thriving year-round</p>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 100px" }}>
        {plans.map((p, i) => (
          <div key={i} onClick={() => setSelected(i)} style={{
            background: selected === i ? `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})` : theme.white,
            borderRadius: 20, padding: 20, marginBottom: 14,
            boxShadow: selected === i ? `0 8px 32px rgba(62,180,137,0.3)` : `0 4px 24px ${theme.shadow}`,
            cursor: "pointer", transition: "all 0.3s", border: `2px solid ${selected === i ? "transparent" : theme.border}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: selected === i ? theme.white : theme.text, fontFamily: "'Playfair Display', serif" }}>{p.label}</h3>
                <p style={{ fontSize: 12, color: selected === i ? "rgba(255,255,255,0.7)" : theme.textLight, marginTop: 2 }}>{p.visits} maintenance visits included</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: selected === i ? theme.white : theme.text }}>
                  ₹{p.price.toLocaleString()}
                </p>
                <p style={{ fontSize: 11, color: selected === i ? "rgba(255,255,255,0.6)" : theme.textLight }}>total</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.features.map(f => (
                <span key={f} style={{
                  fontSize: 11, padding: "4px 10px", borderRadius: 20,
                  background: selected === i ? "rgba(255,255,255,0.2)" : theme.mintPale,
                  color: selected === i ? theme.white : theme.mintDark, fontWeight: 500,
                }}>✓ {f}</span>
              ))}
            </div>
          </div>
        ))}

        <button className="btn-press" style={{
          width: "100%", padding: "16px 0", borderRadius: 16, border: "none",
          background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
          color: theme.white, fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          fontWeight: 600, cursor: "pointer", boxShadow: `0 6px 24px ${theme.shadow}`,
        }}>Subscribe to {plans[selected].label} Plan 🌿</button>
      </div>
    </div>
  );
}

// ─── STORE ───────────────────────────────────────────────────────────────────
function StoreScreen() {
  const [cart, setCart] = useState([]);
  const products = [
    { name: "Premium Potting Mix", price: 599, emoji: "🪴", category: "Soil" },
    { name: "Organic Fertilizer", price: 449, emoji: "🌱", category: "Nutrients" },
    { name: "Garden Tool Set", price: 1499, emoji: "🔧", category: "Tools" },
    { name: "Drip Irrigation Kit", price: 2499, emoji: "💧", category: "Watering" },
    { name: "Herb Seeds Pack", price: 299, emoji: "🌿", category: "Seeds" },
    { name: "Ceramic Plant Pots", price: 799, emoji: "🏺", category: "Pots" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{ padding: "48px 24px 20px", background: theme.white, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: theme.text, fontWeight: 700 }}>Garden Store</h2>
            <p style={{ color: theme.textLight, fontSize: 13, marginTop: 4 }}>AI-recommended products for your garden</p>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: 14, background: theme.mintPale,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, position: "relative",
          }}>
            🛒
            {cart.length > 0 && (
              <div style={{
                position: "absolute", top: -4, right: -4,
                width: 18, height: 18, borderRadius: "50%", background: theme.mint,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: theme.white, fontSize: 10, fontWeight: 700,
              }}>{cart.length}</div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16, overflowX: "auto", paddingBottom: 4 }}>
          {["All", "Soil", "Nutrients", "Tools", "Seeds", "Pots"].map((c, i) => (
            <div key={c} style={{
              padding: "7px 16px", borderRadius: 20, whiteSpace: "nowrap",
              background: i === 0 ? theme.mint : theme.mintPale,
              color: i === 0 ? theme.white : theme.mintDark,
              fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>{c}</div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {products.map((p, i) => (
            <div key={i} style={{
              background: theme.white, borderRadius: 18, padding: 16,
              boxShadow: `0 4px 16px ${theme.shadow}`, overflow: "hidden",
            }}>
              <div style={{
                height: 80, background: theme.mintPale, borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 40, marginBottom: 12,
              }}>{p.emoji}</div>
              <span style={{
                fontSize: 10, color: theme.mint, fontWeight: 600, background: theme.mintPale,
                padding: "2px 8px", borderRadius: 8,
              }}>{p.category}</span>
              <p style={{ fontSize: 13, fontWeight: 600, color: theme.text, marginTop: 6, marginBottom: 8, lineHeight: 1.4 }}>{p.name}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: theme.mintDark }}>
                  ₹{p.price.toLocaleString()}
                </p>
                <button onClick={() => setCart([...cart, p])} className="btn-press" style={{
                  width: 30, height: 30, borderRadius: 10, border: "none",
                  background: `linear-gradient(135deg, ${theme.mint}, ${theme.mintDark})`,
                  color: theme.white, fontSize: 18, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PROFILE ─────────────────────────────────────────────────────────────────
function ProfileScreen({ setScreen }) {
  const stats = [
    { label: "Blueprints", value: 4, icon: "🌿" },
    { label: "Bookings", value: 7, icon: "👷" },
    { label: "Orders", value: 12, icon: "🛒" },
  ];
  const menu = [
    { icon: "🔄", label: "My Subscription", sub: "Premium — 6 Months" },
    { icon: "📍", label: "Saved Addresses", sub: "2 locations" },
    { icon: "💳", label: "Payment Methods", sub: "UPI, GPay, Card" },
    { icon: "🔔", label: "Notifications", sub: "All enabled" },
    { icon: "🌿", label: "Garden Tips", sub: "Weekly newsletter" },
    { icon: "🆘", label: "Help & Support", sub: "24/7 available" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.offWhite }}>
      <div style={{
        background: `linear-gradient(160deg, ${theme.mintDark}, ${theme.mint})`,
        padding: "48px 24px 32px", borderBottomLeftRadius: 36, borderBottomRightRadius: 36,
      }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{
            width: 72, height: 72, borderRadius: 22,
            background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 36, border: "2px solid rgba(255,255,255,0.4)",
          }}>👤</div>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: theme.white, fontSize: 22, fontWeight: 700 }}>Rahul Sharma</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>rahul@email.com</p>
            <span style={{
              background: "rgba(255,255,255,0.2)", color: theme.white,
              fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, marginTop: 6, display: "inline-block",
            }}>⭐ Premium Member</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          {stats.map(s => (
            <div key={s.label} style={{
              flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 14, padding: "12px 8px",
              textAlign: "center", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <p style={{ fontSize: 22 }}>{s.icon}</p>
              <p style={{ color: theme.white, fontWeight: 700, fontSize: 18, fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 100px" }}>
        <div style={{ background: theme.white, borderRadius: 20, overflow: "hidden", boxShadow: `0 4px 24px ${theme.shadow}`, marginBottom: 16 }}>
          {menu.map((m, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
              borderBottom: i < menu.length - 1 ? `1px solid ${theme.border}` : "none",
              cursor: "pointer",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: theme.mintPale,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
              }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: theme.text }}>{m.label}</p>
                <p style={{ fontSize: 12, color: theme.textLight, marginTop: 1 }}>{m.sub}</p>
              </div>
              <span style={{ color: theme.textLight, fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>

        <button onClick={() => setScreen("splash")} className="btn-press" style={{
          width: "100%", padding: "15px 0", borderRadius: 16,
          border: `1.5px solid #FFCDD2`, background: "#FFF5F5",
          color: "#E53935", fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          fontWeight: 600, cursor: "pointer",
        }}>🚪 Sign Out</button>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("splash");
  const showNav = !["splash", "onboarding", "login"].includes(screen);

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", background: "#1A2E25", padding: 20,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <GoogleFontsLink />
      <div style={{
        width: 390, height: 780, borderRadius: 48,
        background: theme.offWhite, position: "relative", overflow: "hidden",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
      }}>
        {/* Status bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 14, zIndex: 200,
          background: "transparent", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "8px 24px 0",
        }}>
        </div>

        <div style={{ position: "absolute", inset: 0, overflowY: screen === "home" ? "hidden" : "hidden" }}>
          {screen === "splash" && <SplashScreen setScreen={setScreen} />}
          {screen === "onboarding" && <OnboardingScreen setScreen={setScreen} />}
          {screen === "login" && <LoginScreen setScreen={setScreen} />}
          {screen === "home" && <HomeScreen setScreen={setScreen} />}
          {screen === "blueprint" && <BlueprintScreen />}
          {screen === "booking" && <BookingScreen />}
          {screen === "subscriptions" && <SubscriptionsScreen />}
          {screen === "store" && <StoreScreen />}
          {screen === "profile" && <ProfileScreen setScreen={setScreen} />}
        </div>

        {showNav && <BottomNav current={screen} setScreen={setScreen} />}
      </div>
    </div>
  );
}
