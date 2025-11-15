"use client";

import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:rajabuffing00@gmail.com?subject=New Message from ${name}&body=
Name: ${name}%0D%0A
Email: ${email}%0D%0A
Message:%0D%0A
${message}`;

        // Open user's email app
        window.location.href = mailtoLink;

        // Clear fields after opening mail app
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="bg-neutral p-8 rounded-lg shadow-2xl border border-logo">
            <h2 className="text-2xl font-semibold text-light mb-6">
                Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label className="block text-sm font-medium text-light">
                        Name :
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3 p-2 block w-full rounded-full bg-base border border-logo text-logo"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-light">
                        Email :
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-3 p-2 block w-full rounded-full bg-base border border-logo text-logo"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-light">
                        Message :
                    </label>
                    <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-3 p-2 block w-full rounded-lg bg-base border border-logo text-logo"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-2 bg-logo text-light rounded-full hover:bg-neutral transition-all"
                >
                    <IoMdSend className="mr-2" size={18} />
                    Send Message
                </button>
            </form>
        </div>
    );
}
