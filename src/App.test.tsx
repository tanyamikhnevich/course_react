import { render, screen } from '@testing-library/react';
import SamuraiJSApp from "./App";
import * as React from "react";
import ReactDOM = require("react-dom");


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);

});

test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
