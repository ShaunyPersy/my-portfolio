import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './App.css';
import { useAppVM } from './AppVM';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const {
    isDropdownOpen,
    isModalOpen,
    resumeSrc,
    darkMode,
    toggleDropdown,
    openModal,
    closeModal,
    toggleDarkMode,
    sectionRefs,
    activeSection,
    visible,
    scrollToTop
  } = useAppVM();

  return (
    <div
      className={`flex min-h-screen font-sans overflow-x-hidden ${darkMode
        ? 'dark bg-gray-900 text-white'
        : 'bg-gray-100 text-gray-900'
        }`}
    >
      <aside className='w-64 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 fixed h-full flex flex-col items-center py-10 animate-slide-in-left shadow-lg z-10'>
        <h2 className='text-2xl font-bold mb-10 tracking-wide'>Shauny.dev</h2>
        <nav className='flex flex-col space-y-6 w-full items-center'>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-all duration-300 ease-in-out hover:scale-105 ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'}`}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <button
          onClick={toggleDarkMode}
          className='absolute top-4 right-4 text-white dark:text-gray-300'
          aria-label='Toggle dark mode'
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </aside>

      <main className='ml-64 flex-1 space-y-40 scroll-smooth'>
        <section
          id='home'
          ref={el => (sectionRefs.current.home = el)}
          className='component'
        >
          <Home
            toggleDropdown={toggleDropdown}
            openModal={openModal}
            isDropdownOpen={isDropdownOpen}
          />
        </section>

        <section
          id='about'
          ref={el => (sectionRefs.current.about = el)}
          className='component'
        >
          <About />
        </section>

        <section
          id='projects'
          ref={el => (sectionRefs.current.projects = el)}
          className='component'
        >
          <Projects />
        </section>

        <section
          id='skills'
          ref={el => (sectionRefs.current.skills = el)}
          className='component'
        >
          <Skills />
        </section>

        <section
          id='contact'
          ref={el => (sectionRefs.current.contact = el)}
          className='component'
        >
          <Contact />
        </section>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ boxSizing: 'border-box' }}
              className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-black w-4/5 h-full relative flex flex-col p-6'
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className='
                  absolute top-3 right-4
                  w-8 h-8
                  flex items-center justify-center
                  rounded-full
                  border
                  border-gray-300 dark:border-gray-600
                  bg-gray-200 dark:bg-gray-700
                  text-gray-600 dark:text-gray-300
                  hover:bg-red-500 hover:text-white
                  dark:hover:bg-red-600 dark:hover:text-white
                  transition-all
                  focus:outline-none
                  focus:ring-2 focus:ring-red-400
                '
                aria-label='Close modal'
              >
                ×
              </button>

              <h2 className='text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100'>
                📄 My Resume ({resumeSrc.includes('EN') ? 'EN' : 'NL'})
              </h2>

              <iframe
                src={resumeSrc}
                title='Resume'
                className='flex-grow rounded border border-gray-300 dark:border-gray-700 shadow-inner dark:shadow-black'
                style={{ width: '100%', border: 'none' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;