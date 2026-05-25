import { MdSquare } from "react-icons/md";

const TableStatus = () => {
	return (
		<article className="mt-(--space-2xl) flex gap-(--space-l) mr-auto ml-auto">
			<section className="flex items-center gap-(--space-2xs)">
				<MdSquare className="fill-highlight-primary" />
				<p>Selected</p>
			</section>
			<section className="flex items-center gap-(--space-2xs)">
				<MdSquare className="fill-chart-4" />
				<p>Available</p>
			</section>
			<section className="flex items-center gap-(--space-2xs)">
				<MdSquare className="fill-chart-2" />
				<p>Reserved</p>
			</section>
		</article>
	);
};

export default TableStatus;
