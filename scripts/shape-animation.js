// CSS --scroll variable 
// window.addEventListener('scroll', () => {
//     const scrollProgress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
//     document.body.style.setProperty('--scroll', scrollProgress);
//   }, false);


// Get the elements to animate
// const svgContainer = document.querySelector('.fade-on-scroll');
// const svgs = svgContainer.querySelectorAll('svg');

// You can apply the transforms directly to individual SVGs:
// const svg1 = document.querySelector('.fade-on-scroll .svg-1');
// svg1.style.transform = 'translateY(calc(var(--scroll) * 15px))';


// // Function to determine if an element is in view
// function isInView(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to update opacity based on scroll position
// function updateOpacity() {
//   svgs.forEach(svg => {
//     const opacity = isInView(svg) ? 1 : 0;
//     svg.style.opacity = opacity;
//     if (svg.classList.contains('svg-1')) {
//         svg.style.transform = "translateY(-40px)"; 
//     }
//   });
// }

// // Add event listener to window scroll
// window.addEventListener('scroll', updateOpacity);

// // Run updateOpacity on initial load
// updateOpacity();