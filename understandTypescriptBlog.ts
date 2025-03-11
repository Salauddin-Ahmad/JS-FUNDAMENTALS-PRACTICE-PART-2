// TypeScript Fundamentals: A Beginner's Guide

// TypeScript is a superset of JavaScript that introduces static typing, classes, interfaces, and other modern features to the language.
// It helps developers catch errors early during development and improve the maintainability of the codebase.

// Let's explore the key concepts that every TypeScript developer should understand.

///////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Types

// In TypeScript, you can define variables with specific types. This helps to catch errors at compile-time
// rather than at runtime.

let isActive: boolean = true; // A boolean type
let username: string = 'TypeScript'; // A string type
let age: number = 25; // A number type

// The type system in TypeScript allows you to define precise and predictable types for your variables.

// Arrays can also have their types defined.

let numbers: number[] = [1, 2, 3, 4]; // An array of numbers
let names: string[] = ['Alice', 'Bob', 'Charlie']; // An array of strings

// TypeScript also has tuples which allow you to define an array with fixed types for each index.

let userInfo: [string, number] = ['Alice', 30]; // A tuple with a string and a number

///////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Interfaces

// Interfaces in TypeScript define the structure of an object. They allow you to define what properties an object should have
// and the types of those properties.

interface User {
    username: string;
    age: number;
    isAdmin: boolean;
}

// We can then use the interface to type-check an object.

const user: User = {
    username: 'Bob',
    age: 28,
    isAdmin: false,
};

// Interfaces can also extend other interfaces, which is useful for reusability and inheritance.

interface Admin extends User {
    adminLevel: number;
}

const adminUser: Admin = {
    username: 'AdminBob',
    age: 32,
    isAdmin: true,
    adminLevel: 5,
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Functions and Types

// TypeScript allows you to define the types for function parameters and the return type. This helps to ensure
// that functions are called with the correct types.

function greet(name: string): string {
    return `Hello, ${name}!`;
}

// The function above has a parameter `name` of type `string` and returns a `string`.

function add(a: number, b: number): number {
    return a + b;
}

// Functions can also have optional parameters and default values.

function multiply(a: number, b: number = 1): number {
    return a * b;
}

// This function accepts one required parameter `a` and an optional parameter `b` (with a default value of 1).

///////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Classes

// TypeScript supports object-oriented programming (OOP). You can define classes with constructors and methods
// just like in other OOP languages such as Java or C#.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hi, my name is Alice and I am 30 years old.

///////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Type Aliases

// Type aliases allow you to create custom types. They are particularly useful for creating complex or reusable types.

type StringOrNumber = string | number; // A type that can be either a string or a number

let value: StringOrNumber = 'Hello';
value = 123; // This is valid as the type can be a string or a number

///////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Union and Intersection Types

// TypeScript allows you to create types that combine other types using unions and intersections.

// Union types allow a variable to have one of several types.

function logId(id: string | number) {
    console.log(`ID: ${id}`);
}

logId('abc'); // Valid
logId(123);   // Valid

// Intersection types combine multiple types into one.

interface Employee {
    id: number;
    role: string;
}

interface Manager {
    managesTeam: boolean;
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
    id: 1,
    role: 'Team Lead',
    managesTeam: true,
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Generics

// Generics provide a way to create reusable code components that can work with any data type while still
// maintaining type safety.

function identity<T>(value: T): T {
    return value;
}

let number = identity(123); // T is inferred as number
let text = identity('Hello'); // T is inferred as string

///////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Modules

// TypeScript supports modules, which help organize your code into separate files. You can export and import
// functionality between different modules.

export class Animal {
    constructor(public name: string) {}
}

export function greetAnimal(animal: Animal) {
    console.log(`Hello, ${animal.name}`);
}

// In another file, you can import the Animal class and greetAnimal function:

// import { Animal, greetAnimal } from './animal';

// const dog = new Animal('Dog');
// greetAnimal(dog);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Conclusion

// TypeScript is a powerful tool for building scalable and maintainable applications.
// By adding static types, interfaces, and modern features to JavaScript, TypeScript helps catch errors early
// in the development process and provides better tooling support.

// As you continue to work with TypeScript, you'll become more familiar with its advanced features and how to use them
// to improve your development workflow.

// Happy coding with TypeScript! 🎉
