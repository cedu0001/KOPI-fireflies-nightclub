import { MdSquare } from "react-icons/md";

const TableStatus = () => {
    return ( 
        <article className="mt-16 flex gap-8 mr-auto ml-auto">
            <section className="flex items-center gap-2"><MdSquare className="fill-highlight-primary" /><p>Selected</p></section>
            <section className="flex items-center gap-2"><MdSquare className="fill-chart-4" /><p>Available</p></section>
            <section className="flex items-center gap-2"><MdSquare className="fill-chart-2" /><p>Reserved</p></section>
        </article>
     );
}
 
export default TableStatus;