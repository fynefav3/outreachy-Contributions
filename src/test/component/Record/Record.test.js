import { render, screen} from '@testing-library/react';
import Record from "../../../component/Record/Record";
import * as React from "react";

test('To be sure the button works when clicked', () => {
   render(<Record />);

//    Find an element with a role of button that deletes a list when clicked

   const deleteButton = screen.getByRole('button', {name: 'Delete'})
   expect(deleteButton).toHavestyle({color: "#8C1A11"})
  });

  test('Button takes you to an alert dialog pop up', () => {
});