(function() {
    let form = document.querySelector('#register-form');
    let nameInput = document.querySelector('#lname');
    let emailInput = document.querySelector('#mail');
    let messageInput = document.querySelector('#subject');
    
    function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper
      
      // Remove an existing error
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
      
      // Now add the error, if the message is not empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }

    function validateLastname() {
        let value = nameInput.value;
        
        if (!value) {
          showErrorMessage(nameInput, 'Lastname is required.');
          return false;
        }
        
        showErrorMessage(nameInput, null);
        return true;
    }
    
    function validateEmail() {
      let value = emailInput.value;
      
      if (!value) {
        showErrorMessage(emailInput, 'E-mail is a required field.');
        return false;
      }
      
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
        return false;
      }
      
      showErrorMessage(emailInput, null);
      return true;
    }
    
    function validateMessage() {
      let value = messageInput.value;
      
      if (!value) {
        showErrorMessage(messageInput, 'A message is required.');
        return false;
      }

      if (value.length == 0) {
        showErrorMessage(messageInput, 'A message is required.');
        return false;
      }
      
      showErrorMessage(messageInput, null);
      return true;
    }
    
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidMessage = validateMessage();
      let isValidLastname = validateLastname();
      return isValidEmail && isValidMessage && isValidLastname;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });
    
    nameInput.addEventListener('input', validateLastname);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
})();