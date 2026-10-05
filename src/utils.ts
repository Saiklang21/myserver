function hello() {
    return "Hello World";
}

function add(a: number, b: number) : number {
    return a * b;
}
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidAge(age: number): boolean {
    return Number.isInteger(age) && age >= 0 && age <= 120;
}


export const utils = {
    hello,
    add,
    isValidEmail,
    isValidAge
};