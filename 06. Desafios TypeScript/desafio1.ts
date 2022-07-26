/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

// Opção 1
let employee = {
    code: 10,
    name: 'John' 
}

// Opção 2
let employee2: {code: number, name: string} = {
    code: 11,
    name: 'John Paul'
}

// Opção 3
interface employee {
    code: number,
    name: string
}
let employee3: employee = {
    code: 12,
    name: 'John Paul William'
}