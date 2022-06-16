import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../types";

export default async function postUser(
  req: Request,
  res: Response
): Promise<any> {
  let statusCode = 400;
  try {
    const {  name, nickname, email }: User = req.body;

    if (!name || !nickname || !email) {
      res.statusCode = 422;
      throw new Error("Precisa preencher todos os campos!");
    }

    if (
      typeof name !== "string" ||
      typeof nickname !== "string" ||
      typeof email !== "string"
    ) {
      res.statusCode = 400;
      throw new Error("Precisa ser todos os campos string!");
    
    }
 
console.log(email)
await connection.raw(`
INSERT INTO TodoListUser
(id, name, nickname, email)
VALUES (
"${Date.now().toString()}",
"${name}",
"${nickname}",
"${email}")
`);


    res.status(201).send({ message: "Criado com sucesso!" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
