const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const img = new Image();
  downloadBtn.style.display = "inline-block"; () {
    // ตั้งขนาด canvas ให้เท่ารูป
    canvas.width = img.width;
    canvas.height = img.height;

    // วาดรูป
    ctx.drawImage(img, 0, 0);

    // แปลงเป็นขาวดำ
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      data[i] = data[i + 1] = data[i + 2] = gray;
    }

    ctx.putImageData(imageData, 0, 0);
    const downloadBtn = document.getElementById("downloadBtn");
  };

  img.src = URL.createObjectURL(file);
});

downloadBtn.addEventListener("click", function () {
  if (canvas.width === 0) return; // กันกดตอนยังไม่มีรูป

  const link = document.createElement("a");
  link.download = "grayscale.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});





