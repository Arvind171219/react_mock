import React, { useState } from 'react';

function ContactForm({ addContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, number });
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm;
