import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsLoader = (req: Request, res: Response): void => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../../public/upload", filename);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: "File not found" });
    return;
  }

  res.sendFile(filePath);
};

export default assetsLoader;
