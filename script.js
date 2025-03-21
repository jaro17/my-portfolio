// Select the button
const scrollBtn = document.getElementById('scrollBottomBtn');

// Show the button when user scrolls to the bottom
window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// On click, scroll to top smoothly
scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});