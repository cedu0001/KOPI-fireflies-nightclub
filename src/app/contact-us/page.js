import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";
import Headline from "@/components/Headline";
import GalleryMap from "@/components/GalleryMap";

const ContactUs = () => {
  return (
    <main>
      <Banner title="CONTACT US" />
      <ContactForm />

      <GalleryMap />
    </main>
  );
};

export default ContactUs;
