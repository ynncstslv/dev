import Image from 'next/image';
import Orbit from '@/components/Orbit';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export default function Hero() {
	return (
		<div className="relative py-32 overflow-x-clip z-0 md:py-48 lg:py-60">
			<div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				/>
				<div className="size-[620px] hero-ring" />
				<div className="size-[820px] hero-ring" />
				<div className="size-[1020px] hero-ring" />
				<div className="size-[1220px] hero-ring" />
				<Orbit />
			</div>
			<div className="container">
				<div className="flex flex-col items-center">
					<Image src={memojiImage} alt="Emoji me" className="size-[100px]" />
					<div className="inline-flex items-center gap-4 px-4 py-1.5 border rounded-lg border-[#282A36]/80 bg-black">
						<div className="size-2.5 rounded-full bg-[#50FA7B]" />
						<p className="text-sm font-normal">Available to Work</p>
					</div>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="mt-8 font-serif text-3xl text-center tracking-wide md:text-5xl">
						Transforming Ideas into Solutions
					</h1>
					<p className="mt-4 font-light text-sm text-center text-[#F8F8F2]/50 md:text-lg lg:text-base">
						I am passionate about creating clean, efficient, high-performance,
						and scalable software that solve real-world problems. Let&apos;s
						discuss your idea!
					</p>
				</div>
				<div className="flex flex-col items-center gap-4 mt-8 md:flex-row md:justify-center">
					<button className="h-12 inline-flex items-center gap-2 px-6 border rounded-xl border-[#F8F8F2]/25 transition duration-300 hover:text-[#50FA7B] hover:border-[#50FA7B]/30">
						<span>📁</span>
						<span className="font-semibold">Explore Projects</span>
					</button>
					<button className="h-12 inline-flex items-center gap-2 px-6 text-black/95 rounded-xl bg-[#F8F8F2] transition duration-300 hover:text-black/95 hover:bg-[#50FA7B]">
						<ArrowDown className="size-4" />
						<span className="font-semibold">Download CV</span>
					</button>
				</div>
			</div>
		</div>
	);
}
