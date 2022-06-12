import express, {Express} from 'express';
import { AddressInfo } from "net";
import cors from 'cors'
import postUser from './endpoints/postUser';
import getUser from './endpoints/getUser';
import putUser from './endpoints/putUser';

const app = express();

app.use(express.json());
app.use(cors());

//1. Criar usuário
app.post("/user", postUser)

//2.Pegar usuário pelo id
app.get("/user/:id", getUser)

//3. Editar usuário
app.put("/user/edit/:id", putUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});