// pages/index.js
'use client';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Header } from './components/header';
import { SidebarMenu } from './components/sidebar-menu';

// Index Page
export default function Page() {
	return <PrimeReactProvider>
		<SidebarMenu />
		<Header />
	</PrimeReactProvider>
}
