const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OBSIDIAN Intelligence</title>
<style>
body {
  margin: 0;
  background: #080b12;
  color: #e8edf5;
  font-family: Arial, sans-serif;
}
header {
  padding: 25px;
  background: #101725;
  border-bottom: 1px solid #24344c;
}
h1 { color: #38a5ff; letter-spacing: 4px; }
.subtitle { color: #9baac0; }
main { padding: 25px; }
.card {
  background: #111b2a;
  border: 1px solid #263b56;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
}
.card h2 { color: #38a5ff; }
.status { color: #49d69b; }
footer {
  padding: 25px;
  color: #8291a7;
  text-align: center;
}
</style>
</head>
<body>
<header>
  <h1>OBSIDIAN</h1>
  <p class="subtitle">INTELLIGENCE BEYOND VISIBILITY.</p>
</header>
<main>
  <h2>INTELLIGENCE COMMAND CENTRE</h2>
  <p class="status">● SYSTEM ONLINE</p>

  <div class="card">
    <h2>01 — GOVERNMENT WATCH</h2>
    <p>Monitor public government information and accountability reports.</p>
  </div>

  <div class="card">
    <h2>02 — ELECTION TRACE</h2>
    <p>Compare published election results and identify data anomalies.</p>
  </div>

  <div class="card">
    <h2>03 — CYBER SENTINEL</h2>
    <p>Track public cybersecurity alerts and advisories.</p>
  </div>

  <div class="card">
    <h2>04 — GLOBAL PULSE</h2>
    <p>Follow international developments and verified public reports.</p>
  </div>

  <div class="card">
    <h2>05 — EVIDENCE CORE</h2>
    <p>Organise investigation records and source references.</p>
  </div>
</main>
<footer>OBSIDIAN INTELLIGENCE © 2026</footer>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("OBSIDIAN running on port " + PORT);
});
