import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export default function Contact() {
	return (
		<section className="pt-12 pb-16 lg:pt-20 lg:pb-24">
			<div className="container">
				<div className="relative px-10 py-8 text-center text-black/95 rounded-3xl bg-gradient-to-r from-[#FF79C6] to-[#BD93F9] z-10 overflow-hidden md:text-left">
					<div
						className="absolute inset-0 -z-10 opacity-5"
						style={{ backgroundImage: `url(${grainImage.src})` }}
					/>
					<div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">
								Let&apos;s create something amazing together!
							</h2>
							<p className="mt-2 text-sm md:text-base">
								Ready to bring your next project to life? Let&apos;s connect and
								discuss how I can help you achieve your goals.
							</p>
						</div>
						<div>
							<a href="mailto:ynncstslv@gmail.com">
								<button className="w-max h-12 inline-flex items-center gap-2 px-6 text-white border border-black/95 rounded-xl bg-black/95 transition duration-300 hover:scale-95">
									<span className="font-semibold">Contact Me</span>
									<ArrowUpRightIcon className="size-4" />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
