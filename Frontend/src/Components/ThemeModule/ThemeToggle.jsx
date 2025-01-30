import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme');
        if (initialTheme === 'dark') {
            document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
            document.body.classList.add('dark-theme');
            updateLogo(true);
        }

        // Create MutationObserver to watch for logo changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    const isDarkMode = localStorage.getItem('theme') === 'dark';
                    if (isDarkMode) {
                        updateLogo(true);
                    }
                }
            });
        });

        // Start observing the document for logo changes
        const config = { attributes: true, subtree: true, childList: true };
        observer.observe(document.body, config);

        return () => observer.disconnect();
    }, []);

    const updateLogo = (isDarkMode) => {
        const logoElements = document.querySelectorAll('img[src*="Logo"]');
        logoElements.forEach(logo => {
            if (isDarkMode && !logo.src.includes('Logo-white.svg')) {
                logo.src = '/Logo-white.svg';
            } else if (!isDarkMode && !logo.src.includes('Logo.svg')) {
                logo.src = '/Logo.svg';
            }
        });
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
            document.body.classList.add('dark-theme');
            updateLogo(true);
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.style.backgroundImage = "url('/BACKGROUND.svg')";
            document.body.classList.remove('dark-theme');
            updateLogo(false);
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
