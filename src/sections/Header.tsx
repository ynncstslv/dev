'use client';

import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import { useState } from 'react';

export default function Header() {
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, 'change', (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			const direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				// also set true for the initial state
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 1, y: -100 }}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
			>
				<div className="w-full fixed top-4 flex items-center justify-center z-50">
					<nav className="flex gap-2 p-0.5 border border-[#F8F8F2]/20 rounded-full bg-[#F8F8F2]/5 backdrop-blur">
						<a href="#" className="nav-item">
							Home
						</a>
						<a href="#about" className="nav-item">
							About
						</a>
						<a href="#projects" className="nav-item">
							Projects
						</a>
						<a
							href="mailto:ynncstslv@gmail.com"
							className="nav-item text-[#F8F8F2]/80 bg-[#F8F8F2]/10 hover:text-black/95 hover:bg-[#F8F8F2]"
						>
							Contact
						</a>
					</nav>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
