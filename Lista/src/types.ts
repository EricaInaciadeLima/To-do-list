export type User = {
    id: number,
    name: string,
    nickname:string,
    email:string
}

export type Task = {
    id: number,
	title: string,
	description: string,
	limitDate: string,
	creatorUserId: string
}

export type TodoListResponsibleUserTaskRelatio ={
	taskId: string,
	title: string,
	description: string,
	status:string,
	creatorUserId: string,
	creatorUserNickname: string
}