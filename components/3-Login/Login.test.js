import { render } from "@testing-library/react"
import Login from "./Login"

describe('testing this componnent',()=>{
    test('testing', () => { 
        render(<Login/>)
        const btn = screen.getByRole("button");

        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(btn.textContent).toBe('login')
    })

    test('testing2', () => { 
        render(<Login/>)
        const btn = screen.getByRole("button");

        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(btn.textContent).toBe('logout')
    })
})