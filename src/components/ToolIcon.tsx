export default function ToolIcon({
	component,
}: {
	component: React.ElementType;
}) {
	const Component = component;
	return (
		<>
			<Component className="size-10 fill-[url(#tech-icon-gradient)]" />
			<svg className="size-0 absolute">
				<linearGradient id="tech-icon-gradient">
					<stop offset="0%" stopColor="#FF79C6" />
					<stop offset="100%" stopColor="#BD93F9" />
				</linearGradient>
			</svg>
		</>
	);
}
