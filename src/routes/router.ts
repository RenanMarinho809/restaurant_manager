import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserController";

const router = Router();



//Usuarios
router.post('/usuario/registrar', createUser);
router.post('/usuario/login', loginUser);


export default router;