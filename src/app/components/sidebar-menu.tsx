"use client"

import { useState } from "react";

// hooks
import { useAppSelector } from "../context/hooks";

// components
import Link from 'next/link';
import { InputSwitch } from 'primereact/inputswitch';
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export const SidebarMenu = () => {
	const [visible, setVisible] = useState(true);
	const menuSelected = useAppSelector((state) => state.menuReducer.value);

	const demoData = [
		{
			name: 'Platform Board',
			id: 1,
		}, {
			name: 'Calendar',
			id: 2,
		},
		{
			name: 'Something else here',
			id: 3,
		}
]

	return <aside>
		{/* I want to show the sidebar without the overlay */}
		<Sidebar visible={visible} onHide={() => setVisible(!visible)} dismissable={false} showCloseIcon={false}  	modal={false}
			style={{ width: '300px', position: 'fixed' }}
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
				<div>
				{/* <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /> */}
				</div>
				<Button onClick={() => setVisible(!visible)}>Hide Sidebar</Button>
			</div>
		</Sidebar>
	</aside>;
};
