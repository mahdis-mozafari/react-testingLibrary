import { fireEvent, render } from "@testing-library/react"
import TodoForm from "./TodoForm"

describe('testing value to the input',()=>{
    test('testing',()=>{
        const arry =['task1','task2','task3']
        render(<TodoForm setTodoData={arry}/>)
        const input = screen.getByRole("input");
        fireEvent.change(input, { target: { value: "nemedanam" } });
      
        expect(input.value).toBe("nemedanam");

    })
})