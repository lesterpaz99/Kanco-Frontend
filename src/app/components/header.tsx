'use client';

// hooks
import { useAppSelector } from '../context/hooks';
import { useUser } from '@auth0/nextjs-auth0/client';

// components
import Image from 'next/image';
import { Button } from 'primereact/button';

export const Header = () => {
	const menuSelected = useAppSelector(
		(state) => state.menuReducer.selectedMenu
	);
	const isMenuVisible = useAppSelector((state) => state.menuReducer.visible);
	const { user, error, isLoading } = useUser();

	if (error) return 'error';
	if (isLoading) return 'Loading...';

	return (
		<header
			className={`flex flex-1 p-2 absolute z-[9999] transition-all duration-300 justify-between items-center bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark ${
				isMenuVisible
					? 'translate-x-sidebar w-custom-header'
					: 'translate-x-0 w-full'
			}`}
		>
			<p>{menuSelected}</p>
			<div className='flex justify-between items-center'>
				{/* <Button>Test Btn</Button> */}
				{user ? <Button>Logout</Button> : <Button>Login</Button>}
				{/* <Image src={user?.picture || ''} className="rounded-full" width={54} height={54} alt={user?.name || 'User'} /> */}
			</div>
		</header>
	);
};
