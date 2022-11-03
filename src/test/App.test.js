import { render, screen , act} from '@testing-library/react';
import App from './../App';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


test('To confirm if the input form works', () => {
  act(() => {render(
 <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<App/>}/>
    </Routes>
    </BrowserRouter>
)
});

  const textInput = screen.getByLabelText("");
  // expect(linkElement).toBeInTheDocument();
  expect(textInput).toBeInTheDocument('search tools')
});
// test("Input works when clicked", ()=>{

// });

