import express from "express";
import UserController from "./app/controllers/userController";

const app = express();
app.use(express.json());

const port = 3333;

app.post('/users', UserController.store);

app.listen(port , () => {
    console.log(`Servidor iniciado em localhost na porta ${port}`);
});