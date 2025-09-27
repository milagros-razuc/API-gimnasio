const API_BASE = "http://localhost:3306"; // Cambiar si el backend está en otro puerto

function fetchClases() {
  fetch(`${API_BASE}/clases`)
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("clases-list");
      list.innerHTML = "";
      data.forEach((clase) => {
        const item = document.createElement("li");
        item.textContent = `${clase.nombre} - ${clase.horario}`;
        list.appendChild(item);
      });
    });
}

function fetchEntrenadores() {
  fetch(`${API_BASE}/entrenadores`)
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("entrenadores-list");
      list.innerHTML = "";
      data.forEach((ent) => {
        const item = document.createElement("li");
        item.textContent = `${ent.nombre} (${ent.especialidad})`;
        list.appendChild(item);
      });
    });
}

document.getElementById("inscripcion-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const miembroId = form.miembroId.value;
  const claseId = form.claseId.value;

  fetch(`${API_BASE}/inscripciones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ miembroId, claseId }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("inscripcion-msg").textContent =
        "✅ Inscripción exitosa";
      form.reset();
    })
    .catch((err) => {
      document.getElementById("inscripcion-msg").textContent =
        "❌ Error al inscribirse";
    });
});
