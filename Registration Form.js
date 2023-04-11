

    <script>
      // JavaScript code to display a confirmation message after form submission
      const form = document.getElementById('registration-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent form submission
        const fullName = document.getElementById('full_name').value;
        const email = document.getElementById('email').value;
        const phoneNum = document.getElementById('phone_number').value;
        const designLevel = document.getElementById('design_level').value;

        // Send form data to the specified email address
        const formData = new FormData();
        formData.append('full_name', fullName);
        formData.append('email', email);
        formData.append('phone_number', phoneNum);
        formData.append('design_level', designLevel);
        formData.append('_subject', 'New Registration Form Submission');
        formData.append('_template', 'box');

        fetch('https://formsubmit.co/theotechworld1@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Thank you for registering!');
          form.reset();
        })
        .catch(error => {
          console.error('There was a problem with the form submission:', error);
        });
      });
    </script>
  </body>
</html>
