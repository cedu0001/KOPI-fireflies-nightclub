import ContactForm from "@/components/contact/ContactForm";
import Banner from "@/components/Banner";
import GlobalNav from "@/components/globalnavigation/GlobalNav";

const ContactUs = () => {
  return (
    <main>
      <GlobalNav/>
      <Banner title="CONTACT US" />
      <ContactForm/>
    </main>
  );
};

export default ContactUs;
