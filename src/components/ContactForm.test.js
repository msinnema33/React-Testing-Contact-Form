import React from 'react';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
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

    // getByText(/submit/i);
})
    // fireEvent.click(getByText(/submit/i));

    //add a test for testing the pre element 

    // test('test data return', async () =>{
    //     const { getByLabelText, getByText } = render(<ContactForm/>);
    
    //     //test data
        
    //     //fireEvent.change(firstNameInput, {target: {value: "testing"}});
    
    //     await waitForElement(()=> //query for pre element goes here);
    //     expect(firstNameInput.value).toBe("testing");
    
        
    // })
