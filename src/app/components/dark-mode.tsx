'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { InputSwitch } from 'primereact/inputswitch';
// import { FaMoon, FaSun } from 'react-icons/fa'

export const DarkModeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleTheme = () => {
		const nextTheme = theme === 'dark' ? 'light' : 'dark';
		// dispatch(toggleTheme(nextTheme));
		setTheme(nextTheme);
	};

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<InputSwitch
			checked={theme === 'dark' ? true : false}
			onChange={handleTheme}
		/>
	);
};
