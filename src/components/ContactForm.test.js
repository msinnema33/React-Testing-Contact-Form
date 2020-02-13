import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import ContactForm from './ContactForm';

test('form is rendering properly', () => {
    const { getByLabelText } = render(<ContactForm/>);
    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('add a new user', () =>{
    const { getByLabelText, getByText } = render(<ContactForm/>);

    const firstNameInput = getByLabelText(/first Name/i);

    
    fireEvent.change(firstNameInput, {target: {value: "testing"}});

    
    expect(firstNameInput.value).toBe("testing");

    // fireEvent.click(getByTestID(/submit/i));
})