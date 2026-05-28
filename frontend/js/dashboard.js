// ─────────────────────────────────────────────
//  Her Connect – js/dashboard.js
// ─────────────────────────────────────────────

// ── Data ────────────────────────────────────

// Protect dashboard
if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href = "login.html";
}

const PAGES = {
  home: "Home",
  community: "Community",
  events: "Events",
  messages: "Inbox",
  mentorship: "Mentorship",
  opportunities: "Opportunities",
  resources: "Resources",
  growth: "Growth",
  showcase: "Showcase",
  stories: "Stories",
  profile: "Profile",
  settings: "Settings",
};

const events = [
  {
    title: "Tech Innovation Summit",
    date: "Jan 28, 2025",
    loc: "Virtual",
    cat: "Technology",
    att: 342,
  },
  {
    title: "Leadership Masterclass",
    date: "Feb 5, 2025",
    loc: "New York",
    cat: "Professional",
    att: 89,
  },
  {
    title: "Alumni Gala Dinner",
    date: "Feb 14, 2025",
    loc: "London",
    cat: "Social",
    att: 210,
  },
  {
    title: "Startup Pitch Night",
    date: "Mar 1, 2025",
    loc: "San Francisco",
    cat: "Entrepreneurship",
    att: 156,
  },
  {
    title: "Women in Data Summit",
    date: "Mar 15, 2025",
    loc: "Lagos",
    cat: "Technology",
    att: 275,
  },
  {
    title: "Design Sprint Workshop",
    date: "Mar 22, 2025",
    loc: "Virtual",
    cat: "Design",
    att: 110,
  },
  {
    title: "Black Women in VC Panel",
    date: "Apr 3, 2025",
    loc: "Nairobi",
    cat: "Finance",
    att: 194,
  },
  {
    title: "Hackathon for Good",
    date: "Apr 12, 2025",
    loc: "Kampala",
    cat: "Entrepreneurship",
    att: 320,
  },
];

const members = [
  {
    initials: "PW",
    name: "Prossy Wanyana",
    role: "VP Engineering @ Meta",
    year: "2015",
    loc: "San Francisco",
    color: "#7C3AED",
  },
  {
    initials: "SA",
    name: "Sheba Ayinza",
    role: "Founder @ NovaTech",
    year: "2012",
    loc: "Austin",
    color: "#0D9488",
  },
  {
    initials: "SM",
    name: "Sarah Muwanguzi",
    role: "Director of AI @ Google",
    year: "2016",
    loc: "London",
    color: "#F59E0B",
  },
  {
    initials: "VN",
    name: "Vision Numusiima",
    role: "Managing Partner @ Apex Capital",
    year: "2010",
    loc: "Lagos",
    color: "#8B5CF6",
  },
  {
    initials: "AO",
    name: "Amara Okonkwo",
    role: "Senior SWE @ Stripe",
    year: "2018",
    loc: "Dublin",
    color: "#0D9488",
  },
  {
    initials: "FK",
    name: "Fatima Kaboré",
    role: "UX Lead @ Airbnb",
    year: "2017",
    loc: "Paris",
    color: "#EC4899",
  },
  {
    initials: "NC",
    name: "Nadia Chukwu",
    role: "CTO @ HealthTech Uganda",
    year: "2014",
    loc: "Kampala",
    color: "#7C3AED",
  },
  {
    initials: "RJ",
    name: "Ruth Jeptoo",
    role: "PM @ Microsoft Africa",
    year: "2019",
    loc: "Nairobi",
    color: "#F59E0B",
  },
];

// ── Component helpers ────────────────────────

function eventCard(e) {
  return `
    <div class="card fade-up">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span class="event-badge">${e.cat}</span>
        <span class="attendees"><i class="ti ti-users"></i> ${e.att}</span>
      </div>
      <div class="event-title">${e.title}</div>
      <div class="event-meta">
        <span><i class="ti ti-calendar"></i>${e.date}</span>
        <span><i class="ti ti-map-pin"></i>${e.loc}</span>
      </div>
      <div class="event-footer">
        <span class="attendees"><i class="ti ti-users"></i> ${e.att} attending</span>
<button
class="reg-btn"
onclick="handleEventRegister()">

Register

</button>  
</div>
    </div>`;
}

