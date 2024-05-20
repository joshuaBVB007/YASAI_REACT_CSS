import About from "./about";
import { render,screen } from '@testing-library/react';

test('renders About component', () => {
    const {getByText} = render(<About/>);
    screen.getByText("Lorem");
    expect(getByText).toBeTruthy();
})