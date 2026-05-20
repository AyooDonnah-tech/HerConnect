// App State
const state = {
  currentPage: "home",
  currentTab: "upcoming",
  mobileMenuOpen: false,
};

// Data
const stats = [
  { icon: "users", value: "12,400+", label: "Active Alumni" },
  { icon: "globe", value: "85+", label: "Countries" },
  { icon: "briefcase", value: "3,200+", label: "Companies" },
  { icon: "calendar", value: "150+", label: "Annual Events" },
];

const events = [
  {
    title: "Tech Innovation Summit",
    date: "Jan 28, 2025",
    location: "Virtual",
    category: "Technology",
    attendees: 342,
  },
  {
    title: "Leadership Masterclass",
    date: "Feb 5, 2025",
    location: "New York",
    category: "Professional",
    attendees: 89,
  },
  {
    title: "Alumni Gala Dinner",
    date: "Feb 14, 2025",
    location: "London",
    category: "Social",
    attendees: 210,
  },
  {
    title: "Startup Pitch Night",
    date: "Mar 1, 2025",
    location: "San Francisco",
    category: "Entrepreneurship",
    attendees: 156,
  },
];

const members = [
  {
    name: "Sarah Chen",
    role: "VP Engineering @ Meta",
    year: "2015",
    location: "San Francisco",
  },
  {
    name: "Marcus Johnson",
    role: "Founder @ NovaTech",
    year: "2012",
    location: "Austin",
  },
  {
    name: "Priya Sharma",
    role: "Director of AI @ Google",
    year: "2016",
    location: "London",
  },
  {
    name: "David Okonkwo",
    role: "Managing Partner @ Apex Capital",
    year: "2010",
    location: "Lagos",
  },
];

const navItems = [
  { id: "home", icon: "home", label: "Home" },
  { id: "directory", icon: "users", label: "Directory" },
  { id: "events", icon: "calendar", label: "Events" },
  { id: "mentorship", icon: "heart-handshake", label: "Mentorship" },
  { id: "jobs", icon: "briefcase", label: "Job Board" },
];

// Render functions
function renderNav() {
  return `
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-teal flex items-center justify-center">
              <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
            </div>
            <span class="font-heading font-bold text-xl text-gray-900" id="nav-title">Her Connect</span>
          </div>
          <div class="hidden md:flex items-center gap-1">
            ${navItems
              .map(
                (item) => `
              <button onclick="navigate('${item.id}')" class="px-4 py-2 rounded-lg text-sm font-medium transition-all ${state.currentPage === item.id ? "bg-brand/10 text-brand" : "text-gray-600 hover:bg-gray-100"}">
                ${item.label}
              </button>
            `,
              )
              .join("")}
          </div>
          <div class="flex items-center gap-3">
            <button class="relative p-2 rounded-lg hover:bg-gray-100 transition">
              <i data-lucide="bell" class="w-5 h-5 text-gray-600"></i>
              <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-teal flex items-center justify-center text-white text-sm font-bold">A</div>
            <button onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <i data-lucide="menu" class="w-5 h-5 text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
      ${
        state.mobileMenuOpen
          ? `
        <div class="mobile-menu anim-fade-in">
          ${navItems
            .map(
              (item) => `
            <button onclick="navigate('${item.id}')" class="text-left sidebar-link ${state.currentPage === item.id ? "active" : ""}">
              <i data-lucide="${item.icon}" class="w-5 h-5"></i>
              <span>${item.label}</span>
            </button>
          `,
            )
            .join("")}
        </div>
      `
          : ""
      }
    </nav>`;
}

