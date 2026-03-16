const API_URL = "/api";

function getUsers() {
  fetch(`${API_URL}/users`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    });
}

function getProducts() {
  fetch(`${API_URL}/products`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    });
}
