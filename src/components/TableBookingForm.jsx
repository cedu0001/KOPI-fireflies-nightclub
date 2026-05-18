import Form from "next/form";
import { InputBasic } from "./ui/input";
import { Button } from "./ui/button";
const TableBookingForm = () => {
    return ( 
        <Form className="mb-16">
            <h2>BOOK A TABLE</h2>
            <section className="flex flex-wrap gap-4">
            <InputBasic type="text" placeholder="Your Full Name"
            className="max-w-148 min-w-48"/>
            <InputBasic type="email" placeholder="Your Email"
            className="max-w-148 min-w-48"/>
            <InputBasic type="number" placeholder="Table Number"
            className="max-w-148 min-w-48"/>
            <InputBasic type="number" placeholder="Number Of Guests"
            className="max-w-148 min-w-48"/>
            <select id="arrangement"
            className="w-full border border-input bg-transparent px-2.5 py-4 max-w-148 min-w-48 mb-4 file:bg-transparent text-text file:text-foreground">
                <option className="w-full">Mappes???</option>
            </select>
            <InputBasic type="tel" placeholder="Your Telephone Number"
            className="max-w-148 min-w-48"/>
            </section>
            <textarea
        placeholder="Your comment"
        type="text"
        className="h-40 border w-full outline-none px-2.5 pt-2.5 mb-8"
      />
      <div className="flex justify-end">
        <Button variant="secondary">
        RESERVE
        </Button>
      </div>
        </Form>
     );
}
 
export default TableBookingForm;