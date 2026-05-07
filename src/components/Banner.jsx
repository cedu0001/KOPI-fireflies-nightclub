import Image from "next/image";

const Banner = ({title}) => {
    return ( 
        <article className="relative mb-20">
            <Image
            src="/assets/bg/footerbg.jpg"
            width="1600"
            height="270"
            alt="hans in the air, like you don't care"
            className="object-cover max-h-35 opacity-20"/>
            <section className="absolute grid inset-0 place-items-center">
                <div className="flex flex-col gap-0 items-center">
                <h2 className="!py-0 leading-none">{title}</h2>
                <Image
                src="/assets/bottom_line.png"
                width="240"
                height="2"
                alt="Underlining text above"/>
                </div>
            </section>
        </article>
     );
}
 
export default Banner;