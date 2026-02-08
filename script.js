* {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #b39ddb, #f8bbd0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: rgba(255,255,255,0.85);
  padding: 30px 25px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

h1 {
  margin-bottom: 20px;
}

.upload-btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6a5acd, #8a2be2);
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

canvas {
  width: 100%;
  max-width: 320px;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  display: block;
}

#downloadBtn {
  margin-top: 15px;
  padding: 12px 24px;
  border-radius: 999px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background: linear-gradient(135deg, #ff9800, #ff5722);
  color: white;
}

#downloadBtn:hover {
  opacity: 0.9;
}
