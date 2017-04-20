/* eslint-disable */

var questionData = [
    {   
        questid : "1", 
        quest: "What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?",
        options: ["The element will be set to 0", "The compiler would report an error", "The program may crash if some important data gets overwritten", "The array size would appropriately grow"],
        rightans: 2
    },

    {   
        questid : "2", 
        quest: "In C, if you pass an array as an argument to a function, what actually gets passed?",
        options: ["Value of elements in array", "First element of the array", "Base address of the array","Address of the last element of array"],
        rightans: 2
    },

    {   
        questid : "3", 
        quest: "Which bitwise operator is suitable for turning off a particular bit in a number?",
        options: ["&& operator", "& operator", "|| operator", "! operator"],
        rightans: 1
    },

    {
        questid : "4", 
        quest: "How will you free the allocated memory",
        options: ["remove(var-name);", "free(var-name);", "delete(var-name);", "dalloc(var-name);"],
        rightans: 1
    },

    {
        questid : "5", 
        quest: "What is the similarity between a structure, union and enumeration?",
        options: ["All of them let you define new values","All of them let you define new data types",  "All of them let you define new pointers","All of them let you define new structures"],
        rightans: 1
    },

    {
        questid : "6", 
        quest: "The DROP TABLE statement:",
        options: ["deletes the table structure only.", "deletes the table structure along with the table data.", "works whether or not referential integrity constraints would be violated.", "is not an SQL statement."],
        rightans: 1
    },

    {
        questid : "7", 
        quest: "Which of the following is NOT a type of SQL constraint?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "ALTERNATE KEY", "UNIQUE"],
        rightans: 1
    },

    {   
        questid : "8", 
        quest: "What is an SQL virtual table that is constructed from other tables?",
        options: ["Just another table", "A view", "A relation", "Query results"],
        rightans: 1
    },

    {
        questid : "9", 
        quest: "What is the term used for describing the judgmental or commonsense part of problem solving?",
        options: ["Heuristic", "Value based", "Analytical" ,"All of above"],
        rightans: 0
    },

    {
        questid : "10", 
        quest: "What was originally called the imitation game by its creator?",
        options: ["The Turing Test",  "LISP", "The Logic Theorist", "Cybernetics"],
        rightans: 0
    }
]

export default questionData;