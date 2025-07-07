const form = document.getElementById('reservationForm');
const message = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (name && phone) {
    message.textContent = `Thank you, ${name}! Your table has been reserved. We’ll contact you at ${phone}.`;

    // WhatsApp integration
    const whatsappNumber = '919876543210'; // Use international format without +
    const whatsappMessage = `Hello, this is ${name}. I'd like to reserve a table. My contact is ${phone}.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
    form.reset();
  }
});

// Scroll animation
const animatedItems = document.querySelectorAll('.scroll-animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scrolled');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedItems.forEach(item => observer.observe(item));
