import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

//Usuarios
router.post('/usuario/registrar', userController.createUser);
router.post('/usuario/login', userController.userLogin);



export default router;