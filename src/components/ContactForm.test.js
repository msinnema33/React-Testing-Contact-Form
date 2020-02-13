import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('form is rendering properly', () => {
    const {getByLabelText} = render(<ContactForm/>);
    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});