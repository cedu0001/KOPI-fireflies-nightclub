import Image from "next/image";
import Headline from "./Headline";

const MobileBlog = () => {
	return (
		<section className="flex flex-col items-center gap-(--space-xs) my-(--space-xl) p-(--space-2xl) full-width sm:hidden">
			<Headline title="RECENT BLOG" />
			<article className="max-w-[352px] mx-auto my-(--space-m)">
				<Image
					src="/assets/content-img/blog_full1.jpg"
					height={243}
					width={352}
					alt="Closeup photo of a DJ's hand spinning a record"
				></Image>
				<h4>MORE THAN 20 YEA...</h4>
				<p className="!text-(--highlight-secondary) font-medium">BY: Admin / 3 Comments / 16 Nov 2018</p>
				<p className="!text-(length:--step--1)">
					It is a long established fact that a reader will be distracted by the readable content of a page when
					looking at its layout
				</p>
			</article>
			<article className="max-w-[352px] mx-auto my-(--space-m)">
				<Image
					src="/assets/content-img/blog_full2.jpg"
					height={243}
					width={352}
					alt="A photo of a DJ mixing music"
				></Image>
				<h4>MORE THAN 20 YEA...</h4>
				<p className="!text-(--highlight-secondary) font-medium">BY: Admin / 3 Comments / 16 Nov 2018</p>
				<p className="!text-(length:--step--1)">
					It is a long established fact that a reader will be distracted by the readable content of a page when
					looking at its layout
				</p>
			</article>
			<article className="max-w-[352px] mx-auto my-(--space-m)">
				<Image
					src="/assets/content-img/blog_full3.jpg"
					height={243}
					width={352}
					alt="Photo of a band performer"
				></Image>
				<h4>MORE THAN 20 YEA...</h4>
				<p className="!text-(--highlight-secondary) font-medium">BY: Admin / 3 Comments / 16 Nov 2018</p>
				<p className="!text-(length:--step--1)">
					It is a long established fact that a reader will be distracted by the readable content of a page when
					looking at its layout
				</p>
			</article>
		</section>
	);
};

export default MobileBlog;
