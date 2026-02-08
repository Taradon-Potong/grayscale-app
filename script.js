const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const gray =
        data[i] * 0.299 +
        data[i + 1] * 0.587 +
        data[i + 2] * 0.114;

      data[i] = data[i + 1] = data[i + 2] = gray;
    }

    ctx.putImageData(imageData, 0, 0);

    // แสดงปุ่มดาวน์โหลด
    downloadBtn.style.display = "inline-block";
  };

  img.src = URL.createObjectURL(file);
});

// ✅ รองรับมือถือ 100%
downloadBtn.addEventListener("click", function () {
  if (canvas.width === 0) return;

  const imageURL = canvas.toDataURL("image/png");
  window.open(imageURL, "_blank");
});
