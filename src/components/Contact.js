import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-container shadow-primary max-w-4xl mx-auto p-8 rounded-lg"
        >
            <h2 className="title mb-6 text-center">📬 Contact Me!</h2>
            <p className='text-center pb-10'>Thank you for taking the time to go through this portfolio. I hope you enjoyed it and perhaps till next time!</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-blue-600 dark:text-blue-400">

                <a
                    href="https://www.linkedin.com/in/shauny-persy-577459364/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center space-x-2 hover:text-blue-800"
                >
                    <FaLinkedin className="text-3xl" />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                    href="https://github.com/ShaunyPersy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-white"
                >
                    <FaGithub className="text-3xl" />
                    <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                    href="mailto:shaunypersy10@gmail.com"
                    aria-label="Email"
                    className="flex items-center space-x-2 hover:text-red-600"
                >
                    <FaEnvelope className="text-3xl" />
                    <span className="hidden sm:inline">shaunypersy10@gmail.com</span>
                </a>

                <a
                    href="tel:+32470881428"
                    aria-label="Phone"
                    className="flex items-center space-x-2 hover:text-green-600"
                >
                    <FaPhone className="text-3xl" />
                    <span className="hidden sm:inline">+32 470 88 14 28</span>
                </a>

            </div>
        </section>
    );
}