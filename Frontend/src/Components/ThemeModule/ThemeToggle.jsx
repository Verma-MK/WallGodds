import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme');
        if (initialTheme === 'dark') {
            document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
            document.body.classList.add('dark-theme');
            updateImages(true);
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    const isDarkMode = localStorage.getItem('theme') === 'dark';
                    if (isDarkMode) {
                        updateImages(true);
                    }
                }
            });
        });

        const config = { attributes: true, subtree: true, childList: true };
        observer.observe(document.body, config);

        return () => observer.disconnect();
    }, []);

    const updateImages = (isDarkMode) => {
        // Update Logo
        const logoElements = document.querySelectorAll('img[src*="Logo"]');
        logoElements.forEach(logo => {
            if (isDarkMode && !logo.src.includes('Logo-white.svg')) {
                logo.src = '/Logo-white.svg';
            } else if (!isDarkMode && !logo.src.includes('Logo.svg')) {
                logo.src = '/Logo.svg';
            }
        });

        // Update Download button
        const downloadElements = document.querySelectorAll('img[src*="DownloadButton"]');
        downloadElements.forEach(download => {
            if (isDarkMode && !download.src.includes('DownloadButton-white.svg')) {
                download.src = '/DownloadButton-white.svg';
            } else if (!isDarkMode && !download.src.includes('DownloadButton.svg')) {
                download.src = '/DownloadButton.svg';
            }
        });

        // Update Navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (isDarkMode) {
                navbar.style.backgroundColor = 'rgb(230, 225, 253)';
            } else {
                navbar.style.backgroundColor = 'white';
            }
        }
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
            document.body.classList.add('dark-theme');
            updateImages(true);
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.style.backgroundImage = "url('/BACKGROUND.svg')";
            document.body.classList.remove('dark-theme');
            updateImages(false);
            localStorage.setItem('theme', 'light');
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
