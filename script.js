window.addEventListener('load', () => {
    const welcomeAnimation = document.getElementById('welcome-animation');
    
    // Hide the animation after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        welcomeAnimation.classList.add('hidden');
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginButton = document.getElementById('login-button');
    const mobileLoginButton = document.getElementById('mobile-login-button');

    if (currentUser) {
        loginButton.textContent = `Welcome, ${currentUser.name}`;
        mobileLoginButton.textContent = `Welcome, ${currentUser.name}`;
        
        const logoutButton = document.createElement('a');
        logoutButton.href = '#';
        logoutButton.textContent = 'Logout';
        logoutButton.classList.add('text-gray-600', 'hover:text-green');
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
        loginButton.parentElement.appendChild(logoutButton);

        const mobileLogoutButton = document.createElement('a');
        mobileLogoutButton.href = '#';
        mobileLogoutButton.textContent = 'Logout';
        mobileLogoutButton.classList.add('block', 'py-2', 'text-gray-600', 'hover:text-green');
        mobileLogoutButton.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
        mobileLoginButton.parentElement.appendChild(mobileLogoutButton);

    }

    const openModalButtons = document.querySelectorAll('.open-modal-button');
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!currentUser) {
                alert('You must be logged in to book a service.');
                window.location.href = 'login.html';
            }
        });
    });
});