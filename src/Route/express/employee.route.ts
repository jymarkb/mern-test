import { Router } from "express";
import { upload } from "@/lib/multer-upload";
import { getAllEmployees, addNewEmployee, updateEmployee, getOneEmployee, deleteEmployee } from "@/Repository/employee.repository";

const router = Router();

router.get("/", getAllEmployees);
router.post("/", upload.single("photo"), addNewEmployee);
router.put("/:id", upload.single("photo"), updateEmployee);
router.delete("/:id", deleteEmployee);

router.get("/:id", getOneEmployee);
export default router;
