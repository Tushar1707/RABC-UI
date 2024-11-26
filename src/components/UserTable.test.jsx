import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import UserTable from "./UserTable";

test("renders UserTable with users", async () => {
  render(
    <Provider store={store}>
      <UserTable onEdit={jest.fn()} />
    </Provider>
  );
  expect(await screen.findByText(/Alice/)).toBeInTheDocument();
});
