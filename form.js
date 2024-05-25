document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const error = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    error.innerText = "";
    error.style.backgroundColor = "";

    const errors = [];

    if (userName.trim() === "") {
      errors.push("El campo nombre no puede estar vacio");
      error.style.backgroundColor = "red";
    } else if (!validateName(userName)) {
      errors.push("Ingrese carácteres válidos");
    }

    if (lastName.trim() === "") {
      errors.push("El campo apellido no puede estar vacio");
    } else if (!validateLastName(lastName)) {
      errors.push("Ingrese carácteres válidos");
    }

    if (email.trim() === "") {
      errors.push("El campo correo no puede estar vacio");
    } else if (!validateEmail(email)) {
      errors.push("Ingrese carácteres válidos");
    }

    if (message.trim() === "") {
      errors.push("El campo mensaje no puede estar vacio");
    }
    if (errors.length > 0) {
      error.innerText = errors.join("\n");
      error.style.backgroundColor = "red";
      error.style.padding = "10px";
    } else {
      error.style.backgroundColor = "green";
      error.innerText = "Mensaje enviado con éxito";
      form.submit();
    }
  });

  function validateEmail(email) {
    const regEmail =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    return regEmail.test(String(email).toLowerCase());
  }

  function validateName(userName) {
    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    return regName.test(String(userName).toLowerCase());
  }

  function validateLastName(lastName) {
    const regLastn = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    return regLastn.test(String(lastName).toLowerCase());
  }
});
