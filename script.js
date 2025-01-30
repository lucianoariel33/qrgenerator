// Función para generar el QR
function generateQR() {
    const urlInput = document.getElementById("url-input");
    const qrTitle = document.getElementById("qr-title");
    const qrCodeContainer = document.getElementById("qr-code");
    const downloadButton = document.getElementById("download-button");

    // Obtener la URL ingresada
    const url = urlInput.value.trim();

    // Validar que la URL no esté vacía
    if (!url) {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    // Limpiar el contenedor del QR si ya hay uno
    qrCodeContainer.innerHTML = "";

    // Extraer el nombre del dominio para el título
    let domain;
    try {
        domain = new URL(url).hostname;
    } catch (error) {
        alert("La URL ingresada no es válida.");
        return;
    }
    qrTitle.textContent = `Código QR para: ${domain}`;

    // Generar el código QR
    new QRCode(qrCodeContainer, {
        text: url,
        width: 200,
        height: 200,
    });

    // Mostrar el botón de descarga
    downloadButton.style.display = "inline-flex";
}

// Función para descargar el QR como PNG
function downloadQR() {
    const qrCodeContainer = document.getElementById("qr-code");

    // Usar html2canvas para convertir el QR en una imagen
    html2canvas(qrCodeContainer).then((canvas) => {
        const link = document.createElement("a");
        link.download = "codigo-qr.png"; // Nombre del archivo
        link.href = canvas.toDataURL("image/png"); // Convertir a PNG
        link.click(); // Simular clic para descargar
    });
}

// Funciones para el modal
function openModal() {
    const modal = document.getElementById("info-modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("info-modal");
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function (event) {
    const modal = document.getElementById("info-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};