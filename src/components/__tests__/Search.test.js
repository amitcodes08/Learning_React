import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => 
      Promise.resolve({
        MOCK_DATA
      }),
  })
);

it("Should render Search component", async () => {
    // You can implement the test logic here
    await act(async () => {
        render(<div><Body /></div>);
    });

   const searchInput = screen.getByTestId("search-input");

   fireEvent.change(searchInput, { target: { value: "burger" } });
   fireEvent.click(screen.getByText("Search"));
   
   expect(searchInput).toBeInTheDocument();
});