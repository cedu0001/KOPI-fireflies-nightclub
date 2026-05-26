import Headline from "../Headline";
import WelcomeCard from "./WelcomeCard";

const WelcomeIndex = () => {
	return (
		<section className="flex flex-col items-center justify-center my-(--space-xl) py-(--space-xl) gap-(--space-l)">
			<Headline title="WELCOME IN NIGHTCLUB" />

			<div className="flex flex-row items-center justify-center gap-(--space-s) flex-wrap">
				<WelcomeCard />
			</div>
		</section>
	);
};

export default WelcomeIndex;
