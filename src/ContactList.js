import React from 'react'

export default function ContactList({ contacts }) {
    return (
        <div>
            <h2> Contact List </h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name}: {contact.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}
