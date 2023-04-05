import {Request, Response} from 'express';

function convertCLTToPJ(req: Request, res: Response){
  const {salary} = req.query;
  
  
  const newSalary = Number(salary) + (Number(salary) * 0.3);
  
  res.send({
    resultado: `O seu salário deve ser pelo menos: ${newSalary}`,
  })
}
export {
  convertCLTToPJ,
}
