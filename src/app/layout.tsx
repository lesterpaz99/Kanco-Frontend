import { UserProvider } from '@auth0/nextjs-auth0/client';

import './globals.css';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalProvider } from './context/global-provider';
import { ThemeProvider } from './theme-provider';
import { Header } from './components/header';
import { SidebarMenu } from './components/sidebar-menu';

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
		<html lang='en' style={{ colorScheme: 'light' }} suppressHydrationWarning>
			<body className={inter.className}>
				<GlobalProvider>
					<UserProvider>
						<ThemeProvider attribute='class' defaultTheme='light'>
							<Header />
							<SidebarMenu />
							{children}
						</ThemeProvider>
					</UserProvider>
				</GlobalProvider>
			</body>
		</html>
	);
}
