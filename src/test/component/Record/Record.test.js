import { render, screen } from "@testing-library/react";
import { ValueItem } from "../../../component/Record/Record";
import * as React from "react";

test("To be sure the button works when clicked", () => {
  render(<ValueItem  serial={2} tools={"find Duplicate Tools"} />);

  //    Find an element with a text in the button that deletes a list when clicked

  const deleteButton = screen.getByText("Delete");

  expect(deleteButton).toBeInTheDocument();
  expect(deleteButton).toMatchInlineSnapshot(`
<button
  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-130rzps-MuiButtonBase-root-MuiButton-root"
  tabindex="0"
  type="button"
>
  Delete
  <span
    class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
  />
</button>
`);
});

test("Button takes you to an alert dialog pop up", () => {});
