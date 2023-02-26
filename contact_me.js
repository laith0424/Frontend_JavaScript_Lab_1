// Get the form element
const contactForm = document.getElementById("contactForm");

// Add an event listener to the form submission
contactForm.addEventListener("submit", validateForm);

// Define the validateForm function
function validateForm(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if the first name and last name are not empty and only contain letters
  if (firstName === "" || !/^[A-Za-z]+$/.test(firstName)) {
    alert("Please enter a valid first name.");
    return;
  }
  if (lastName === "" || !/^[A-Za-z]+$/.test(lastName)) {
    alert("Please enter a valid last name.");
    return;
  }

  // Check if the email is not empty and has the correct format
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check if the phone number (if entered) only contains digits
  if (phone !== "" && !/^\d+$/.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

    // Extra task: Show number of words left next to the message text box while the user is writing the message and limit the message to 200 words.
    let maxLength = 200;
    let length = message.trim().split(/\s+/).length;
    // let remainingWords = maxLength - length;
    if (length > maxLength) {
        alert(length + "words. " + "Message can have maximum of 200 words");
        return false;
    }

  // If all validations pass, display a success message and reset the form
  alert("Thank you for your message!");
  contactForm.reset();
}
