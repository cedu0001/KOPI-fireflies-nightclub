import ContactForm from "@/components/contact/ContactForm";
import Banner from "@/components/Banner";
import GlobalNav from "@/components/globalnavigation/GlobalNav";

export const metadata = {
	title: "NightClub | Contact Us",
	description: "Got a question? Contact us!",
};

const ContactUs = () => {
	return (
		<main>
			<GlobalNav />
			<Banner title="CONTACT US" />
			<ContactForm />
		</main>
	);
};

export default ContactUs;
