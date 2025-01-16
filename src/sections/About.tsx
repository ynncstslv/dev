import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import onRepeatImage from '@/assets/images/on-repeat.png';
import Image from 'next/image';
import ReactIcon from '@/assets/icons/devicons/react.svg';
import NextIcon from '@/assets/icons/devicons/next.svg';
import TypeScriptIcon from '@/assets/icons/devicons/typescript.svg';
import GoIcon from '@/assets/icons/devicons/go.svg';
import PythonIcon from '@/assets/icons/devicons/python.svg';
import GitIcon from '@/assets/icons/devicons/git.svg';
import mapImage from '@/assets/images/map.png';
import memojiSmileImage from '@/assets/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';

const toolboxItems = [
	{
		id: 1,
		title: 'React',
		iconType: ReactIcon,
	},
	{
		id: 2,
		title: 'Next.js',
		iconType: NextIcon,
	},
	{
		id: 3,
		title: 'TypeScript',
		iconType: TypeScriptIcon,
	},
	{
		id: 4,
		title: 'Go',
		iconType: GoIcon,
	},
	{
		id: 5,
		title: 'Python',
		iconType: PythonIcon,
	},
	{
		id: 6,
		title: 'Git',
		iconType: GitIcon,
	},
];

const hobbies = [
	{
		id: 1,
		title: 'Concerts',
		emoji: '🎸',
		left: '5%',
		top: '5%',
	},
	{
		id: 2,
		title: 'Gaming',
		emoji: '🎮',
		left: '50%',
		top: '5%',
	},
	{
		id: 3,
		title: 'Painting',
		emoji: '🎨',
		left: '10%',
		top: '35%',
	},
	{
		id: 4,
		title: 'Reading',
		emoji: '📚',
		left: '35%',
		top: '40%',
	},
	{
		id: 5,
		title: 'Gym',
		emoji: '🏋🏻',
		left: '70%',
		top: '45%',
	},
	{
		id: 6,
		title: 'Do Nothing',
		emoji: '😴',
		left: '5%',
		top: '65%',
	},
];

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
					<div>
						<Card>
							<CardHeader title="whoami" description="Hi 👋, I'm Yann!" />
							<div className="px-6 pb-6 font-light text-sm leading-6 text-[#F8F8F2]/80 md:px-8 md:pb-8 lg:px-6 lg:text-base">
								<p>
									As a software engineer, I am passionate about creating clean,
									efficient, high-performance, and scalable solutions that solve
									real-world problems. With a strong focus on backend
									development using Go, my curiosity and commitment to
									continuous learning have led me to also work in frontend
									development with TypeScript, React, and Next.js, as well as in
									cybersecurity, specializing in offensive security through
									penetration testing and bug bounty hunting.
								</p>
								<p className="mt-4">
									In addition to my technical expertise, I have a creative
									background in graphic design and sound engineering, which
									allows me to approach development with a unique
									perspective—balancing technical precision with creative
									innovation.
								</p>
								<p className="mt-4">
									At my core, I am driven by the challenge of building solutions
									that are not only functional but also deliver seamless,
									user-centered experiences.
								</p>
							</div>
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
				</div>
			</div>
		</section>
	);
}
