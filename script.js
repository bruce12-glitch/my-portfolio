(() => {
  const canvas = document.querySelector('.ambient-canvas');
  const ctx = canvas?.getContext('2d');
  const glow = document.querySelector('.cursor-glow');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // A quiet field of connected points gives the page its ambient, technical depth.
  if (canvas && ctx && !reduceMotion) {
    let width = 0;
    let height = 0;
    let dpr = 1;
    let points = [];
    const pointer = { x: -1000, y: -1000 };

    const createPoints = () => {
      const count = Math.min(74, Math.max(34, Math.floor((width * height) / 19000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.13,
        vy: (Math.random() - 0.5) * 0.13,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      const elapsed = time * 0.00025;

      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        point.phase += 0.005;
        if (point.x < -20 || point.x > width + 20) point.vx *= -1;
        if (point.y < -20 || point.y > height + 20) point.vy *= -1;

        const pulse = 0.45 + Math.sin(point.phase + elapsed) * 0.2;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1 + point.z * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = point.z > 0.72 ? `rgba(255, 92, 53, ${pulse})` : `rgba(113, 231, 223, ${pulse * 0.36})`;
        ctx.fill();
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 135) {
            const alpha = (1 - distance / 135) * 0.13;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(125, 103, 255, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      if (pointer.x > -500) {
        const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 110);
        halo.addColorStop(0, 'rgba(255, 92, 53, .09)');
        halo.addColorStop(1, 'rgba(255, 92, 53, 0)');
        ctx.fillStyle = halo;
        ctx.fillRect(pointer.x - 110, pointer.y - 110, 220, 220);
      }
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    }, { passive: true });
    resize();
    requestAnimationFrame(draw);
  }

  // Reveal content as it enters the viewport rather than loading the whole page at once.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('revealed'));
  }

  // Lightweight 3D tilt on the hero object and project previews.
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        const base = element.classList.contains('orbital-system') ? 'translate(-47%, -50%) rotateX(12deg) rotateZ(-12deg)' : '';
        element.style.transform = `${base} perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg)`;
      });
      element.addEventListener('pointerleave', () => {
        if (element.classList.contains('orbital-system')) {
          element.style.transform = 'translate(-47%, -50%) rotateX(12deg) rotateZ(-12deg)';
        } else {
          element.style.transform = '';
        }
      });
    });
  }

  // Project filter buttons.
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.querySelector('.empty-state');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      let visible = 0;
      projectCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.classList.toggle('is-hidden', !matches);
        if (matches) visible += 1;
      });
      if (emptyState) emptyState.style.display = visible ? 'none' : 'block';
    });
  });

  // Mobile navigation.
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('open');
    document.body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  // Keep the small numbered nav in sync with the section in view.
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => navObserver.observe(section));
  }

  // Keep a slim progress signal pinned to the top of the viewport.
  const progressBar = document.querySelector('.scroll-progress span');
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  // Case notes keep each project useful without sending the visitor away from the portfolio.
  const projectDetails = {
    vendorchain: {
      kicker: 'CASE NOTES / 01', title: 'VendorChain', summary: 'A trust layer for vendor partnerships — making compliance visible, verifiable, and easier to operate.',
      brief: 'Supply chains are only as strong as their least visible handoff. The brief was to create a shared source of truth for vendors, documents, and approval steps.',
      build: 'A Hyperledger Fabric network with signed records, smart-contract rules, SBOM management, and Dockerized services for repeatable deployment.',
      takeaway: 'Trust is not a badge at the end of a workflow. It is a product decision at every handoff.',
      tech: ['Hyperledger Fabric', 'Chaincode', 'REST APIs', 'Docker'], github: 'https://github.com/Inbasekaran12/VENDOR-CHAIN---UROP',
    },
    meditrack: {
      kicker: 'CASE NOTES / 02', title: 'MediTrack', summary: 'A calmer healthcare companion that turns medicine management into a clear daily rhythm.',
      brief: 'People should not need to remember every dose, expiry date, and refill while they are already managing their health.',
      build: 'A Spring Boot application with secure authentication, reminder logic, expiry alerts, multi-user support, and a dashboard shaped around the next useful action.',
      takeaway: 'In healthcare, clarity is not decoration — it is part of the safety system.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'], github: 'https://github.com/Inbasekaran12/MEDITRACK',
    },
    trainconsist: {
      kicker: 'CASE NOTES / 03', title: 'Train Consist', summary: 'An operations tool for composing, scheduling, and maintaining complex train formations.',
      brief: 'Railway data has a lot of moving pieces. The challenge was to make a dense operational workflow easier to understand and update.',
      build: 'An object-oriented Java application with route planning, coach configuration, maintenance tracking, JDBC persistence, and reporting flows.',
      takeaway: 'A good system does not hide complexity. It gives complexity a clear shape.',
      tech: ['Java', 'OOP design', 'MySQL', 'JDBC'], github: 'https://github.com/Inbasekaran12/TrainConsistManagementApp',
    },
    hotelbooking: {
      kicker: 'CASE NOTES / 04', title: 'Hotel Booking', summary: 'A full-stack reservation flow designed to make finding the right stay feel straightforward.',
      brief: 'Availability, guest details, payments, and admin controls should work as one connected journey — not four disconnected screens.',
      build: 'A Spring Boot platform with room availability, booking orchestration, payment integration, guest management, and an administration layer.',
      takeaway: 'The best booking experience is the one that lets the decision feel easy.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Payments'], github: 'https://github.com/Inbasekaran12/Hotel_Booking_App',
    },
    quantity: {
      kicker: 'CASE NOTES / 05', title: 'Quantity Measure', summary: 'A precision-first conversion tool that treats units as a system, not a collection of shortcuts.',
      brief: 'Conversion rules become hard to trust when every new unit creates another special case. The foundation needed to stay extensible.',
      build: 'A Java domain model with explicit quantity types, conversion rules, comparison behavior, design patterns, and comprehensive JUnit coverage.',
      takeaway: 'Small utilities deserve the same care as large platforms. Precision compounds.',
      tech: ['Java', 'JUnit', 'Domain modeling', 'Design patterns'], github: 'https://github.com/Inbasekaran12/Quantity_Measurement_App',
    },
    palindrome: {
      kicker: 'CASE NOTES / 06', title: 'Palindrome Checker', summary: 'A focused algorithm exercise about symmetry, edge cases, and the pleasure of a small thing done well.',
      brief: 'The problem is simple: determine whether a string reads the same in both directions without losing sight of real-world input.',
      build: 'Multiple algorithm implementations with normalization, edge-case handling, performance comparisons, and a test suite that makes the behavior explicit.',
      takeaway: 'Elegant solutions are often the ones that make the boundaries visible.',
      tech: ['Java', 'Algorithms', 'Complexity', 'Testing'], github: 'https://github.com/Inbasekaran12/PalindromeCheckerApp',
    },
  };
  const caseModal = document.querySelector('.case-modal');
  const caseTitle = document.querySelector('#case-title');
  const caseKicker = document.querySelector('#case-kicker');
  const caseSummary = document.querySelector('#case-summary');
  const caseBrief = document.querySelector('#case-brief');
  const caseBuild = document.querySelector('#case-build');
  const caseTakeaway = document.querySelector('#case-takeaway');
  const caseTech = document.querySelector('#case-tech');
  const caseGithub = document.querySelector('#case-github');
  let lastFocusedElement = null;

  const closeCaseModal = () => {
    if (!caseModal) return;
    caseModal.hidden = true;
    caseModal.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    lastFocusedElement?.focus();
  };
  const openCaseModal = (key, trigger) => {
    const project = projectDetails[key];
    if (!caseModal || !project) return;
    lastFocusedElement = trigger;
    caseKicker.textContent = project.kicker;
    caseTitle.textContent = project.title;
    caseSummary.textContent = project.summary;
    caseBrief.textContent = project.brief;
    caseBuild.textContent = project.build;
    caseTakeaway.textContent = project.takeaway;
    caseGithub.href = project.github;
    caseTech.innerHTML = project.tech.map((item) => `<span>${item}</span>`).join('');
    caseModal.hidden = false;
    caseModal.classList.add('is-open');
    document.body.classList.add('menu-open');
    caseModal.querySelector('.modal-close')?.focus();
  };
  document.querySelectorAll('.case-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => openCaseModal(trigger.dataset.project, trigger));
  });
  caseModal?.querySelectorAll('[data-modal-close]').forEach((button) => button.addEventListener('click', closeCaseModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && caseModal && !caseModal.hidden) closeCaseModal();
  });

  // A tiny useful interaction in the contact panel.
  const copyButton = document.querySelector('.copy-email');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.innerHTML = 'Copied to clipboard <span>✓</span>';
    } catch {
      copyButton.innerHTML = 'Email selected <span>✓</span>';
    }
    window.setTimeout(() => {
      copyButton.innerHTML = 'Copy email <span>＋</span>';
    }, 2400);
  });
})();
