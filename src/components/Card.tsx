import { twMerge } from 'tailwind-merge';
import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';

export default function Card({
	className,
	children,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<>
			<div
				className={twMerge(
					'relative p-6 rounded-3xl bg-[#F8F8F2]/5 z-0 overflow-hidden after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:outline-[#F8F8F2]/15 after:-outline-offset-2 after:rounded-3xl after:z-10 after:pointer-events-none',
					className
				)}
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
