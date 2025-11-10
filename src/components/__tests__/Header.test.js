// import { render, screen, fireEvent } from "@testing-library/react";
// import Header from "../Header";
// import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import appStore from "../../utils/store";
// import { BrowserRouter } from "react-router";

// describe("Header Component", () => {
//   it("Header component renders correctly", () => {
//     const { getByText } = render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//         </Provider>
//       </BrowserRouter>
//     );

//     const headingElement = getByText("Home");
//     expect(headingElement).toBeInTheDocument();

//     const loginButton = getByText("Login");
//     fireEvent.click(loginButton);

//     const loginButtonAfterClick = screen.getByText("Login");
//     expect(loginButtonAfterClick).toBeInTheDocument();
//   });
// });


// Link issue ki wjh se ye test abhi ke liye comment kr diya hai. Jab Header component puri tarah se ready ho jaye to is test ko enable karke modify kiya ja sakta hai.