function renderHero() {
  return `
    <section class="hero-pattern bg-surface py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 anim-fade-up" id="hero-heading">
            <span class="gradient-text">Connect. Grow. Mentor.</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-gray-600 anim-fade-up delay-2" id="hero-subheading">
            Join 12,000+ alumni building the future together
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center anim-fade-up delay-3">
           <button class="hero-btn"onclick="navigate('directory')">
              <span class="flex items-center justify-center gap-2"><i data-lucide="search" class="w-5 h-5"></i> Find Alumni</span>
            </button>
            <button class="hero-btn-secondary"onclick="navigate('events')">
              <span class="flex items-center justify-center gap-2"><i data-lucide="calendar" class="w-5 h-5"></i> Browse Events</span>
            </button>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          ${stats
            .map(
              (s, i) => `
<div class="card-hover bg-white rounded-2xl p-6 border border-gray-100 anim-fade-up delay-${i + 1}"
onclick="navigate('directory')"
style="cursor:pointer;">              <div class="w-12 h-12 mx-auto rounded-xl bg-brand/10 flex items-center justify-center mb-3">
                <i data-lucide="${s.icon}" class="w-6 h-6 text-brand"></i>
              </div>
              <div class="stat-number font-heading font-bold text-2xl text-gray-900">${s.value}</div>
              <div class="text-sm text-gray-500 mt-1">${s.label}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderEvents() {
  return `
    <section class="py-16 bg-white" events-card-hover>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p class="text-gray-500 mt-1">Don't miss out on these opportunities</p>
          </div>
          <button onclick="navigate('events')" class="mt-4 sm:mt-0 text-brand font-semibold text-sm hover:underline flex items-center gap-1">
            View All <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          ${events
            .map(
              (e, i) => `
<div class="card-hover bg-white rounded-2xl p-6 border border-gray-100 anim-fade-up delay-${i + 1}"
onclick="navigate('directory')"
style="cursor:pointer;">              <div class="flex justify-between items-start">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand">${e.category}</span>
                <span class="text-xs text-gray-400 flex items-center gap-1"><i data-lucide="users" class="w-3.5 h-3.5"></i> ${e.attendees}</span>
              </div>
              <h3 class="font-heading font-semibold text-lg text-gray-900 mt-3">${e.title}</h3>
              <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i> ${e.date}</span>
                <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-4 h-4"></i> ${e.location}</span>
              </div>
              <button class="mt-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:border-brand hover:text-brand transition-all">
                Register Now
              </button>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderMembers() {
  return `
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-gray-900">Featured Alumni</h2>
            <p class="text-gray-500 mt-1">Inspiring leaders from our community</p>
          </div>
          <button onclick="navigate('directory')" class="mt-4 sm:mt-0 text-brand font-semibold text-sm hover:underline flex items-center gap-1">
            Full Directory <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${members
            .map((m, i) => {
              const colors = [
                "from-brand to-teal",
                "from-teal to-gold",
                "from-gold to-brand-light",
                "from-brand-light to-teal",
              ];
              return `
<div class="card-hover bg-white rounded-2xl p-6 border border-gray-100 anim-fade-up delay-${i + 1}"
onclick="navigate('directory')"
style="cursor:pointer;">              <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${colors[i]} flex items-center justify-center text-white text-xl font-bold mb-4">
                ${m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 class="font-heading font-semibold text-gray-900">${m.name}</h3>
              <p class="text-sm text-gray-500 mt-1">${m.role}</p>
              <div class="flex items-center justify-center gap-3 mt-3 text-xs text-gray-400">
                <span class="flex items-center gap-1"><i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i> ${m.year}</span>
                <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${m.location}</span>
              </div>
  <button class="connect-btn">Connect</button>
            </div>`;
            })
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-brand to-teal flex items-center justify-center">
              <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
            </div>
            <span class="font-heading font-bold text-white">Her Connect Network</span>
          </div>
          <div class="flex gap-6 text-sm">
            <a href="#" class="hover:text-white transition">About</a>
            <a href="#" class="hover:text-white transition">Privacy</a>
            <a href="#" class="hover:text-white transition">Terms</a>
            <a href="#" class="hover:text-white transition">Contact</a>
          </div>
          <p class="text-xs">&copy; 2025 Her Connect Network</p>
        </div>
      </div>
    </footer>`;
}

function renderHomePage() {
  return renderHero() + renderEvents() + renderMembers();
}

function renderDirectoryPage() {
  return `
    <section class="py-12 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl font-bold text-gray-900 mb-2">Alumni Directory</h2>
        <p class="text-gray-500 mb-8">Search and connect with fellow alumni</p>
        <div class="flex gap-3 mb-8">
          <div class="flex-1 relative">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
            <input type="text" placeholder="Search by name, company, or role..." class="pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition">
          </div>
          <button class="px-5 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 text-gray-600">
            <i data-lucide="filter" class="w-5 h-5"></i> Filters
          </button>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${members
            .concat(members)
            .map((m, i) => {
              const colors = [
                "from-brand to-teal",
                "from-teal to-gold",
                "from-gold to-brand-light",
                "from-brand-light to-teal",
              ];
              return `
<div class="card-hover bg-white rounded-2xl p-6 border border-gray-100 anim-fade-up delay-${i + 1}"
onclick="navigate('directory')"
style="cursor:pointer;">              <div class="w-14 h-14 rounded-full bg-gradient-to-br ${colors[i % 4]} flex items-center justify-center text-white font-bold shrink-0">
                ${m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div class="min-w-0">
                <h3 class="font-heading font-semibold text-gray-900 truncate">${m.name}</h3>
                <p class="text-sm text-gray-500 truncate">${m.role}</p>
                <p class="text-xs text-gray-400 mt-0.5">${m.location} · Class of ${m.year}</p>
              </div>
            </div>`;
            })
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderEventsPage() {
  return `
    <section class="py-12 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl font-bold text-gray-900 mb-2">Events</h2>
        <p class="text-gray-500 mb-8">Discover networking opportunities and learning sessions</p>
        <div class="grid md:grid-cols-2 gap-5">
          ${events
            .concat(events)
            .map(
              (e, i) => `
<div class="card-hover bg-white rounded-2xl p-6 border border-gray-100 anim-fade-up delay-${i + 1}"
onclick="navigate('directory')"
style="cursor:pointer;">              <div class="flex justify-between items-start">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand">${e.category}</span>
                <span class="text-xs text-gray-400 flex items-center gap-1"><i data-lucide="users" class="w-3.5 h-3.5"></i> ${e.attendees}</span>
              </div>
              <h3 class="font-heading font-semibold text-lg text-gray-900 mt-3">${e.title}</h3>
              <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i> ${e.date}</span>
                <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-4 h-4"></i> ${e.location}</span>
              </div>
              <button class="mt-4 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition">Register Now</button>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderGenericPage(title, description) {
  return `
    <section class="py-12 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div class="w-20 h-20 mx-auto rounded-2xl bg-brand/10 flex items-center justify-center mb-6 anim-float">
          <i data-lucide="construction" class="w-10 h-10 text-brand"></i>
        </div>
        <h2 class="font-heading text-3xl font-bold text-gray-900 mb-3">${title}</h2>
        <p class="text-gray-500 max-w-md mx-auto">${description}</p>
        <button onclick="navigate('home')" class="mt-8 px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition">
          Back to Home
        </button>
      </div>
    </section>`;
}

// Main render
function render() {
  let pageContent = "";
  switch (state.currentPage) {
    case "home":
      pageContent = renderHomePage();
      break;
    case "directory":
      pageContent = renderDirectoryPage();
      break;
    case "events":
      pageContent = renderEventsPage();
      break;
    case "mentorship":
      pageContent = renderGenericPage(
        "Mentorship Program",
        "Connect with experienced mentors who can guide your career journey. Coming soon!",
      );
      break;
    case "jobs":
      pageContent = renderGenericPage(
        "Job Board",
        "Exclusive career opportunities from alumni-led companies. Coming soon!",
      );
      break;
    default:
      pageContent = renderHomePage();
  }

  document.getElementById("app").innerHTML =
    renderNav() + `<main>${pageContent}</main>` + renderFooter();
  lucide.createIcons();
}

// Navigation
function navigate(page) {
  state.currentPage = page;
  state.mobileMenuOpen = false;
  render();
  document.querySelector(".app-root").scrollTo(0, 0);
}

function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  render();
}

// Initial render
render();
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    let text = counter.innerText;

    let number = parseInt(text.replace(/[^0-9]/g, ""));

    if (!number) return;

    let count = 0;

    let speed = number / 80;

    const interval = setInterval(() => {
      count += speed;

      if (count >= number) {
        counter.innerText = text;

        clearInterval(interval);
      } else {
        counter.innerText = Math.floor(count) + "+";
      }
    }, 20);
  });
}

setTimeout(animateCounters, 500);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;

        entry.target.style.transform = "translateY(0)";
      }
    });
  },

  {
    threshold: 0.1,
  },
);

function observeCards() {
  document
    .querySelectorAll(".card-hover")

    .forEach((card) => {
      card.style.opacity = 0;

      card.style.transform = "translateY(40px)";

      card.style.transition = "0.6s";

      observer.observe(card);
    });
}

(observeCards, 300);
setTimeout;

document.addEventListener(
  "mousemove",

  (e) => {
    let glow = document.getElementById("glow");

    if (!glow) {
      glow = document.createElement("div");

      glow.id = "glow";

      document.body.appendChild(glow);

      glow.style.position = "fixed";

      glow.style.width = "250px";

      glow.style.height = "250px";

      glow.style.background = "rgba(106,13,173,.12)";

      glow.style.borderRadius = "50%";

      glow.style.filter = "blur(70px)";

      glow.style.pointerEvents = "none";

      glow.style.zIndex = "-1";
    }

    glow.style.left = e.clientX - 120 + "px";

    glow.style.top = e.clientY - 120 + "px";
  },
);
