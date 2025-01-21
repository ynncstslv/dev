import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';
import onRepeatImage from '@/assets/images/on-repeat.png';
import mapImage from '@/assets/images/map.png';
import memojiSmileImage from '@/assets/images/memoji-smile.png';
import { hobbies, toolboxItems } from '@/constants/constants';

export default function About() {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My World"
					description="Learn more about who I am, what I do, and what inspires me."
				/>
				<div className="flex flex-col gap-8 mt-20">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[440px] flex flex-col p-0 md:h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader title="whoami" description="Hi 👋, I'm Yann!" />
							<div className="px-6 pb-6 font-light text-xs leading-6 text-[#F8F8F2]/80 md:px-8 md:pb-8 lg:px-6 lg:text-sm">
								<p>
									I am a software engineer focused on creating clean, scalable
									solutions. Specializing in backend development with Go, I also
									work with TypeScript, React, Next.js, and have a background in
									cybersecurity, focusing on penetration testing and bug bounty
									hunting. With a creative background in graphic design and
									sound engineering, I bring a unique perspective, blending
									technical precision with innovative design.
								</p>
								<p className="mt-4">
									I am motivated by the challenge of building functional,
									user-centered solutions that provide seamless experiences.
								</p>
							</div>
						</Card>
						<Card className="h-[320px] relative p-0 md:col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="Map"
								className="w-full h-full object-cover object-left-top"
							/>
							<div className="size-16 absolute top-1/2 left-1/2 rounded-full bg-gradient-to-r from-[#FF79C6] to-[#BD93F9] after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-black/5 after:rounded-full">
								<Image
									src={memojiSmileImage}
									alt="Smiling Emoji"
									className="size-16"
								/>
							</div>
						</Card>
					</div>
					<div>
						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Tech Stack"
								description="The main tools I use to craft digital experiences."
							/>
							<ToolboxItems items={toolboxItems} />
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="-translate-x-1/2"
							/>
						</Card>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="On Repeat"
								description="Listen to music that inspires me."
							/>
							<div className="mx-auto px-6 mt-2 md:mt-0">
								<Image src={onRepeatImage} alt="Playlist" />
							</div>
						</Card>
						<Card className="h-[320px] flex flex-col p-0 md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond the Code"
								description="Explore my interests outside the digital realm."
								className="px-6 py-6"
							/>
							<div className="relative flex-1">
								{hobbies.map((hobby) => (
									<div
										key={hobby.id}
										className="absolute inline-flex items-center gap-2 px-6 py-1.5 rounded-full border-2 border-[#BD93F9] bg-black"
										style={{ left: hobby.left, top: hobby.top }}
									>
										<span>{hobby.emoji}</span>
										<span className="font-medium text-sm">{hobby.title}</span>
									</div>
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
