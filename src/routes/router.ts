import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserController";
import { deleteTable, getAllTables, tableRegister, updateTable } from "../controllers/tablesController";
import { cancelReserva, createreserva, reservasList } from "../controllers/reservasController";


const router = Router();



//Usuarios
router.post('/usuario/registrar', createUser);
router.post('/usuario/login', loginUser);

//Mesas
router.get('/mesas', getAllTables);
router.post('/mesas', tableRegister);
router.put('/mesas/:id', updateTable);
router.delete('/mesas/:id', deleteTable);

//Reservas
router.get('/reservas', reservasList);
router.post('/reservas', createreserva);
router.delete('/reservas/:id', cancelReserva);

export default router;