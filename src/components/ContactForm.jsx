import { InputBasic } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return ( 
        <article className="max-w-[700px] mr-auto ml-auto">
<InputBasic placeholder="Your name" type="text"/>
<InputBasic placeholder="Your email" type="email"/>
<textarea placeholder="Your comment" type="text" className="h-40 border w-full outline-none px-2.5"/>
<div className="flex justify-end">
<Button variant="secondary" className="mt-8" type="submit">SEND</Button>
</div>
        </article>
     );
}
 
export default ContactForm