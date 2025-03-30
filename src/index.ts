import express, { Request, Response } from "express"

const app = express();
const PORT = 8066

app.get("/", (req: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Simple Express + TypeScript App</title>
      </head>
      <body>
        <h1>Hello from Express + TypeScript!</h1>
        <p>This is a very basic webpage served by Express.</p>
      </body>
    </html>
  `
  res.send(html)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})