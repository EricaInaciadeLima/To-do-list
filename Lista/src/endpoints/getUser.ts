import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../types";

export default async function getUser(req:Request, res:Response) :Promise<any>{
    let statusCode = 400
    try {
        
        const {id, name, nickname, email}:User = req.body
        if(!id){
            res.statusCode = 422
    throw new Error("Precisa inserir o valor do id!");
        }
        if(typeof id !== "number"){
            res.statusCode = 400
    throw new Error("Id não encontardo!");
        }
        await connection("TodoListUser")
        .select({
            id,
            nickname,
        }).where({id: req.params.id})
    
       
        res.status(200).send({id: req.params.id})
    }  catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)}
    }