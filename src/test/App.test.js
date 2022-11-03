import { render, screen } from '@testing-library/react';
import App from './../App';
import * as React from "react";
import { Router } from "react-router-dom";


test('To confirm if the input form works', () => {
  render(<App />);

  const textInput = screen.getByText("search toolhub...");
  // expect(linkElement).toBeInTheDocument();
  expect(textInput).toHaveValue('search-tools')
});
test("Input works when clicked", ()=>{

});

