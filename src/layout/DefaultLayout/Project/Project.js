import ItemProject from "./component/ItemProject";
import Carousel from "./component/Carousel";
import { images } from "~/images";
import React, { useState } from "react";

function Project() {
    const projects = [
        { 
            id: 1, 
            name: "Phuc Long Coffee Clone UI", 
            image: images.project.phuclong, 
            description: "The Phuc Long Coffee Clone UI project is a front-end web application designed to replicate the user interface of Phuc Long Coffee's online platform. This project aims to provide a seamless, visually appealing, and user-friendly interface, capturing the look and feel of Phuc Long Coffee’s branding and layout.", 
            created: "2/2023", 
            fontend: "ReactJS, TailwindCSS, SCSS",
            backend: "",
            features: "Updating...",
            live: "https://phuc-long-coffee-tea.vercel.app/"
        },
        { id: 2, name: "Dự án B", image: images.project.phuclong, description: "Chi tiết về dự án B", status: "Completed", startDate: "2024-02-15" },
        { id: 3, name: "Dự án C", image: images.project.phuclong, description: "Chi tiết về dự án C", status: "Pending", startDate: "2024-03-10" },
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
                                    <li><span className="font-semibold">Frontend: </span>{selectedProject.fontend}</li>
                                    <li><span className="font-semibold">Backend: </span>{selectedProject.backend}</li>
                                    <li><span className="font-semibold">Features: </span>{selectedProject.features}</li>
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
