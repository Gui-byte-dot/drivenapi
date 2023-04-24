export type JobEntity = {
    id:number,
    title:string,
    price: number,
}

export type Job = Omit<JobEntity, "id">

export type NewJob = Partial<JobEntity>