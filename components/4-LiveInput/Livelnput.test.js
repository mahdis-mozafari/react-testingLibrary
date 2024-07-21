import { fireEvent, render } from "@testing-library/react"
import LiveInput from "./LiveInput"

describe('testing change input',()=>{
    test('testing',()=>{
        render(<LiveInput/>)

        const input = screen.getByRole("input");
        const h2 = screen.getByRole("h2");
        fireEvent.change(input, { target: { value: "nemedanam" } });
        expect(h2.textContent).toBe("nemedanam");
    })
    
    test('testing2',()=>{
        render(<LiveInput/>)

        const input = screen.getByRole("input");
        fireEvent.change(input, { target: { value: "nemedanam" } });
        expect(input.value).toBe("nemedanam");
    })

})