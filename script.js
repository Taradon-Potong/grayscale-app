const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const originalImg = document.getElementById("original");
const downloadBtn = document.getElementById("downloadBtn");

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const img = new Image();

  img.onload = () => {
    // แสดงรูปก่อน
    originalImg.src = img.src;

    // ตั้งขนาด canvas
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    // แปลงเป็นขาวดำ
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
      data[i] = data[i + 1] = data[i + 2] = gray;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  img.src = URL.createObjectURL(file);
});

// ดาวน์โหลดภาพ
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "grayscale.png";
  link.href = canvas.toDataURL();
  link.click();
});
