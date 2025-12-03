// Contact Form with Email.js Integration
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Disable button during submission
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';

            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                // Email.js configuration
                // Replace these with your actual Email.js credentials
                const SERVICE_ID = 'YOUR_SERVICE_ID';
                const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
                const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

                // Uncomment when Email.js is configured:
                // await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

                // Temporary simulation (remove when Email.js is set up)
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                contactForm.reset();
                showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');

            } catch (error) {
                console.error('Error:', error);
                showMessage('Oops! Something went wrong. Please try again or email me directly.', 'error');
            } finally {
                // Re-enable button
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
            }
        });
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `message ${type}`;
        formMessage.classList.remove('hidden');

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});
