import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { Task } from "../types";

export default async function postUser(req:Request, res:Response):Promise<any> { 
    let statusCode = 400
     try {

        const { title,  description, creatorUserId, limitDate}:Task = req.body

           if (!title || !description|| !creatorUserId|| !limitDate) {
    res.statusCode = 422
    throw new Error("Precisa preencher todos os campos!");
}  

if ( typeof title !== "string" || typeof  description!== "string" || typeof creatorUserId !== "string" || typeof limitDate !== "string" ) {
    res.statusCode = 400
    throw new Error("Precisa ser todos os campos string!");
}
await connection.raw(`
INSERT INTO TodoListTask 
(id, name, nickname, email)
VALUES (
${Date.now().toString()},
"${req.body. title}",
" ${req.body. description},"
"${req.body.creatorUserId}",
"${req.body.limit_date}"
`);

    res.status(201).send({message: "Criado com sucesso!"})
} catch (error:any) {
    res.status(500).send(error.sqlMessage || error.message)}
}
  