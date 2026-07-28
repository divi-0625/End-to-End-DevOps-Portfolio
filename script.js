const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    const href = link.getAttribute('href');
                    if (href === `#${entry.target.id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    },
    { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));

const revealTargets = document.querySelectorAll(
    'main > section, .hero-content, .section-heading, .about-content, .skill-card, .project-card, .timeline-item, .contact-card, .contact-form, .contact-text'
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealTargets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.transitionDelay = `${Math.min(index * 70, 220)}ms`;
    revealObserver.observe(target);
});
