import { render,screen } from "@testing-library/react";
import Text from "./Text"


describe("Testing Text", () => {
    
    test("should render text p element", () => {
      render(<Text/>);
  
      expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
    });
  });