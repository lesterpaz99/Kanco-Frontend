"use client"

import { useAppSelector } from "../context/hooks";
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { Button } from 'primereact/button';

export const Header = () => {
	const menuSelected = useAppSelector((state) => state.menuReducer.value);
	const { user, error, isLoading } = useUser();

	return <header className='p-2 flex justify-between items-center bg-secondary-light dark:bg-secondary-dark'>
		<p>{menuSelected}</p>
		<div className="flex justify-between items-center">
			{/* <Button>Test Btn</Button> */}
			{
				user ? <Button>Logout</Button> : <Button>Login</Button>
			}
			{/* <Image src={user?.picture || ''} className="rounded-full" width={54} height={54} alt={user?.name || 'User'} /> */}
		</div>
	</header>;
};
