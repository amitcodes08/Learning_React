import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {

    test("Contact component renders correctly", () => { // test can be named it or test
      const { getByText, getByLabelText } = render(<Contact />);
    
      const headingElement = getByText("Contact Us");
      expect(headingElement).toBeInTheDocument();
      
      
      // Check for form fields
      expect(getByLabelText("Name:")).toBeInTheDocument();
      expect(getByLabelText("Email:")).toBeInTheDocument();
      expect(getByLabelText("Message:")).toBeInTheDocument();
      
      // Check for submit button
      expect(getByText("Send")).toBeInTheDocument();
    });

});    

 