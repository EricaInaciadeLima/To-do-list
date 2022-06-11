import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import insertUser from "../data/insertUser";
import { User } from "../types";

export default async function postUser(req:Request, res:Response) { 
    let statusCode = 400
     try {
        const {name, nickname, email}:User = req.body

           if (!name || !nickname || !email) {
    res.statusCode = 422
    throw new Error("Precisa preencher todos os campos!");
}  
//     await connection.raw(`
//     INSERT INTO Actor
//      (id, name, nickname, email)
//     VALUES (
//      ${Date.now().toString()},
//      "${req.body.name}",
//      "${req.body.nickname}",
//      "${req.body.email}"
//    );
//    `)
await insertUser(name, nickname, email);

    res.status(200).send({message: "Criado com sucesso"})
} catch (error:any) {
    console.log(error.sqlMessage || error.message)
    console.log(error.sqlMessage )
    res.status(400).send("Erro em algum dado.")}}
  