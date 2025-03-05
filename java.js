// Initialize EmailJS with your user ID
(function(){
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send email. Please try again later.');
            console.log('FAILED...', error);
        });
});
