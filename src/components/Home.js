export default function Home({ toggleDropdown, openModal, isDropdownOpen }) {
    return (
        <section
            id='home'
            className='text-center bg-container shadow-primary'
        >
            <h1 className='text-5xl font-extrabold text-primary mb-4'>
                🙋‍♀️ Hi, I'm Shauny — a Full-Stack Developer
            </h1>
            <p className='text-xl text-secondary mb-10'>
                I build fast, clean, and scalable web applications.<br />Scroll to find out more about me!
            </p>
            <div className='flex justify-center gap-4 relative'>
                <div
                    onClick={toggleDropdown}
                    className='bg-blue-600 hover:bg-blue-700 text-white btn-base'
                >
                    View Resume
                </div>

                {isDropdownOpen && (
                    <div className='absolute top-12 bg-white border border-gray-300 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-black w-40 z-20 text-left'>
                        <div
                            onClick={() => openModal('en')}
                            className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
                        >
                            English
                        </div>
                        <div
                            onClick={() => openModal('nl')}
                            className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
                        >
                            Dutch
                        </div>
                    </div>
                )}

                <a
                    href='https://github.com/ShaunyPersy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white btn-base'
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}