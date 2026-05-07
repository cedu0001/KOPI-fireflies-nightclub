import Image from "next/image";

const MobileBlog = () => {
	return (
		<section className="flex flex-col gap-3 my-(--space-xl) p-(--space-2xl) full-width sm:hidden">
			<h2 className="text-center">RECENT BLOG</h2>
			<article>
				<Image src="/assets/content-img/blog_full1.jpg" height={243} width={352} alt="tihi"></Image>
				<h4>MORE THAN 20 YEA...</h4>
				<p className="!text-(--highlight-secondary) font-medium">BY: Admin / 3 Comments / 16 Nov 2018</p>
				<p className="!text-(length:--step--1)">
					It is a long established fact that a reader will be distracted by the readable content of a page when
					looking at its layout
				</p>
			</article>
			<article>
				<Image src="/assets/content-img/blog_full2.jpg" height={243} width={352} alt="tihi"></Image>
				<h4>MORE THAN 20 YEA...</h4>
				<p className="!text-(--highlight-secondary) font-medium">BY: Admin / 3 Comments / 16 Nov 2018</p>
				<p className="!text-(length:--step--1)">
					It is a long established fact that a reader will be distracted by the readable content of a page when
					looking at its layout
				</p>
			</article>
			<article>
				<Image src="/assets/content-img/blog_full3.jpg" height={243} width={352} alt="tihi"></Image>
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
