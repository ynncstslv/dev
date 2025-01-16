import StarIcon from '@/assets/icons/star.svg';

const keywords = [
	'Efficient',
	'Scalable',
	'Secure',
	'Functional',
	'Creative',
	'High-Performance',
	'Reliable',
	'Seamless',
	'Innovative',
	'Maintainable',
	'Accessible',
	'User-Centered',
];

export default function Tape() {
	return (
		<div className="py-16 overflow-x-clip lg:py-24">
			<div className="-mx-1 bg-gradient-to-r from-[#50FA7B] to-[#8BE9FD] -rotate-3">
				<div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
					<div className="flex flex-none gap-4 py-3">
						{keywords.map((word) => (
							<div key={word} className="inline-flex items-center gap-4">
								<span className="font-extrabold text-sm text-black/95 uppercase">
									{word}
								</span>
								<StarIcon className="size-6 text-black/95 -rotate-12" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
