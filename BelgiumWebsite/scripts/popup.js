// Pop-up

document.querySelector(".nav-link").addEventListener("click",function(){
    document.querySelector("#popup").classList.add("active");
    document.getElementById('username').value='';
    document.getElementById('password').value='';
    errorMessage.textContent = '';
});

document.querySelector("#closeButton").addEventListener("click",function(){
    document.querySelector("#popup").classList.remove("active");
});

document.querySelector("#forgotPasswordRegister").addEventListener("click",function(){
    document.querySelector("#popupRegister").classList.remove("active");
    document.querySelector("#popup").classList.add("active");
    document.getElementById('username').value='';
    document.getElementById('password').value='';
    errorMessage.textContent = '';
});


// Popup Regsiter
document.querySelector("#register").addEventListener("click",function(){
    document.querySelector("#popup").classList.remove("active");
    document.querySelector("#popupRegister").classList.add("active");
    document.getElementById('usernameRegister').value='';
    document.getElementById('passwordRegister').value='';
    errorMessage.textContent = '';
});

document.querySelector("#closeButtonRegister").addEventListener("click",function(){
    document.querySelector("#popupRegister").classList.remove("active");
});

// Functionality
function logInRegister() {
    // Get the username and password values from the input fields
    const username = document.getElementById('usernameRegister').value;
    const password = document.getElementById('passwordRegister').value;
    
    // Create an object to store the username and password
    const user = {
        username: username,
        password: password,
    };
    
    // For demonstration, you can log the object to the console
    console.log(user);
    
    // Optionally, store the object in localStorage (or sessionStorage) for persistence
    // Note: localStorage only stores strings, so we need to convert the object to a JSON string
    localStorage.setItem('userData', JSON.stringify(user));
    
    // Clear the form fields after registration
    document.getElementById('usernameRegister').value = '';
    document.getElementById('passwordRegister').value = '';
    
    // Provide feedback or perform additional actions as needed
    // Example: Show a success message or redirect to another page
    document.getElementById('errorMessageRegister').innerText = 'Registration successful!';
}

function logIn() {
    // Get the entered username and password from the login form
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Retrieve the stored user data from localStorage
    const storedUserData = localStorage.getItem('userData');

    // Check if user data exists in localStorage
    if (storedUserData) {
        // Parse the stored user data from JSON string to object
        const user = JSON.parse(storedUserData);

        // Validate the entered credentials against the stored data
        if (enteredUsername === user.username && enteredPassword === user.password) {
            // Credentials are valid
            document.getElementById('errorMessage').innerText = 'Login successful!';
            localStorage.removeItem('userData');

            // Close the popup after 3000ms (3 seconds)
            setTimeout(() => {
                document.getElementById('popup').style.display = 'none';
            }, 3000);

        } else {
            // Credentials are invalid
            document.getElementById('errorMessage').innerText = 'Invalid username or password.';
        }
    } else {
        // No user data is found in localStorage
        document.getElementById('errorMessage').innerText = 'No registered user found.';
    }

    // Clear the form fields after login attempt
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
