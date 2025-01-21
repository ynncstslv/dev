import { twMerge } from 'tailwind-merge';
import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef } from 'react';

export default function Card({
	className,
	children,
	...other
}: ComponentPropsWithoutRef<'div'>) {
	return (
		<>
			<div
				className={twMerge(
					'relative rounded-3xl bg-[#141414] z-0 overflow-hidden after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:outline-[#F8F8F2]/15 after:-outline-offset-2 after:rounded-3xl after:z-10 after:pointer-events-none',
					className
				)}
				{...other}
			>
				<div
					className="absolute inset-0 -z-10 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				/>
				{children}
			</div>
		</>
	);
}
