document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinksContainer.classList.contains('nav-active')) {
                    navLinksContainer.classList.remove('nav-active');
                }
            }
        });
    });

    // 2. Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileBtn && navLinksContainer) {
        mobileBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
        });
    }

    // 3. Scroll Animations using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Dynamic Background Parallax (Mouse Move)
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');

    if (glow1 && glow2) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Subtle movement opposite to mouse
            glow1.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
            glow2.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        });
    }
    
    // 5. Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.9)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.7)';
            header.style.boxShadow = 'none';
        }
    });
});
