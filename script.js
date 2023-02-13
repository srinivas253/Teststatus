const incidentTable = document.getElementById("incident-table");

fetch("incidents.json")
  .then(response => response.json())
  .then(incidents => {
    incidents.forEach(incident => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${incident.title}</td>
        <td>${incident.date}</td>
        <td>${incident.service}</td>
        <td class="incident-${incident.status.toLowerCase()}">${incident.status}</td>
      `;
      incidentTable.appendChild(row);
    });
    incidentTable.querySelector(".incident-loading").remove();
  });

const services = [
  { name: 'Service 1', status: 'Loading...' },
  { name: 'Service 2', status: 'Loading...' },
  { name: 'Service 3', status: 'Loading...' },
];

const statusTable = document.getElementById('status-table');

services.forEach(service => {
  fetch(`https://api.example.com/status/${service.name}`)
    .then(response => response.json())
    .then(data => {
      service.status = data.status;
      renderTable();
    });
});

