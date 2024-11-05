import ItemProject from "./component/ItemProject";
import Carousel from "./component/Carousel";
import { images } from "~/images";
import React, { useState } from "react";

function Project() {
    const projects = [
        // Phuc Long Coffee Clone UI
        { 
            id: 1, 
            name: "Phuc Long Coffee Clone UI", 
            image: images.project.phuclong, 
            description: "The Phuc Long Coffee Clone UI project is a front-end web application designed to replicate the user interface of Phuc Long Coffee's online platform. This project aims to provide a seamless, visually appealing, and user-friendly interface, capturing the look and feel of Phuc Long Coffee’s branding and layout.", 
            created: "2/2023", 
            framework: "React, React Router, Tailwind CSS, Sass, PostCSS, ...",
            git: "https://github.com/tanthidev/PhucLongCoffee-Tea",
            live: "https://phuc-long-coffee-tea.vercel.app/"
        },
        // WorkShop
        { 
            id: 2, 
            name: "WorkShop", 
            image: images.project.workshop, 
            description: "The Workshop Management Website facilitates workshop organization and participation, allowing users to register and manage events while providing admins with tools for oversight and management. It enhances the experience for both participants and organizers.", 
            created: "4/2024", 
            framework: "NodeJs, Express, Tailwind CSS, Mongoose, Socket.IO, bcrypt, cookie-parser, jsonwebtoken, ...",
            git: "https://github.com/tanthidev/workshop",
            live: "https://workshop-one-nu.vercel.app/",
        },
        // AiPhone
        { 
            id: 3, 
            name: "AiPhone", 
            image: images.project.AiPhone, 
            description: "The AiPhone system is a platform that enables employees to conduct sales transactions in-store. Users can view inventory and product information. Admins have the authority to create and edit products, add new employees, and send email verification for employee accounts. Notably, the system supports payment through blockchain technology, providing safety and convenience in transactions.", 
            created: "11/2023", 
            framework: "Node.js, Express.js, Mongoose, Tailwind CSS, Web3.js, Nodemailer, jsonwebtoken, Axios, ...",
            git: "https://github.com/tanthidev/AiPhone",
            live: "https://phuc-long-coffee-tea.vercel.app/",
        },
        { 
            id: 4, 
            name: "Hotel Booking System", 
            image: images.project.hotel, 
            description: "A hotel booking system designed using HTML, CSS, and JavaScript for the front-end, and PHP for the back-end, following the MVC (Model-View-Controller) design pattern and utilizing a MySQL database. The system features user authentication (login, registration, and password reset via email OTP), allows users to change their information, check booking history, search and filter available rooms, and enables admin CRUD operations for managing users, rooms, and booking lists.", 
            created: "10/2022",
            framework: "HTML, CSS, JS, PHP, MySQL,...",
            git: "https://github.com/tanthidev/Hotel-project",
            live: "https://youtu.be/Mq1hccsfmQk",
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="py-10">
            <h2 className="text-purple-title dark:text-blue-title text-center text-4xl md:text-6xl font-bold mb-16">PROJECTS</h2>
            <div className="md:h-screen h-1/2-screen flex justify-center px-10">
                <Carousel>
                    {projects.map((project) => (
                        <div >
                            <ItemProject 
                                handleProjectClick= {handleProjectClick}
                                project={project} 
                                key={project.id} 
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    {/* <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                        <h3 className="text-xl font-bold">{selectedProject.name}</h3>
                        <img src={selectedProject.image} alt={selectedProject.name} className="mt-4 mb-4 w-full h-auto rounded-md" />
                        <p><strong>Description:</strong> {selectedProject.description}</p>
                        <p><strong>Status:</strong> {selectedProject.status}</p>
                        <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
                        <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">X</button>
                    </div> */}
                     
                    <div className="relative bg-gray-900 text-white font-sans mx-10 p-10 pt-3 md:w-2/3">
                        <button
                            onClick={handleCloseModal}
                            className="absolute px-5 -top-2 -right-2 text-gray-900 bg-yellow-500 hover:bg-yellow-400 rounded-full p-3 shadow-lg transition duration-200 transform hover:scale-110 focus:outline-none"
                        >
                            ✕
                        </button>

                        <div className="mx-auto">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:space-x-8 mt-4">
                            {/* Image Section */}
                            <div className="lg:w-2/3">
                            <h1 className="text-4xl font-bold text-yellow-500 mb-3 uppercase">{selectedProject.name}</h1>
                                <img
                                    src={selectedProject.image}
                                    alt="Project Screenshot"
                                    className="w-full rounded-lg shadow-lg mb-6"
                                />
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded font-bold text-gray-900"
                                >
                                    Live Demo
                                </a>
                            </div>
                            {/* Details Section */}
                            <div className="lg:w-1/3 mt-8 lg:mt-0">
                                <h2 className="text-4xl font-bold text-yellow-500 mb-2">DETAILS</h2>
                                <p className="mb-4 text-gray-300">
                                    {selectedProject.description}
                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li><span className="font-semibold">Created: </span>{selectedProject.created}</li>
                                    <li><span className="font-semibold">FrameWork & Libary: </span>{selectedProject.framework}</li>
                                    <li><span className="font-semibold">Github: </span>
                                            <a href={selectedProject.git} target="_blank"rel="noopener noreferrer">
                                                Link
                                            </a>
                                    </li>
                                </ul>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
