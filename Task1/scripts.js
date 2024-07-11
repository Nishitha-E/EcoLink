// Validate Name Input
var nameInput = document.getElementById('name');
nameInput.addEventListener('input', function() {
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
        nameInput.setCustomValidity('Please enter only alphabets and spaces.');
    } else {
        nameInput.setCustomValidity('');
    }
});

// Validate Phone Input
var phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function() {
    if (!/^\d+$/.test(phoneInput.value)) {
        phoneInput.setCustomValidity('Please enter only numeric digits.');
    } else {
        phoneInput.setCustomValidity('');
    }
});

// Validate Address Input
var addressInput = document.getElementById('address');
addressInput.addEventListener('input', function() {
    if (addressInput.value.trim() === '') {
        addressInput.setCustomValidity('Please enter your address.');
    } else {
        addressInput.setCustomValidity('');
    }
});

// Form Submission Handling
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;

    // Simple email validation
    if (validateEmail(email)) {
        // Mock success message display (replace with actual form submission logic)
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('details-form').style.display = 'block';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Form Submission Handling for Details Form
document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Mock form submission success message display (replace with actual logic)
    document.getElementById('details-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
