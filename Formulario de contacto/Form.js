function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;

    // Validación básica
    if (!name || !email || !phone || !age) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación adicional del número de teléfono
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Por favor, ingrese un número de teléfono válido (10 dígitos).");
        return false;
    }

    // Validación adicional de la edad
    if (age < 0 || age > 120) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Si todo está bien
    alert("Formulario enviado con éxito.");
    return true;
}
