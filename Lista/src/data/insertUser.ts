import { connection } from "./baseDataBase";

export default async function insertUser(name: string, nickname:string, email:string){
   const result = await connection("TodoListUser").insert({
    name,
    nickname,
    email
   })
   return result
}
