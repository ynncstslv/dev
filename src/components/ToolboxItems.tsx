import ToolIcon from '@/components/ToolIcon';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ToolboxItems({
	items,
	className,
	itemsWrapperClassName,
}: {
	items: { id: number; title: string; iconType: React.ElementType }[];
	className?: string;
	itemsWrapperClassName?: string;
}) {
	return (
		<div
			className={twMerge(
				'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
				className
			)}
		>
			<div
				className={twMerge(
					'flex flex-none gap-6 py-0.5 pr-6',
					itemsWrapperClassName
				)}
			>
				{[
					...new Array(2).fill(0).map((_, idx) => (
						<Fragment key={idx}>
							{items.map((item) => (
								<div
									key={item.id}
									className="inline-flex items-center gap-4 px-3 py-2 rounded-lg outline outline-2 outline-[#F8F8F2]/10"
								>
									<ToolIcon component={item.iconType} />
									<span className="font-semibold">{item.title}</span>
								</div>
							))}
						</Fragment>
					)),
				]}
			</div>
		</div>
	);
}
