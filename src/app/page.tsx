// pages/index.js
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

// Index Page
export default function Page() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div>
				Welcome
				<Image
					src={user.picture || ''}
					width={54}
					height={54}
					alt={user.name || 'User'}
				/>
				{user.name}! <a href='/api/auth/logout'>Logout</a>
			</div>
		);
	}

	return <a href='/api/auth/login'>Login</a>;
}
