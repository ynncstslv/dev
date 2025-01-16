export default function Header() {
	return (
		<div className="w-full fixed top-4 flex items-center justify-center z-50">
			<nav className="flex gap-2 p-0.5 border border-[#F8F8F2]/20 rounded-full bg-[#F8F8F2]/5 backdrop-blur">
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
					className="nav-item text-[#F8F8F2]/80 bg-[#F8F8F2]/10 hover:text-black/95 hover:bg-[#F8F8F2]"
				>
					Contact
				</a>
			</nav>
		</div>
	);
}
