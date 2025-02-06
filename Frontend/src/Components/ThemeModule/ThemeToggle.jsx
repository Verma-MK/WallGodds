import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const location = useLocation();

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme');
        if (initialTheme === 'dark') {
            applyDarkTheme();
        }
    }, []);

    // Re-apply theme on route change
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            applyDarkTheme();
        }
    }, [location]);

    const applyDarkTheme = () => {
        document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
        document.body.classList.add('dark-theme');
        document.body.style.color = 'white';
        updateImages(true);
    };

    const applyLightTheme = () => {
        document.body.style.backgroundImage = "url('/BACKGROUND.svg')";
        document.body.classList.remove('dark-theme');
        document.body.style.color = 'black';
        updateImages(false);
    };

    const updateImages = (isDarkMode) => {
        setTimeout(() => {
            // Update Logo
            document.querySelectorAll('img[src*="Logo"]').forEach(logo => {
                logo.src = isDarkMode ? '/Logo-white.svg' : '/Logo.svg';
            });

            // Update Download button
            document.querySelectorAll('img[src*="DownloadButton"]').forEach(download => {
                download.src = isDarkMode ? '/DownloadButton-white.svg' : '/DownloadButton.svg';
            });

            // Update Search icon
            // document.querySelectorAll('img[alt="Search"]').forEach(icon => {
            //     icon.src = isDarkMode ? '/SearchIcon-dark.svg' : '/SearchIcon.svg';
            // });

            // Update Profile icon
            // document.querySelectorAll('img[alt="Profile"]').forEach(icon => {
            //     icon.src = isDarkMode ? '/ProfileIcon-dark.svg' : '/ProfileIcon.svg';
            // });
        }, 0);
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        
        if (newTheme) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    };

    return (
        <button 
            className={styles['theme-toggle']} 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
