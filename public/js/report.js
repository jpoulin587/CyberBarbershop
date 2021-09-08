const addActivity = async (event) => {
  event.preventDefault();

  const service_id = document.querySelector('#service-activity').value.trim();
  const user_id = document.querySelector('#user-activity').value.trim();

  if (service_id && user_id) {
    const response = await fetch('/api/reports', {
      method: 'POST',
      body: JSON.stringify({ service_id, user_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/reports');
    } else {
      alert('Failed to add');
    }
  }
};

document.querySelector('.activity-form').addEventListener('submit', addActivity);


const onDelete = async (e) => {
  const {id} = e.target;
  const response = await fetch(`/api/reports/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/reports');
  } else {
    alert('Failed to delete');
  }
};

const deleteButtonsArr = document.querySelectorAll('.delete-button');

deleteButtonsArr.forEach((el) => {
  el.addEventListener('click', onDelete);
});
