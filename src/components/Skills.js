import { motion } from 'framer-motion';
import { FaAws, FaJava } from "react-icons/fa";
import {
    SiAndroidstudio,
    SiAngular,
    SiBootstrap,
    SiCplusplus,
    SiDart,
    SiDocker,
    SiDotnet,
    SiElectron,
    SiFirebase,
    SiFlutter,
    SiGit,
    SiHelm,
    SiIonic,
    SiJavascript,
    SiKubernetes,
    SiLaravel,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiQt,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiVaadin
} from 'react-icons/si';

const skills = [
    // Language
    { name: 'JavaScript', category: 'Language', proficiency: 90, icon: SiJavascript },
    { name: 'TypeScript', category: 'Language', proficiency: 80, icon: SiTypescript },
    { name: 'PHP', category: 'Language', proficiency: 70, icon: SiPhp },
    { name: 'Java', category: 'Language', proficiency: 70, icon: FaJava },
    { name: 'C/C++/C#', category: 'Language', proficiency: 70, icon: SiCplusplus },
    { name: 'Python', category: 'Language', proficiency: 40, icon: SiPython },
    { name: 'Dart', category: 'Language', proficiency: 40, icon: SiDart },

    // Frontend
    { name: 'Angular', category: 'Frontend', proficiency: 70, icon: SiAngular },
    { name: 'Vaadin', category: 'Frontend', proficiency: 70, icon: SiVaadin },
    { name: '.NET', category: 'Frontend', proficiency: 60, icon: SiDotnet },
    { name: 'Laravel', category: 'Frontend', proficiency: 60, icon: SiLaravel },
    { name: 'Qt', category: 'Frontend', proficiency: 60, icon: SiQt },
    { name: 'React', category: 'Frontend', proficiency: 50, icon: SiReact },

    // Backend
    { name: 'Spring', category: 'Backend', proficiency: 70, icon: SiSpring },
    { name: 'Node.js', category: 'Backend', proficiency: 50, icon: SiNodedotjs },

    // App
    { name: 'Android Studio', category: 'App', proficiency: 60, icon: SiAndroidstudio },

    // Cross-platform
    { name: 'Ionic', category: 'Cross-platform', proficiency: 50, icon: SiIonic },
    { name: 'Electron', category: 'Cross-platform', proficiency: 50, icon: SiElectron },
    { name: 'Flutter', category: 'Cross-platform', proficiency: 40, icon: SiFlutter },

    // Styling
    { name: 'Tailwind CSS', category: 'Styling', proficiency: 75, icon: SiTailwindcss },
    { name: 'Bootstrap', category: 'Styling', proficiency: 70, icon: SiBootstrap },

    // Tools
    { name: 'Git', category: 'Tools', proficiency: 90, icon: SiGit },
    { name: 'Docker', category: 'Tools', proficiency: 60, icon: SiDocker },
    { name: 'Helm', category: 'Tools', proficiency: 40, icon: SiHelm },
    { name: 'Kubernetes', category: 'Tools', proficiency: 40, icon: SiKubernetes },

    // Cloud
    { name: 'Firebase', category: 'Cloud', proficiency: 50, icon: SiFirebase },
    { name: 'AWS', category: 'Cloud', proficiency: 40, icon: FaAws },
];


const groupByCategory = (arr) =>
    arr.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

export default function Skills() {
    const groupedSkills = groupByCategory(skills);

    return (
        <section id="skills" className="bg-container shadow-primary max-w-4xl mx-auto p-8 rounded-lg">
            <h2 className="title text-4xl mb-8 text-center font-bold">🛠 Skills</h2>

            {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
                <div key={category} className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {skillsInCategory.map(({ name, proficiency, icon: Icon }, i) => (
                            <motion.div
                                key={name}
                                className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
                            >
                                <Icon className="text-3xl text-blue-600 dark:text-blue-400" />
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1 font-semibold text-gray-900 dark:text-white">
                                        <span>{name}</span>
                                        <span>{proficiency}%</span>
                                    </div>
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                                            style={{ width: `${proficiency}%` }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}