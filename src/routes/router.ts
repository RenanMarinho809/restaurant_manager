import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserController";
import { deleteTable, getAllTables, tableRegister, updateTable } from "../controllers/tablesController";

const router = Router();



//Usuarios
router.post('/usuario/registrar', createUser);
router.post('/usuario/login', loginUser);

//Mesas
router.get('/mesas', getAllTables);
router.post('/mesas', tableRegister);
router.put('/mesas/:id', updateTable);
router.delete('/mesas/:id', deleteTable);

export default router;