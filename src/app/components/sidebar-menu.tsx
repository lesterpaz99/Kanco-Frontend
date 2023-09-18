'use client';

// hooks
import { useAppDispatch, useAppSelector } from '../context/hooks';

import { toggleVisible } from '../context/features/menuSlice';

// components
import Link from 'next/link';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { ToggleSidebarBtn } from './toggle-sidebar-btn';
import { DarkModeSwitch } from './dark-mode';

// demo data
const demoData = [
	{
		name: 'Platform Board',
		id: 1,
	},
	{
		name: 'Calendar',
		id: 2,
	},
	{
		name: 'Something else here',
		id: 3,
	},
];

export const SidebarMenu = () => {
	const visible = useAppSelector((state) => state.menuReducer.visible);
	// const currentTheme = useAppSelector((state) => state.themeReducer.value);
	const dispatch = useAppDispatch();

	const switchSidebar = () => {
		dispatch(toggleVisible());
	};

	return (
		<>
			<Sidebar
				visible={visible}
				onHide={switchSidebar}
				dismissable={false}
				showCloseIcon={false}
				modal={false}
				baseZIndex={2}
				// w-sidebar is a custom utility in the tailwind config file
				maskClassName='w-sidebar h-screen relative border-r border-gray-300'
				pt={{
					header: {
						className:
							'bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark',
					},
					content: {
						className:
							'bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark',
					},
				}}
			>
				<div>
					{/* image */}
					<p>[KanCo Logo here]</p>
				</div>
				<p>All boards ([count of boards here])</p>
				<ul>
					{demoData.map((item) => (
						<li key={item.id}>
							<Link href={`/board/${item.id}`}>{item.name}</Link>
						</li>
					))}
					<li>Button to add new board here</li>
				</ul>
				<div>
					<DarkModeSwitch />
					<Button onClick={switchSidebar}>Hide Sidebar</Button>
				</div>
			</Sidebar>
			{!visible && <ToggleSidebarBtn />}
		</>
	);
};
