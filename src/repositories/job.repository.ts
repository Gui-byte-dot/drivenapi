import { QueryResult } from "pg";
import { Job, JobEntity, NewJob } from "../protocols/job";
import prisma from "../database/database";

// const data = [
// {
//   "id":1,
//   "title":"Oi",
//   "price":1
// },
// {
//   "id":2,
//   "title":"Olá",
//   "price":3

// }]


async function findMany(){
    return prisma.info.findMany();
    
}
async function insertUnique(job: Job) {
   return prisma.info.create({
     data:job
   })
}
async function upsert(job:NewJob){
  return prisma.info.upsert({
    where:{
      id:job.id || 0,
    },
    create:job as Job,
    update:job
  })
}

export {
    findMany,
    insertUnique,
    upsert
}