import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const projectsData = [
    {
        title: 'Portfolio Website',
        description: 'A sleek, responsive portfolio built with React and Tailwind CSS.',
        url: 'https://github.com/ShaunyPersy/my-portfolio',
        tech: ['React', 'Tailwind', 'Framer Motion'],
    },
    {
        title: 'Book Tracker',
        description: 'A book catelog application to keep track of your favorite read books.',
        url: 'https://github.com/ShaunyPersy/BookTracker',
        tech: ['C#', '.NET', 'ASP.NET', 'MySQL'],
    },
    {
        title: 'To Do List App',
        description: 'An app to keep track of all your tasks.',
        url: 'https://github.com/ShaunyPersy/To-Do-List-Angular',
        tech: ['Angular', 'Typescript', 'Firebase'],
    },
    {
        title: 'Finance Tracker',
        description: 'A simple finance tracker to see where your budget goes.',
        url: 'https://github.com/ShaunyPersy/FinanceTracker',
        tech: ['Angular', 'Ionic', 'Hybrid'],
    },
    {
        title: 'Flower Webshop',
        description: 'A Webshop for a florist with simulated payment.',
        url: 'https://github.com/ShaunyPersy/Flower-Webshop',
        tech: ['HTML', 'Javascript', 'PHP', 'MySQL'],
    },
    {
        title: 'Quiz Website',
        description: 'A Website for a teacher to quiz their students on.',
        url: '',
        tech: ['HTML', 'Javascript', 'PHP', 'MySQL'],
    },
    {
        title: 'Music Player',
        description: 'A music player that takes MP3 files out of a folder.',
        url: '',
        tech: ['Python', 'Pygame'],
    },
    {
        title: 'Intix License Manager',
        description: 'An intern tool to manage the licenses of customers',
        url: '',
        tech: ['Java', 'Spring', 'Vaadin', 'PostgreSQL'],
    }
];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

export default function Projects() {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    const paginate = (newDirection) => {
        setCurrentIndex(([prevIndex]) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = projectsData.length - 1;
            else if (newIndex >= projectsData.length) newIndex = 0;
            return [newIndex, newDirection];
        });
    };

    const project = projectsData[currentIndex];

    return (
        <section
            id="projects"
            className="bg-container shadow-primary relative max-w-md mx-auto p-8 rounded-lg"
        >
            <h2 className="title text-center mb-8 text-4xl font-bold">🚀 Projects</h2>
            <p className='text-center pb-5'>Some of the cards will redirect to the github repo upon clicking</p>

            <button
                onClick={() => paginate(-1)}
                aria-label="Previous project"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full shadow-md p-3 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white transition"
                style={{ zIndex: 10 }}
            >
                &#8249;
            </button>

            <button
                onClick={() => paginate(1)}
                aria-label="Next project"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full shadow-md p-3 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white transition"
                style={{ zIndex: 10 }}
            >
                &#8250;
            </button>

            <AnimatePresence initial={false} custom={direction} mode='wait'>
                <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-md mx-auto rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <motion.div
                        className={`
                            p-6 rounded-xl shadow-md dark:shadow-none
                            bg-white dark:bg-gray-800
                            group hover:bg-white dark:hover:bg-white/10
                            transition-all duration-200
                        `}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 15px 4px rgba(59, 130, 246, 0.6)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((techName) => (
                                <span
                                    key={techName}
                                    className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 font-medium"
                                >
                                    {techName}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.a>
            </AnimatePresence>

            <div className="flex justify-center mt-6 space-x-2">
                {projectsData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex([i, i > currentIndex ? 1 : -1])}
                        aria-label={`Go to project ${i + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}