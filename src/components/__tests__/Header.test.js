import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router";

describe("Header Component", () => {
  it("Header component renders correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const headingElement = getByText("Home");
    expect(headingElement).toBeInTheDocument();

    const loginButton = getByText("Login");
    fireEvent.click(loginButton);

    const loginButtonAfterClick = screen.getByText("Login");
    expect(loginButtonAfterClick).toBeInTheDocument();
  });
});
