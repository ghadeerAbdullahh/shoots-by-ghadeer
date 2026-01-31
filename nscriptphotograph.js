document.addEventListener("DOMContentLoaded", () => {
    console.log("JS connected");
    initNavToggle();
    initRevealOnScroll();
    initBookingPopup();
    initBookingForm(); 
});


/* 1) Menu toggle */
function initNavToggle() {
    const btn = document.getElementById("navToggle");
    const nav = document.getElementById("navLinks");

    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

/* 2) Reveal animation */
function initRevealOnScroll() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.2 });

    revealEls.forEach((el) => observer.observe(el));
}

/* 3) Booking form (لاحقاً) */
function initBookingForm() {
    const form = document.querySelector("#bookingForm");
    if (!form) return;

    // لاحقاً نحط fetch
}
// 4) Booking popup (open/close)
function initBookingPopup() {
    const openBtn = document.getElementById("openBookingBtn");
    const popup = document.getElementById("bookingPopup");
    const closeBtn = document.getElementById("closeBookingBtn");

    if (!openBtn || !popup || !closeBtn) {
        console.log("booking popup elements not found");
        return;
    }

    openBtn.addEventListener("click", () => {
        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("is-open");
        popup.setAttribute("aria-hidden", "true");
    });

    // سكّر لما تضغطي برا المحتوى
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("is-open");
            popup.setAttribute("aria-hidden", "true");
        }
    });

    // سكّر بزر ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            popup.classList.remove("is-open");
            popup.setAttribute("aria-hidden", "true");
        }
    });
}