function memberCard(m) {
  return `
    <div class="member-card fade-up">
      <div class="m-avatar" style="background:${m.color}">${m.initials}</div>
      <div class="m-name">${m.name}</div>
      <div class="m-role">${m.role}</div>
      <div class="m-meta">
        <span><i class="ti ti-school"></i>${m.year}</span>
        <span><i class="ti ti-map-pin"></i>${m.loc}</span>
      </div>
<button
class="connect-btn"
onclick="handleConnect()">

Connect

</button>    </div>`;
}

function gCard(icon, title, desc, page, variant = "") {
  const onclick = page ? `onclick="navigate('${page}')"` : "";
  return `
    <div class="g-card ${variant}" ${onclick}>
      <div class="g-card-icon"><i class="ti ti-${icon}"></i></div>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>`;
}

function handleConnect() {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    navigate("messages");
  } else {
    window.location.href = "login.html";
  }
}

function handleEventRegister() {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    alert("Successfully registered!");
  } else {
    window.location.href = "register.html";
  }
}

// ── Page renderers ───────────────────────────

function renderHome() {
  return `
    <div class="hero fade-up">
      <h1>Connect. Grow. Mentor.</h1>
      <p>Join 12,000+ alumni building the future together</p>
      <div class="hero-btns">
        <button class="btn btn-primary" onclick="navigate('community')">
          <i class="ti ti-search"></i> Find alumni
        </button>
        <button class="btn btn-secondary" onclick="navigate('events')">
          <i class="ti ti-calendar"></i> Browse events
        </button>
      </div>
    </div>

    <div class="stats-grid">
      ${[
        ["ti-users", "12,400+", "Active alumni"],
        ["ti-globe", "85+", "Countries"],
        ["ti-briefcase", "3,200+", "Companies"],
        ["ti-calendar", "150+", "Annual events"],
      ]
        .map(
          ([icon, val, lbl], i) => `
          <div
          class="stat-card"
          onclick="navigate('community')">          
          <div class="stat-icon"><i class="ti ${icon}"></i></div>
          <div class="stat-val">${val}</div>
          <div class="stat-lbl">${lbl}</div>
        </div>`,
        )
        .join("")}
    </div>

    <div class="section-row">
      <h2>Upcoming events</h2>
      <span class="view-all" onclick="navigate('events')">View all <i class="ti ti-arrow-right"></i></span>
    </div>
    <div class="grid-2" style="margin-bottom:28px;">
      ${events.slice(0, 2).map(eventCard).join("")}
    </div>

    <div class="section-row">
      <h2>Featured alumni</h2>
      <span class="view-all" onclick="navigate('community')">Full directory <i class="ti ti-arrow-right"></i></span>
    </div>
    <div class="grid-4">
      ${members.slice(0, 4).map(memberCard).join("")}
    </div>`;
}

function renderCommunity() {
  return `
    <div class="page-header">
      <h1>Community</h1>
      <p>Connect with sisters across cohorts and chapters</p>
    </div>

    <div class="grid-2" style="margin-bottom:28px;">
      ${gCard(
        "school",
        "Cohorts",
        "Browse all Code Queen cohorts",
        "community",
      )}
      ${gCard(
        "message-circle",
        "Community spaces",
        "#wins, #tech-help, #ask-a-sister",
        "messages",
      )}
      ${gCard(
        "friends",
        "Sisterhood Fridays",
        "Weekly alumni gatherings",
        "events",
      )}      
${gCard("link", "Connections", "Meet sisters across cohorts", "profile")}
    </div>

    <div class="section-row"><h2>Members</h2></div>
    <div class="grid-4">
      ${members.map(memberCard).join("")}
    </div>`;
}

function renderEvents() {
  return `
    <div class="page-header">
      <h1>Events</h1>
      <p>Discover networking opportunities and learning sessions</p>
    </div>
    <div class="grid-2">
      ${events.map(eventCard).join("")}
    </div>`;
}

