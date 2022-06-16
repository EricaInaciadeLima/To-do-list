import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { TodoListResponsibleUserTaskRelatio } from "../types";

export default async function getUser(req:Request, res:Response) :Promise<any>{
    let statusCode = 400
    try {
        
    
        const {taskId ,title,  description, creatorUserId, status, creatorUserNickname}:TodoListResponsibleUserTaskRelatio= req.body
        if(!taskId){
            res.statusCode = 422
    throw new Error("Precisa inserir o valor do id!");
        }
       
        await connection("TodoListResponsibleUserTaskRelation")
        .select({
            taskId,
            title, 
           description, 
           creatorUserId, 
           status, 
           creatorUserNickname
        }).where({taskId: req.params.taskId})
    
       
        res.status(200).send({taskId: req.params.taskId})
    }  catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)}
    }