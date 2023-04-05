import {Request, Response} from 'express';

function convertCLTToPJ(req,res){
  const {salary} = req.query;
  
  
  const newSalary = salary + (salary * 0.3);
  res.send({
    resultado: `O seu salário deve ser pelo menos: ${newSalary}`,
  })
}
export {
  convertCLTToPJ,
}
