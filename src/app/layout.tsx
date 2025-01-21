import type { Metadata } from 'next';
import { Calistoga, Inter } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

export const metadata: Metadata = {
	title: 'Yann Costa e Silva | Home',
	description:
		'I am a software engineer focused on creating clean, scalable solutions. Specializing in backend development with Go, I also work with TypeScript, React, Next.js, and have a background in cybersecurity, focusing on penetration testing and bug bounty hunting. With a creative background in graphic design and sound engineering, I bring a unique perspective, blending technical precision with innovative design.',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-serif',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'font-sans text-[#F8F8F2] bg-black/95 antialiased'
				)}
			>
				{children}
			</body>
		</html>
	);
}
