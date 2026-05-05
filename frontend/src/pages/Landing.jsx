import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiStar,
  FiCalendar,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiMessageSquare,
  FiShield,
  FiMoon,
  FiSun,
  FiCreditCard,
  FiWifi,
} from "react-icons/fi";
import Button from "../components/ui/Button";
import styles from "./Landing.module.css";

const Landing = () => {
  const { isAuthenticated, loading } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ messes: 0, users: 0, uptime: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const targets = { messes: 500, users: 10000, uptime: 99.9 };
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        messes: Math.floor(targets.messes * progress),
        users: Math.floor(targets.users * progress),
        uptime: Math.min(targets.uptime, parseFloat((targets.uptime * progress).toFixed(1))),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const features = [
    {
      icon: FiUsers,
      title: "Smart Member Management",
      description: "Effortlessly manage member registrations, meal preferences, and attendance tracking",
      color: "#64b5f6",
    },
    {
      icon: FiCreditCard,
      title: "Automated Billing",
      description: "Generate bills automatically, track payments, and send reminders seamlessly",
      color: "#78909c",
    },
    {
      icon: FiWifi,
      title: "Real-time Communication",
      description: "Stay connected with instant messaging, announcements, and community features",
      color: "#90a4ae",
    },
    {
      icon: FiShield,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime and automatic data backups",
      color: "#66bb6a",
    },
  ];

  return (
    <div className={styles.landing} data-theme={darkMode ? "dark" : "light"}>
      {/* Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>⚡</div>
            <span className={styles.logoText}>SmartMess</span>
          </div>
          <button
            className={styles.darkToggle}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </header>

      {/* Hero + Features Side by Side */}
      <section className={styles.hero}>
        {/* LEFT: Hero Text */}
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <FiStar /> A Smart Solution for Hostel Mess Management
          </div>

          <h1 className={styles.heroTitle}>
            Welcome to<br />
            <span className={styles.highlight}>SmartMess</span>
          </h1>

          <p className={styles.heroTagline}>Your complete mess management solution</p>

          <p className={styles.heroSubtitle}>
            Join thousands of mess owners and members who trust SmartMess for
            seamless meal management, billing automation, and community building.
          </p>

          {/* Stats Row */}
          


<div className={styles.statsRow}>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>📋</span>
    <span className={styles.statLabel}>Menu Access</span>
  </div>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>✅</span>
    <span className={styles.statLabel}>Attendance Tracking</span>
  </div>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>💬</span>
    <span className={styles.statLabel}>Feedback System</span>
  </div>
</div>
        </div>

        {/* RIGHT: Features + Buttons */}
        <div className={styles.heroRight}>
          <h2 className={styles.whyTitle}>Why Choose SmartMess?</h2>

          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ color: feature.color }}>
                  <feature.icon size={22} />
                </div>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaButtons}>
            <Link to="/register" style={{ display: "block" }}>
              <button className={styles.btnPrimary}>
                Get Started Now <FiArrowRight />
              </button>
            </Link>
            <Link to="/register" style={{ display: "block" }}>
              <button className={styles.btnSecondary}>
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 SmartMess. Made with ❤️ for better campus dining.</p>
        <div className={styles.footerLinks}>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
