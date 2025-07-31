import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Set initial visibility for all elements
  gsap.set('.scroll-trigger-element', { opacity: 1, y: 0 });
  gsap.set('.product-card', { opacity: 1, y: 0 });
  
  // Animate scroll-trigger elements
  gsap.utils.toArray('.scroll-trigger-element').forEach((element, index) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Stagger animation for product grids
  gsap.utils.toArray('section').forEach((section) => {
    const cards = section.querySelectorAll('.product-card');
    if (cards.length > 0) {
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  });
};

export const initHoverAnimations = () => {
  // Product card hover animations
  gsap.utils.toArray('.product-card').forEach((card) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(card, {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      duration: 0.3,
      ease: "power2.out"
    });

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());
  });
};

export const initPageAnimations = () => {
  initScrollAnimations();
  initHoverAnimations();
};