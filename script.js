// // Initialize intersection observer for animations
// document.addEventListener('DOMContentLoaded', () => {
//   const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left');

//   // Adjust observer options for mobile responsiveness
//   const observerOptions = {
//     threshold: window.innerWidth < 768 ? 0.1 : 0.2,  // Lower threshold for smaller screens
//     rootMargin: window.innerWidth < 768 ? '30px' : '50px'  // Smaller root margin for mobile
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       // Add animation class only when element comes into view
//       if (entry.isIntersecting) {
//         entry.target.classList.add('start-animation');
//         // Optionally unobserve after animation is triggered
//         observer.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   // Observe all animated elements
//   animatedElements.forEach(element => {
//     observer.observe(element);
//   });
// }); 



document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left');
  
    const observerOptions = {
      threshold: window.innerWidth < 768 ? 0.1 : 0.2,
      rootMargin: window.innerWidth < 768 ? '20px' : '50px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start-animation');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  });
  