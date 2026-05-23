<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String name = (String) session.getAttribute("name");
    boolean loggedIn = (name != null && !name.isEmpty());
%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HerConnect — Where Women Rise Together</title>
  <meta name="description"
    content="HerConnect is the premium social platform empowering women to connect, grow, and thrive together." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>

  <!-- ── NAVBAR ── -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.jsp" class="logo-link" id="nav-logo">
        <img src="assets/herconnect.png" alt="HerConnect" class="logo-img" />
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.jsp" class="nav-link active">Home</a></li>
        <li><a href="community.html" class="nav-link">Community</a></li>
        <li><a href="mentorship.html" class="nav-link">Mentorship</a></li>
        <li><a href="events.html" class="nav-link">Events</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
      </ul>
      <div class="nav-actions">
        <% if (loggedIn) { %>
            <span class="user-welcome" style="margin-right: 15px; color: var(--white); font-weight: 500;">Welcome, <%= com.herconnect.util.HtmlUtils.escape(name) %></span>
            <a href="logout" class="btn btn-ghost" id="nav-logout">Sign Out</a>
        <% } else { %>
            <a href="login.jsp" class="btn btn-ghost" id="nav-login">Sign In</a>
            <a href="register.jsp" class="btn btn-primary" id="nav-join">Join Free</a>
        <% } %>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ── HERO ── -->
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>10,000+ Women Connected Worldwide</span>
      </div>
      <h1 class="hero-title">
        Where <em>Women</em><br />Rise Together
      </h1>
      <p class="hero-subtitle">
        HerConnect is the premium platform where ambitious women build meaningful connections, find mentors, and create
        opportunities that matter.
      </p>
      <div class="hero-actions">
        <% if (loggedIn) { %>
            <a href="community.html" class="btn btn-primary btn-lg" id="hero-join">Explore Circles</a>
        <% } else { %>
            <a href="register.jsp" class="btn btn-primary btn-lg" id="hero-join">Start Your Journey</a>
        <% } %>
        <a href="community.html" class="btn btn-outline btn-lg" id="hero-explore">Explore Community</a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">10K+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">500+</span>
          <span class="stat-label">Mentors</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">200+</span>
          <span class="stat-label">Events</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">50+</span>
          <span class="stat-label">Countries</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── FEATURES ── -->
  <section class="features" id="features">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Why HerConnect</span>
        <h2 class="section-title">Everything You Need to <em>Thrive</em></h2>
        <p class="section-sub">Designed exclusively for women who are building something extraordinary.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" id="feat-community">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg3)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <h3>Curated Community</h3>
          <p>Join niche circles of women in tech, arts, business, wellness & more. Real connections, zero noise.</p>
        </div>
        <div class="feature-card" id="feat-mentorship">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg4)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg4" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <h3>Expert Mentorship</h3>
          <p>Get matched with vetted mentors who've walked your path and are ready to guide you forward.</p>
        </div>
        <div class="feature-card" id="feat-events">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg5)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg5" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <h3>Exclusive Events</h3>
          <p>Attend virtual & in-person summits, workshops, and networking galas curated for women leaders.</p>
        </div>
        <div class="feature-card" id="feat-resources">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg6)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg6" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <h3>Growth Resources</h3>
          <p>Access a rich library of templates, guides, and tools tailored to every stage of your journey.</p>
        </div>
        <div class="feature-card" id="feat-safe">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg7)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg7" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3>Safe Space</h3>
          <p>A moderated, women-only environment where you can share freely without judgment or harassment.</p>
        </div>
        <div class="feature-card" id="feat-jobs">
          <div class="feat-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#rg8)" stroke-width="1.5">
              <defs>
                <linearGradient id="rg8" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" />
                  <stop offset="100%" stop-color="#0D9488" />
                </linearGradient>
              </defs>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h3>Opportunity Board</h3>
          <p>Discover jobs, collaborations, grants, and partnerships posted by women for women.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── TESTIMONIALS ── -->
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Community Voices</span>
        <h2 class="section-title">Stories That <em>Inspire</em></h2>
      </div>
      <div class="testi-grid">
        <div class="testi-card" id="testi-1">
          <div class="testi-stars">★★★★★</div>
          <p>"HerConnect changed my career trajectory. I found my co-founder here — we just closed our Series A!"</p>
          <div class="testi-author">
            <div class="testi-avatar" style="background:#2563EB">Z</div>
            <div><strong>Zara Thompson</strong><span>Co-Founder, TechBloom</span></div>
          </div>
        </div>
        <div class="testi-card featured" id="testi-2">
          <div class="testi-stars">★★★★★</div>
          <p>"I joined as a mentee and now I'm a mentor. The community gave me the confidence to lead and give back."</p>
          <div class="testi-author">
            <div class="testi-avatar" style="background:#00D2FF">P</div>
            <div><strong>Priya Nair</strong><span>VP Engineering, Stripe</span></div>
          </div>
        </div>
        <div class="testi-card" id="testi-3">
          <div class="testi-stars">★★★★★</div>
          <p>"The events and workshops here are world-class. Every session leaves me with something actionable."</p>
          <div class="testi-author">
            <div class="testi-avatar" style="background:#60A5FA">L</div>
            <div><strong>Layla Hassan</strong><span>Creative Director, Vogue</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="cta-section" id="cta">
    <div class="cta-bg">
      <div class="orb orb-cta-1"></div>
      <div class="orb orb-cta-2"></div>
    </div>
    <div class="container">
      <div class="cta-inner">
        <h2 class="cta-title">Ready to <em>Rise</em>?</h2>
        <p class="cta-sub">Join thousands of women who are building the future, together.</p>
        <% if (loggedIn) { %>
            <a href="community.html" class="btn btn-primary btn-lg" id="cta-join">Go to Community Circle</a>
        <% } else { %>
            <a href="register.jsp" class="btn btn-primary btn-lg" id="cta-join">Join HerConnect — It's Free</a>
        <% } %>
        <p class="cta-note">No credit card required • Cancel anytime</p>
      </div>
    </div>
  </section>

  <!-- ── FOOTER ── -->
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.jsp" class="logo-link">
            <img src="assets/herconnect.png" alt="HerConnect" class="logo-img" />
          </a>
          <p class="footer-tagline">Where Women Rise Together</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Platform</h4>
            <a href="community.html">Community</a>
            <a href="mentorship.html">Mentorship</a>
            <a href="events.html">Events</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="about.html">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Safety</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 HerConnect. All rights reserved. Made with ♥ for women.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Instagram">IG</a>
          <a href="#" class="social-link" aria-label="Twitter">TW</a>
          <a href="#" class="social-link" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>

</html>
