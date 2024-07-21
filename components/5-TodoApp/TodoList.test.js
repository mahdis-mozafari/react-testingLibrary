import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe('list of value input',()=>{
    test('testing',()=>{
        const arry =['something','benana','apple']
        render(< TodoList todoData={arry}/> )
        const lis = screen.getAllByRole("listitem");
        expect(lis).toHaveLength(3);
    })

    test('should match with arry of value',()=>{
        const arry =['something','benana','apple']
        render(<TodoList todoData={arry}/> )
        const lis = screen.getAllByRole("listitem");
        expect(lis.map((el) => el.textContent)).toStrictEqual(arry);
    })
})