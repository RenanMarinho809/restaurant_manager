"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const tablesController_1 = require("../controllers/tablesController");
const reservasController_1 = require("../controllers/reservasController");
const router = (0, express_1.Router)();
//Usuarios
router.post('/usuario/registrar', UserController_1.createUser);
router.post('/usuario/login', UserController_1.loginUser);
//Mesas
router.get('/mesas', tablesController_1.getAllTables);
router.post('/mesas', tablesController_1.tableRegister);
router.put('/mesas/:id', tablesController_1.updateTable);
router.delete('/mesas/:id', tablesController_1.deleteTable);
//Reservas
router.get('/reservas', reservasController_1.reservasList);
router.post('/reservas', reservasController_1.createreserva);
router.delete('/reservas/:id', reservasController_1.cancelReserva);
exports.default = router;
