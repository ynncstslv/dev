import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { testimonials } from '@/constants/constants';
import { Fragment } from 'react';

export default function Testimonials() {
	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Teamwork"
					title="Testimonials"
					description="Don't just take my word for it. See what the people I worked with
				have to say about me."
				/>
				<div className="flex mt-12 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24 py-4 -my-4">
					<div className="flex flex-none gap-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] pr-8">
						{[...new Array(2)].fill(0).map((_, idx) => (
							<Fragment key={idx}>
								{testimonials.map((testimonial) => (
									<Card
										key={testimonial.id}
										className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-2 transition duration-300"
									>
										<div className="flex items-center gap-4">
											<div className="size-14 inline-flex items-center flex-shrink-0 justify-center rounded-full bg-[#F8F8F2]/10">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													className="max-h-full p-0.5"
												/>
											</div>
											<div>
												<h1 className="font-semibold">{testimonial.name}</h1>
												<h2 className="text-xs text-[#F8F8F2]/40">
													{testimonial.position}
												</h2>
											</div>
										</div>
										<p className="mt-4 text-sm text-[#F8F8F2]/90 md:mt-6 md:text-base">
											{testimonial.text}
										</p>
									</Card>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
