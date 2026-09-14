(() => {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const setNavState = () => {
    if (!nav) return;
    nav.classList.toggle("on", window.scrollY > 24);
  };
  setNavState();
  window.addEventListener("scroll", setNavState, { passive: true });

  document.querySelectorAll(".nav-links a[href]").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (!href) return;
    const isHome = href === "index.html" || href === "./" || href === "/";
    if ((isHome && (path === "index.html" || path === "")) || href === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const closeMenu = () => {
    navLinks?.classList.remove("open");
    burger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const open = !navLinks.classList.contains("open");
      navLinks.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  const dash = document.querySelector(".dash-mock");
  if (dash) {
    if ("IntersectionObserver" in window) {
      const dio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              dash.classList.add("in-view");
              dio.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      dio.observe(dash);
    } else {
      dash.classList.add("in-view");
    }
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      document.querySelectorAll(".faq-item[open]").forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  const nlForm = document.getElementById("nlForm");
  if (nlForm) {
    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = nlForm.querySelector("button");
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = "Subscribed";
      nlForm.reset();
      setTimeout(() => {
        btn.textContent = original;
      }, 2200);
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = "Sending…";
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.textContent = "Message sent";
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 2200);
      }, 700);
    });
  }
})();
