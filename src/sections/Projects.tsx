import Image from 'next/image';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { portfolioProjects } from '@/constants/constants';

export default function Projects() {
	return (
		<section className="py-16 lg:py-24">
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