function renderMessages() {
  const msgs = [
    {
      initials: "PW",
      name: "Prossy Wanyana",
      preview:
        "Hey! Would love to connect and chat about your journey at Meta…",
      time: "2m ago",
      color: "#7C3AED",
    },
    {
      initials: "SA",
      name: "Sheba Ayinza",
      preview:
        "Congratulations on your new role! So proud of everything you've done…",
      time: "1h ago",
      color: "#0D9488",
    },
    {
      initials: "SM",
      name: "Sarah Muwanguzi",
      preview: "Can you review my portfolio before the Friday deadline?",
      time: "3h ago",
      color: "#F59E0B",
    },
    {
      initials: "VN",
      name: "Vision Numusiima",
      preview:
        "The Kampala event next week is going to be amazing — are you coming?",
      time: "Yesterday",
      color: "#8B5CF6",
    },
    {
      initials: "NK",
      name: "Nadia Chukwu",
      preview:
        "Shared a new resource in #tech-help — thought you'd find it useful!",
      time: "2d ago",
      color: "#7C3AED",
    },
  ];
  return `
    <div class="page-header">
      <h1>Inbox</h1>
      <p>Your messages and connection requests</p>
    </div>
    <div class="card">
      ${msgs
        .map(
          (m) => `
        <div class="msg-row">
          <div class="msg-av" style="background:${m.color}">${m.initials}</div>
          <div class="msg-body">
            <div class="msg-name">${m.name}</div>
            <div class="msg-preview">${m.preview}</div>
          </div>
          <div class="msg-time">${m.time}</div>
        </div>`,
        )
        .join("")}
    </div>`;
}

function renderMentorship() {
  return `
    <div class="page-header">
      <h1>Mentorship hub</h1>
      <p>Connect with mentors and become one</p>
    </div>
    <div class="grid-2">
      ${gCard(
        "user-search",
        "Find a mentor",
        "Search experienced women in tech",
        "community",
      )}
     ${gCard(
       "heart-handshake",
       "Become a mentor",
       "Support and guide younger sisters",
       "profile",
     )}
      ${gCard(
        "calendar-event",
        "Book sessions",
        "Schedule 1-on-1 guidance calls",
        "events",
      )}
      ${gCard("history", "Mentorship history", "Review your past sessions")}
    </div>`;
}

function renderOpportunities() {
  return `
    <div class="page-header">
      <h1>Opportunities</h1>
      <p>Jobs, internships, scholarships and more</p>
    </div>
    <div class="grid-2">
      ${gCard("briefcase", "Jobs", "Full-time roles", "opportunities")}
      ${gCard("rocket", "Internships", "Launch your career with top companies", "", "teal")}
      ${gCard("award", "Scholarships", "Funding", "resources")}
      ${gCard("world", "Remote work", "Work from anywhere in the world")}
    </div>`;
}

function renderResources() {
  return `
    <div class="page-header">
      <h1>Learning resources</h1>
      <p>Curated content to level up your skills</p>
    </div>
    <div class="grid-2">
      ${gCard("code", "Frontend development", "HTML, CSS, React", "resources")}
      ${gCard("server", "Backend development", "Node.js, Python, databases", "", "teal")}
      ${gCard("palette", "UI/UX design", "Figma, prototyping, user research")}
      ${gCard("file-text", "Interview prep", "Coding challenges and mock interviews", "", "gold")}
      ${gCard("chart-bar", "Data & AI", "Machine learning and data science")}
      ${gCard("device-mobile", "Mobile development", "iOS, Android, React Native")}
      ${gCard("file-text", "Interview prep", "Coding challenges", "growth")}
    </div>`;
}

function renderGrowth() {
  return `
    <div class="page-header">
      <h1>Growth</h1>
      <p>Tools and paths to accelerate your journey</p>
    </div>
    <div class="grid-2">
      ${gCard("heart", "Mentorship", "Find or become a mentor", "mentorship")}
      ${gCard("briefcase", "Opportunities", "Jobs, internships, scholarships", "opportunities", "teal")}
      ${gCard("book", "Resources", "Learning library", "resources")}
      ${gCard("trophy", "Hackathons", "Upcoming competitions", "", "gold")}
      ${gCard("users", "Career support", "CV, portfolio, negotiation")}
      ${gCard("trending-up", "Skills tracker", "Track your progress over time")}
    </div>`;
}

