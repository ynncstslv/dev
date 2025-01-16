import Image from 'next/image';
import memojiZaheer from '@/assets/images/memoji-avatar-1.png';
import memojiOzden from '@/assets/images/memoji-avatar-2.png';
import memojiSamuelson from '@/assets/images/memoji-avatar-3.png';
import memojiCatarina from '@/assets/images/memoji-avatar-4.png';
import memojiJoaoPedro from '@/assets/images/memoji-avatar-5.png';
import memojiPadmaja from '@/assets/images/memoji-avatar-6.png';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

const testimonials = [
	{
		id: 1,
		name: 'P.A. Zaheer',
		position: 'Product Owner @ HP Inc.',
		text: 'I truly appreciated all your efforts. You always stayed on top of deadlines and approached every task with professionalism.',
		avatar: memojiZaheer,
	},
	{
		id: 2,
		name: 'P. Nandigam',
		position: 'Lead DevOps @ HP Inc.',
		text: 'Thank you for sharing your knowledge and supporting my projects. Your contributions made a real difference to our work.',
		avatar: memojiPadmaja,
	},
	{
		id: 3,
		name: 'O. Firat',
		position: 'Quality Assurance @ HP Inc.',
		text: 'Working with you was a great pleasure. Your dedication and eagerness to help the team really stood out.',
		avatar: memojiOzden,
	},
	{
		id: 4,
		name: 'J.P. Leite',
		position: 'Product Owner @ Guaia',
		text: 'Your attention to detail and proactive approach ensure we meet our product goals. It’s great having someone so committed on the team.',
		avatar: memojiJoaoPedro,
	},
	{
		id: 5,
		name: 'C. Miranda',
		position: 'Product Manager @ Guaia',
		text: 'Your professionalism and dedication consistently drive results. You align technical expertise with our broader business objectives effortlessly.',
		avatar: memojiCatarina,
	},
	{
		id: 6,
		name: 'S. Esteves',
		position: 'Software Engineer @ Guaia',
		text: 'It’s been a pleasure collaborating with you. Your technical insights and collaborative spirit have elevated our development process.',
		avatar: memojiSamuelson,
	},
];

export default function Testimonials() {
	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Teamwork"
					title="Testimonials"
					description="Don't just take my word for it. See what the people I worked with
				have to say about me."
				/>
				<div className="flex mt-16 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24">
					<div className="flex flex-none gap-8">
						{testimonials.map((testimonial) => (
							<Card
								key={testimonial.id}
								className="max-w-xs p-6 md:max-w-md md:p-8"
							>
								<div className="flex items-center gap-4">
									<div className="size-14 inline-flex items-center flex-shrink-0 justify-center rounded-full bg-[#F8F8F2]/10">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											className="max-h-full p-0.5"
										/>
									</div>
									<div>
										<h1 className="font-semibold">{testimonial.name}</h1>
										<h2 className="text-xs text-[#F8F8F2]/40">
											{testimonial.position}
										</h2>
									</div>
								</div>
								<p className="mt-4 text-sm text-[#F8F8F2]/90 md:mt-6 md:text-base">
									{testimonial.text}
								</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
