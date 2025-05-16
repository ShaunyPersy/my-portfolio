import { useEffect, useRef, useState } from 'react';

export function useAppVM() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resumeSrc, setResumeSrc] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [visible, setVisible] = useState(false);

    const sectionRefs = useRef({
        home: null,
        about: null,
        projects: null,
        skills: null,
        contact: null,
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length === 0) return;

                visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                setActiveSection(visibleEntries[0].target.id);
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
                rootMargin: '-50% 0px -50% 0px',
            }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            Object.values(sectionRefs.current).forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const openModal = (lang) => {
        const path =
            lang === 'en'
                ? '/cv_developer_shauny_persy_EN.pdf'
                : '/cv_developer_shauny_persy.pdf';
        setResumeSrc(path);
        setIsModalOpen(true);
        setIsDropdownOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setResumeSrc('');
    };

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return {
        isDropdownOpen,
        setIsDropdownOpen,
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
    };
}