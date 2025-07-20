
      document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_fztd45e', 'template_6bms0cv', this)
          .then(function() {
            alert('✅ Message sent successfully!');
            document.getElementById('contact-form').reset();
          }, function(error) {
            alert('❌ Failed to send message. Try again.');
            console.log('FAILED...', error);
          });
      });

      // Other JavaScript functionality can go here
      document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        
        menuIcon.addEventListener('click', function() {
          navbar.classList.toggle('active');
        });

    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      });
  