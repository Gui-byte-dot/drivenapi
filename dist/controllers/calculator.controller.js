var nome = "Gui";
function convertSalary(salary) {
    return salary + (salary * 0.3);
}
function convertCLTToPJ(req, res) {
    var salary = req.query.salary;
    var newSalary = convertSalary(Number(salary));
    res.send({
        resultado: "O seu sal\u00E1rio deve ser pelo menos: ".concat(newSalary),
    });
}
export { convertCLTToPJ, };
