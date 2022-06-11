import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getUser(req:Request, res:Response) {
    try {
        const {name, nickname, email} : User = req.body
        type User = {
            name:string,
            nickname:string,
            email:string
        }
       
             if (!name || !nickname || !email) {
                res.statusCode = 400
                throw new Error("Precisa preencher todos os campos!");
            }
            
            // if (name === name || nickname === nickname || email === email) {
            //     res.statusCode = 400
            //     throw new Error(" Alguam informação já existente!");
            // }
        
       
        res.status(200).send({message: "Criado com sucesso!"})
    } catch (error:any) {
        console.log(error.sqlMessage || error.message)
        console.log(error.sqlMessage )
        res.status(400).send("Erro")
    }
}