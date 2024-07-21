import { render } from "@testing-library/react"
import ListOfLi from "./ListOfLi"

describe('List of li elements',()=>{
    test('testing',()=>{
        const arry =['mahdis','artemis','amir']
        render(<ListOfLi usernames={arry}/> )
        const lis = screen.getAllByRole("listitem");
        expect(lis).toHaveLength(3);
    })

    test('should match to array',()=>{
        const arry =['mahdis','artemis','amir']
        render(<ListOfLi usernames={arry}/> )
        const lis = screen.getAllByRole("listitem");
        expect(lis.map((el) => el.textContent)).toStrictEqual(arry);
    })
})