const addService = async (event) => {
  event.preventDefault();

  const service = document.querySelector("#service-name").value.trim();
  const price = document.querySelector("#service-price").value.trim();

  if (service && price) {
    const response = await fetch(`/api/services`, {
      method: "POST",
      body: JSON.stringify({ service_name: service, price }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/services");
    } else {
      alert("Failed to add");
    }
  }
};

document.querySelector(".service-form").addEventListener("submit", addService);

const onDelete = async (e) => {
  const id = e.target.id;
  const response = await fetch(`/api/services/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/services");
  } else {
    alert("Failed to delete");
  }
};

let deleteButtonsArr = document.querySelectorAll(".delete-button");

deleteButtonsArr.forEach((el) => {
  el.addEventListener("click", onDelete);
});
