
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        generateQR();
    }
});

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000)
    }
}

qrImage.addEventListener('click', (event) => {
    event.preventDefault();
    var api_link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    fetch(api_link)
        .then(response => response.blob())
        .then(blob => {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'api_link.jpg';
            link.click();
            link.remove();
        });
})



