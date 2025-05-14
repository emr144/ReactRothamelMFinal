import React, { useState } from 'react';
import '../Styles/components/contact.css';
import { db } from "../data/configFirebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "contactos"), {
            ...form,
            fecha: Timestamp.now()
        });
        setEnviado(true);
        setForm({ name: "", email: "", message: "" });
    };

    if (enviado) {
        return (
            <div className="contact-page">
                <h1>¡Gracias por tu mensaje!</h1>
                <p>Te responderemos pronto.</p>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <h1>Dejanos tu pregunta</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;