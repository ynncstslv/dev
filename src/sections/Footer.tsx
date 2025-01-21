import { footerLinks } from '@/constants/constants';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export default function Footer() {
	return (
		<footer className="relative z-0 overflow-x-clip">
			<div className="w-[1600px] h-[400px] bottom-0 left-1/2 absolute -translate-x-1/2 bg-[#BD93F9]/25 -z-50 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
			<div className="container">
				<div className="flex flex-col items-center gap-6 py-6 text-sm border-t border-[#F8F8F2]/15 md:flex-row md:justify-between">
					<div className="text-[#F8F8F2]/40">
						&copy; 2025. All Rights Reserved.
					</div>
					<nav className="flex items-center gap-8">
						{footerLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								target="_blank"
								className="inline-flex items-center gap-1.5 transition duration-300 hover:scale-105"
							>
								<span className="font-semibold">{link.title}</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
