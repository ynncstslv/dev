export default function SectionHeader({
	title,
	eyebrow,
	description,
}: {
	title: string;
	eyebrow: string;
	description: string;
}) {
	return (
		<>
			<div className="flex justify-center">
				<p className="font-semibold tracking-widest uppercase text-transparent bg-gradient-to-r from-[#50FA7B] to-[#8BE9FD] bg-clip-text">
					{eyebrow}
				</p>
			</div>
			<h2 className="mt-6 font-serif text-3xl text-center md:text-5xl">
				{title}
			</h2>
			<p className="max-w-md mx-auto mt-2 font-light text-sm text-center text-[#F8F8F2]/50 md:text-lg">
				{description}
			</p>
		</>
	);
}
