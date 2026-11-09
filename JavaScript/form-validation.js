/* 
Inquiry Form Validation
MDN Web Docs (2025): Form validation, DOM manipulation, and event handling. Available at: https://developer.mozilla.org/
W3Schools (2025): JavaScript HTML DOM Form Validation. Available at: https://www.w3schools.com/
Mozilla. 2026. understanding the importance and the way to structure the different if and then statements to correspond with the HTML Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling (Accessed: 6th Nov 2026)
*/

// Get the references to the form and its elements (using your exact HTML IDs)
const inquiryForm = document.getElementById("myForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const inquiryInput = document.getElementById("message");
const agreeTermsInput = document.getElementById("agreeTerms");

// Get references to the error span elements
const nameErrorSpan = document.getElementById("nameError");
const emailErrorSpan = document.getElementById("emailError");
const subjectErrorSpan = document.getElementById("subjectError");
const inquiryErrorSpan = document.getElementById("messageError");
const termsErrorSpan = document.getElementById("termsError");

// Add an event listener to the form's submit button
if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {
        
        // Prevent default form submission so we can validate it first
        event.preventDefault();

        // Assume the form is valid initially 
        var isValid = true;

        // Clear any previous error messages
        if (nameErrorSpan) nameErrorSpan.innerHTML = '';
        if (emailErrorSpan) emailErrorSpan.innerHTML = '';
        if (subjectErrorSpan) subjectErrorSpan.innerHTML = '';
        if (inquiryErrorSpan) inquiryErrorSpan.innerHTML = '';
        if (termsErrorSpan) termsErrorSpan.innerHTML = '';

        // Validate Full Name field
        if (fullNameInput && fullNameInput.value.trim() === '') {
            nameErrorSpan.innerHTML = 'Full Name is required.';
            isValid = false;
        }

        // Validate Email field
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && emailInput.value.trim() === '') {
            emailErrorSpan.innerHTML = 'Email Address is required.';
            isValid = false;
        } else if (emailInput && !emailPattern.test(emailInput.value.trim())) {
            emailErrorSpan.innerHTML = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Subject field
        if (subjectInput && subjectInput.value.trim() === '') {
            subjectErrorSpan.innerHTML = 'Subject is required.';
            isValid = false;
        }

        // Validate Message/Inquiry field
        if (inquiryInput && inquiryInput.value.trim() === '') {
            inquiryErrorSpan.innerHTML = 'Inquiry is required here.';
            isValid = false;
        }

        // Validate Terms Checkbox
        if (agreeTermsInput && !agreeTermsInput.checked) {
            termsErrorSpan.innerHTML = 'You must agree to be contacted.';
            isValid = false;
        }
        // If the form is valid, construct mailto link and launch Outlook
        if (isValid) {
            var fullName = fullNameInput.value.trim();
            var email = emailInput.value.trim();
            var subject = subjectInput.value.trim();
            var message = inquiryInput.value.trim();

            // Specify the recipient email address
            var recipient = "ST10516653@myemeris.edu.za";

            // Create email subject
            var emailSubject = "Miguel's Bakery Inquiry: " + subject;

            // Create email message body
            var body = "Salutations Miguel's Bakery Team,\n\n" +
                "My inquiry details are as follows:\n\n" +
                "Full Name: " + fullName + "\n" +
                "Email Address: " + email + "\n" +
                "Subject: " + subject + "\n\n" +
                "Inquiry / Message:\n" + message + "\n\n" +
                "Kind regards,\n" +
                fullName;

            // Create the mailto link
            var mailtoLink = "mailto:" + recipient +
                "?subject=" + encodeURIComponent(emailSubject) +
                "&body=" + encodeURIComponent(body);

            // Open the user's default email application (Outlook)
            window.location.href = mailtoLink;

            // Clear the form fields after triggering Outlook
            inquiryForm.reset();
        }
    });
}