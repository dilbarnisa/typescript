//any//
let v: any = true;
v = "string"; 
console.log(Math.round(v));


//array//
let numbers: number[] =[];
numbers.forEach(n =>n.toString)


//tuples//
let user: [number,string]=[1,'hello'];
user[1].length


//enum//
enum Size {Small =1 ,Medium ,Large }
let mySize = Size.Medium;
console.log(mySize);

 
//function//
function calculateTax(income: number ,taxYear = 2022): number{
    if (taxYear < 2022)
    return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);

//object//
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} ={
    id: 1,
    name: "hello",
    retire: (date: Date) => {
        console.log(date);
    }
};