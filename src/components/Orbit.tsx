import HeroOrbit from './HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export default function Orbit() {
	return (
		<>
			<HeroOrbit size={800} rotation={-72}>
				<StarIcon className="size-28 text-[#F1FA8C]" />
			</HeroOrbit>
			<HeroOrbit size={550} rotation={20}>
				<StarIcon className="size-12 text-[#F1FA8C]" />
			</HeroOrbit>
			<HeroOrbit size={590} rotation={98}>
				<StarIcon className="size-8 text-[#F1FA8C]" />
			</HeroOrbit>
			<HeroOrbit size={430} rotation={-14}>
				<SparkleIcon className="size-8 text-[#F1FA8C]/20" />
			</HeroOrbit>
			<HeroOrbit size={440} rotation={79}>
				<SparkleIcon className="size-5 text-[#F1FA8C]/20" />
			</HeroOrbit>
			<HeroOrbit size={530} rotation={178}>
				<SparkleIcon className="size-10 text-[#F1FA8C]/20" />
			</HeroOrbit>
			<HeroOrbit size={710} rotation={144}>
				<SparkleIcon className="size-14 text-[#F1FA8C]/20" />
			</HeroOrbit>
			<HeroOrbit size={720} rotation={85}>
				<div className="size-3 rounded-full bg-[#F1FA8C]/10" />
			</HeroOrbit>
			<HeroOrbit size={520} rotation={-41}>
				<div className="size-2 rounded-full bg-[#F1FA8C]/10" />
			</HeroOrbit>
			<HeroOrbit size={650} rotation={-5}>
				<div className="size-2 rounded-full bg-[#F1FA8C]/10" />
			</HeroOrbit>
		</>
	);
}
