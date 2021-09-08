const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // TODO change these to match the table column headings
  if (first_name && last_name && email && password) {
    const response = await fetch('/api/manageUsers', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(first_name + last_name + email + password);

    if (response.ok) {
      document.location.replace('manageUsers');
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/manageUsers/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('manageUsers');
    } else {
      alert('Failed to delete user');
    }
  }
};


document
  .querySelector('.user-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
