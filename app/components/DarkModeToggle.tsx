"use client";
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Membaca memori browser, apakah sebelumnya user pakai mode gelap?
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="text-gray-600 hover:text-[#1B4D3E] focus:outline-none transition mr-4" aria-label="Toggle Dark Mode">
      <i className={`fas ${isDark ? 'fa-sun text-yellow-500' : 'fa-moon'} text-xl`}></i>
    </button>
  );
}