import { Router } from "express";
import assetsLoader from "@/controllers/assets.controller";

const router = Router();

router.get("/:filename", assetsLoader);

export default router;
