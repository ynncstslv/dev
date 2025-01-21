import HeroOrbit from './HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export default function Orbit() {
	return (
		<>
			<HeroOrbit
				size={430}
				rotation={-14}
				shouldOrbit
				orbitDuration="40s"
				shouldSpin
				spinDuration="6s"
			>
				<SparkleIcon className="size-8 text-[#BD93F9]/15" />
			</HeroOrbit>
			<HeroOrbit
				size={440}
				rotation={79}
				shouldOrbit
				orbitDuration="42s"
				shouldSpin
				spinDuration="6s"
			>
				<SparkleIcon className="size-5 text-[#BD93F9]/15" />
			</HeroOrbit>
			<HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="44s">
				<div className="size-2 rounded-full bg-[#BD93F9]/5" />
			</HeroOrbit>
			<HeroOrbit
				size={530}
				rotation={178}
				shouldOrbit
				orbitDuration="46s"
				shouldSpin
				spinDuration="6s"
			>
				<SparkleIcon className="size-10 text-[#BD93F9]/15" />
			</HeroOrbit>
			<HeroOrbit
				size={550}
				rotation={20}
				shouldOrbit
				orbitDuration="48s"
				shouldSpin
				spinDuration="10s"
			>
				<StarIcon className="size-12 text-[#BD93F9]/40" />
			</HeroOrbit>
			<HeroOrbit
				size={590}
				rotation={98}
				shouldOrbit
				orbitDuration="50s"
				shouldSpin
				spinDuration="10s"
			>
				<StarIcon className="size-8 text-[#BD93F9]/40" />
			</HeroOrbit>
			<HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="52s">
				<div className="size-2 rounded-full bg-[#BD93F9]/5" />
			</HeroOrbit>
			<HeroOrbit
				size={710}
				rotation={144}
				shouldOrbit
				orbitDuration="54s"
				shouldSpin
				spinDuration="6s"
			>
				<SparkleIcon className="size-14 text-[#BD93F9]/15" />
			</HeroOrbit>
			<HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="56s">
				<div className="size-3 rounded-full bg-[#BD93F9]/5" />
			</HeroOrbit>
			<HeroOrbit
				size={800}
				rotation={-72}
				shouldOrbit
				orbitDuration="58s"
				shouldSpin
				spinDuration="10s"
			>
				<StarIcon className="size-28 text-[#BD93F9]/40" />
			</HeroOrbit>
		</>
	);
}
