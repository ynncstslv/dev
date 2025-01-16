import Image from 'next/image';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

const portfolioProjects = [
	{
		key: 1,
		company: 'Guaia',
		year: '2025',
		title: 'Skriptr',
		results: [
			{ key: '1.1', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '1.2', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '1.3', title: 'Lorem ipsum dolor sit amet.' },
		],
		link: 'https://placeholder.com/001',
		image: darkSaasLandingPage,
	},
	{
		key: 2,
		company: 'Guaia',
		year: '2025',
		title: 'Scrapr',
		results: [
			{ key: '2.1', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '2.2', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '2.3', title: 'Lorem ipsum dolor sit amet.' },
		],
		link: 'https://placeholder.com/002',
		image: lightSaasLandingPage,
	},
	{
		key: 3,
		company: 'Guaia',
		year: '2025',
		title: 'Trackr',
		results: [
			{ key: '3.1', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '3.2', title: 'Lorem ipsum dolor sit amet.' },
			{ key: '3.3', title: 'Lorem ipsum dolor sit amet.' },
		],
		link: 'https://placeholder.com/003',
		image: aiStartupLandingPage,
	},
];

export default function Projects() {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Real-World Results"
					title="Featured Projects"
					description="See how I transformed concepts into engaging digital experiences."
				/>
				<div className="flex flex-col gap-16 mt-10 md:mt-20">
					{portfolioProjects.map((project) => (
						<Card
							key={project.key}
							className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
						>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="inline-flex gap-2 text-xs font-bold tracking-widest uppercase text-transparent bg-gradient-to-r from-[#FF79C6] to-[#BD93F9] bg-clip-text">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className="mt-2 font-serif text-2xl tracking-wide md:mt-5 md:text-4xl">
										{project.title}
									</h3>
									<hr className="mt-4 border-t-2 border-[#F8F8F2]/5 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result) => (
											<li
												key={result.key}
												className="flex gap-2 text-sm text-[#F8F8F2]/40 md:text-base"
											>
												<CheckIcon className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className="w-full h-12 inline-flex items-center justify-center gap-2 mt-8 font-semibold text-[#BD93F9] border rounded-xl border-[#BD93F9] bg-transparent transition duration-300 hover:text-black/95 hover:border hover:border-[#F8F8F2] hover:bg-[#F8F8F2] hover:scale-95 md:w-auto md:px-6">
											<span>View Code</span>
											<ArrowUpRightIcon className="size-4" />
										</button>
									</a>
								</div>
								<div className="lg:relative">
									<Image
										src={project.image}
										alt={project.title}
										className="mt-8 -mb-4 md:-mb-0 lg:w-auto lg:max-w-none lg:h-full lg:absolute lg:mt-0"
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
