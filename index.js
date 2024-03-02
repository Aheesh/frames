// index.js
const express = require("express");
const app = express();
const port = 3010;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Node App with Meta Tags</title>
      <!-- Open Graph / Facebook -->

      <!-- Farcaster Custom Meta Tags -->
      <meta name="fc:frame" content="vNext">
      <meta name="fc:frame:image" content="https://t3.ftcdn.net/jpg/05/71/99/86/360_F_571998686_7q0qDN2lvCn5wv90SHEepoffd0Pq8NRY.jpg">
      <meta name="fc:frame:button:1" content="Player A">
      <meta name="fc:frame:button:1:action" content="link">
      <meta name="fc:frame:button:1:target" content="https://cheballer.vercel.app/playerA">
    </head>
    <body>
      <h1>Hello, world!</h1>
      <p>This is a simple Node.js app serving some HTML with Open Graph meta tags and custom Farcaster meta tags.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
