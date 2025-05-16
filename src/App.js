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
    darkMode,
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
          <Home />
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