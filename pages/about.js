
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';

const About = () => {
    return (
        <>
            <Head>
                <title>Cookie Stand Admin - About</title>
                <meta
                    name="description"
                    content="Cookie Stand Admin is a web application that allows you to manage and track your cookie stands. Create new stands, view sales reports, and track performance with ease. Join us and take your cookie business to the next level!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="cookie stand, admin, react, next.js" />
                <meta name="author" content="Your Name Here" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Cookie Stand Admin - Your Title Here" />
                <meta name="twitter:description" content="Cookie Stand Admin is a web application that allows you to manage and track your cookie stands. Create new stands, view sales reports, and track performance with ease. Join us and take your cookie business to the next level!" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header title="About Me" />
            <div className="min-h-screen p-8 bg-gray-100">
                <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-md">
                    <h1 className="mb-4 text-3xl font-bold">About Me</h1>
                    <p className="mb-4 text-lg">
                        Hi, I'm Mohammad Alsmadi, a passionate Full-stack Developer skilled in React, React Native, HTML, CSS,Next js, Node.js, and Python Django. Creating seamless web and mobile experiences is my forte. Let's build something amazing together!
                    </p>
                    <p className="text-lg">
                        You can find more about me on my <a className="text-blue-500" href="https://www.linkedin.com/in/mohammad-al-smadi-35a0171a1/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
