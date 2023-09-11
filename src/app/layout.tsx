import { UserProvider } from '@auth0/nextjs-auth0/client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalProvider } from './context/global-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'KanCo',
	description: 'Board for your day to learn',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<GlobalProvider>
				<UserProvider>
					<body className={inter.className}>{children}</body>
				</UserProvider>
			</GlobalProvider>
		</html>
	);
}
