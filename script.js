// Subscribe button functionality
const subscribeButton = document.getElementById('subscribe-button');

subscribeButton.addEventListener('click', () => {
  alert('Thank you for subscribing!');
});

// Custom Order Form functionality
const customOrderForm = document.getElementById('custom-order-form');

customOrderForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const productName = document.getElementById('product-name').value;
  const quantity = document.getElementById('quantity').value;
  const customDetails = document.getElementById('custom-details').value;

  if (productName && quantity && customDetails) {
    alert(`Custom order received! \nProduct: ${productName}\nQuantity: ${quantity}\nDetails: ${customDetails}`);
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

// Contact Form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  if (name && email && message) {
    alert(`Thank you for reaching out, ${name}! We will respond to your inquiry shortly.`);
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
