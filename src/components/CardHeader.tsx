import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

export default function CardHeader({
	title,
	description,
	className,
}: {
	title: string;
	description: string;
	className?: string;
}) {
	return (
		<>
			<div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
				<div className="inline-flex items-center gap-2">
					<StarIcon className="size-9 text-[#BD93F9]" />
					<h3 className="font-serif text-2xl">{title}</h3>
				</div>
				<p className="mt-2 text-xs text-[#F8F8F2]/50 lg:text-sm">
					{description}
				</p>
			</div>
		</>
	);
}
