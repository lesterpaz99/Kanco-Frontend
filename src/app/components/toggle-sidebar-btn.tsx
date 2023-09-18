'use client';

import { Button } from 'primereact/button';
import { useAppDispatch } from '../context/hooks';
import { toggleVisible } from '../context/features/menuSlice';

export const ToggleSidebarBtn = () => {
	const dispatch = useAppDispatch();

	return (
		<div className='fixed bottom-10 left-0 rounded-tr-full rounded-br-full -translate-x-2 overflow-hidden'>
			<Button onClick={() => dispatch(toggleVisible())} type='button'>
				{'>'}
			</Button>
		</div>
	);
};