function renderShowcase() {
  const projects = [
    {
      name: "NovaTech App",
      desc: "EdTech platform for African learners",
      author: "Sheba Ayinza",
    },
    {
      name: "HealthHer",
      desc: "Women's health tracker and community",
      author: "Nadia Chukwu",
    },
    {
      name: "DataSister",
      desc: "Open-source data tools for nonprofits",
      author: "Sarah Muwanguzi",
    },
    {
      name: "OpenCodeUG",
      desc: "Free coding resources for Ugandan youth",
      author: "Amara Kiggundu",
    },
    {
      name: "FinanceQueen",
      desc: "Personal finance for women in Africa",
      author: "Vision Numusiima",
    },
    {
      name: "TechMentor CLI",
      desc: "Terminal tool for mentorship matching",
      author: "Prossy Wanyana",
    },
  ];
  return `
    <div class="page-header">
      <h1>Showcase</h1>
      <p>Celebrating what our community is building</p>
    </div>
    <div class="grid-3">
      ${projects
        .map(
          (p) => `
        <div class="g-card fade-up">
          <div class="g-card-icon"><i class="ti ti-layout-grid"></i></div>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <p style="margin-top:10px;font-size:11.5px;color:var(--text-3);">by ${p.author}</p>
        </div>`,
        )
        .join("")}
    </div>`;
}

function renderStories() {
  return `
    <div class="page-header">
      <h1>Stories</h1>
      <p>Inspiration from across the network</p>
    </div>
    <div class="grid-2">
${gCard(
  "sparkles",
  "Alumni showcase",
  "Spotlighting our best",
  "showcase",
)}      ${gCard("star", "Success stories", "How sisters made it in tech", "", "gold")}
      ${gCard("crown", "Featured queens", "This month's community highlights")}
${gCard(
  "message-quote",
  "Testimonials",
  "Community feedback",
  "stories",
)}    </div>`;
}

function renderProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const username = user?.name || "Guest";

  const email = user?.email || "No email";

  return `

<div class="profile-header fade-up">

<div class="profile-av">

${username.charAt(0)}

</div>

<div>

<div class="profile-name">

${username}

</div>

<div class="profile-role">

Member · Her Connect

</div>

<div class="profile-meta">

<span>

<i class="ti ti-mail"></i>

${email}

</span>

<span>

<i class="ti ti-school"></i>

Her Connect User

</span>

</div>

</div>

</div>


<div class="grid-2">

${gCard("edit", "Edit profile", "Update your bio and profile photo")}

${gCard(
  "bell",
  "Notifications",
  "Manage alerts and preferences",
  "settings",
  "teal",
)}

${gCard("calendar", "Saved events", "Your bookmarked events", "events")}

${gCard("history", "Session history", "Past mentorship sessions", "mentorship")}

</div>

`;
}
function renderSettings() {
  return `
    <div class="page-header">
      <h1>Settings</h1>
      <p>Manage your account and preferences</p>
    </div>
    <div class="grid-2">
      ${gCard("user", "Edit profile", "Update your information", "profile")}
      ${gCard("bell", "Notifications", "Email and push preferences", "", "teal")}
      ${gCard("lock", "Privacy", "Control who sees your profile")}
      ${gCard("shield", "Security", "Password and two-factor auth", "", "gold")}
      ${gCard("plug", "Integrations", "Connect external tools")}
      ${gCard('logout','Log out','Sign out','logout')}   </div>`;
}

// ── Page map ─────────────────────────────────

const pageRenderers = {
  home: renderHome,
  community: renderCommunity,
  events: renderEvents,
  messages: renderMessages,
  mentorship: renderMentorship,
  opportunities: renderOpportunities,
  resources: renderResources,
  growth: renderGrowth,
  showcase: renderShowcase,
  stories: renderStories,
  profile: renderProfile,
  settings: renderSettings,
};

// ── Navigation ───────────────────────────────

function navigate(page) {

  // Logout handling
  if(page === "logout") {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";

    return;
  }

  // Stop if page doesn't exist
  if (!pageRenderers[page]) return;

  // Update content
  const content = document.getElementById("content");

  content.innerHTML = pageRenderers[page]();

  // Update page title
  document.getElementById("pageTitle").textContent =
    PAGES[page] || page;

  // Update sidebar active state
  document.querySelectorAll(".sb-item").forEach((el) => {

    el.classList.toggle(
      "active",
      el.dataset.page === page
    );

  });

  // Close mobile sidebar
  closeMobileMenu();

  // Scroll to top
  document.getElementById("main").scrollTo(0, 0);
}
// ── Mobile sidebar ───────────────────────────

function openMobileMenu() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

document.getElementById("menuToggle").addEventListener("click", openMobileMenu);
document.getElementById("overlay").addEventListener("click", closeMobileMenu);

// ── Sidebar nav click wiring ─────────────────

document.querySelectorAll(".sb-item[data-page]").forEach((el) => {
  el.addEventListener("click", () => navigate(el.dataset.page));
});

// ── Init ─────────────────────────────────────

navigate("home");
