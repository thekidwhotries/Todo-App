const todos = [
    {
        "name":"Go to market",
        "priority":"Low"
    },
    {
        "name":"Go to market",
        "priority":"High"
    },
    {
        "name":"Go to market",
        "priority":"Medium"
    }
]

// filter  (grab all the objects wholse priority is high)

// const highPriorityTodo = todos.filter(todo=>todo.priority=='High')

// map

// for loop 





// Create a function that takes 2 input's i.e num1 and num2 
// and it should return the the sum of these 2 number's

// const addNumbers(num1, num2) =>{
// return num1+num2
// }


// create a function which will take 2 number and divide them and return the result 

// const divideNumbers (num1, num2) => {
//     return num1/num2
// }

// create a function to add data in local d

const addNumbers (num1, num2) => {
localStorage.setItem (JSON.stringify( num1+num2))
}







