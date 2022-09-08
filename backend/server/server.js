import express from "express";
import router from "../router/index.js";
import path from "path";
import cors from "cors";
import fs from "fs";

const __dirname = path.resolve();

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
router.use(cors());

app.use(express.static(path.resolve(__dirname, "images")));

app.get("/", (req, res) => {
  const directoryPath = path.join(__dirname, "images");

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log("Error getting directory information.");
    } else {
      files.forEach(function (file) {
        const filePath = path.join(__dirname, "images", file);
        res.sendFile(filePath);
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;
