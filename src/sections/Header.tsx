export default function Header() {
	return (
		<div className="relative top-4 flex items-center justify-center">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur">
				<a href="#" className="nav-item">
					Home
				</a>
				<a href="#" className="nav-item">
					About
				</a>
				<a href="#" className="nav-item">
					Projects
				</a>
				<a
					href="#"
					className="nav-item text-black/95 bg-[#F8F8F2] hover:text-black/95 hover:bg-[#50FA7B]"
				>
					Contact
				</a>
			</nav>
		</div>
	);
}
