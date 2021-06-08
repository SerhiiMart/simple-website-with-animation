const slider = gsap.timeline({ defaults: { ease: "power1.out" } });

slider.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
slider.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
slider.to(".intro", { y: "-100%", duration: 1 }, "-=1");
slider.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
slider.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");