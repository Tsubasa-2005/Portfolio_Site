import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
            <p className="text-center mb-12 text-lg text-gray-700">
                Feel free to reach out to me by filling out the form below. I will get back to you as soon as possible.
            </p>

            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;