   const App = () => {
            return (
                <div className="min-h-screen bg-gray-100">
                    <header className="bg-white shadow">
                        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
                            <nav>
                                <ul className="flex space-x-4">
                                    <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
                                    <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
                                    <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <main>
                        <section id="about" className="container mx-auto px-4 py-16">
                            <div className="flex flex-col md:flex-row items-center">
                                <img src="https://placehold.co/300x300" alt="A detailed illustration of a front-end developer working on a laptop" className="w-64 h-64 rounded-full mx-auto md:mx-0 md:mr-8"/>
                                <div className="mt-8 md:mt-0">
                                    <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
                                    <p className="mt-4 text-gray-600">I am a passionate front-end developer with experience in building responsive and interactive web applications using modern technologies like React and Tailwind CSS. I love creating beautiful and user-friendly interfaces that provide a great user experience.</p>
                                </div>
                            </div>
                        </section>
                        <section id="projects" className="bg-gray-200 py-16">
                            <div className="container mx-auto px-4">
                                <h2 className="text-2xl font-bold text-gray-800 text-center">Projects</h2>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 1, a responsive web application" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 1</h3>
                                        <p className="mt-2 text-gray-600">A responsive web application built with React and Tailwind CSS.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 2, an interactive dashboard" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 2</h3>
                                        <p className="mt-2 text-gray-600">An interactive dashboard created using React and D3.js.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 3, an e-commerce website" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 3</h3>
                                        <p className="mt-2 text-gray-600">An e-commerce website developed with Next.js and Tailwind CSS.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 4, a portfolio website" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 4</h3>
                                        <p className="mt-2 text-gray-600">A personal portfolio website built with Gatsby and Tailwind CSS.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 5, a blog platform" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 5</h3>
                                        <p className="mt-2 text-gray-600">A blog platform developed using React and Markdown.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <img src="https://placehold.co/400x300" alt="Screenshot of Project 6, a task management tool" className="w-full h-48 object-cover rounded-t-lg"/>
                                        <h3 className="mt-4 text-xl font-bold text-gray-800">Project 6</h3>
                                        <p className="mt-2 text-gray-600">A task management tool created with React and Redux.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="contact" className="container mx-auto px-4 py-16">
                            <h2 className="text-2xl font-bold text-gray-800 text-center">Contact</h2>
                            <div className="mt-8 max-w-lg mx-auto">
                                <form className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                                        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                                        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                                        <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Send Message</button>
                                </form>
                            </div>
                        </section>
                    </main>
                    <footer className="bg-gray-800 py-6">
                        <div className="container mx-auto px-4 text-center text-white">
                            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
                            <div className="mt-4">
                                <a href="https://github.com" className="text-white mx-2"><i className="fab fa-github"></i></a>
                                <a href="https://linkedin.com" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        
    