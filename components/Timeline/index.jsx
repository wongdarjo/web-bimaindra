import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const Timeline = (props) => {
	return (
		<ol className="relative ml-4 border-l border-gray-200 dark:border-gray-700">
			{props.timeline.map((item, index) => {
				return (
					<li className="mb-8 ml-6 last:mb-0 md:mb-10 lg:mb-12" key={index}>
						<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-slate-100 dark:ring-gray-900">
							{item.type === 'education' ? <AcademicCapIcon /> : <BriefcaseIcon />}
						</span>
						<h3 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white md:text-lg">
							{item.title}
							{index === 0 ? (
								<span className="mr-2 ml-3 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
									Latest
								</span>
							) : (
								''
							)}
						</h3>
						<time className="mb-2 block text-xs font-light leading-none text-gray-800 dark:text-gray-500 md:text-sm">
							{item.date}
						</time>
						<span className="mb-2 block text-xs font-light leading-none text-gray-800 dark:text-gray-500 md:text-sm">
							{item.location}
						</span>
						<p className="mb-2 text-sm text-gray-500 dark:text-gray-800 md:text-base">{item.description}</p>
					</li>
				);
			})}
		</ol>
	);
};

export default Timeline;
