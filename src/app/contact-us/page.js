import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";
import GalleryMap from "@/components/GalleryMap";
import FeaturedEvents from "@/components/FeaturedEvents";

const ContactUs = () => {
  return (
    <main>
      <Banner title="CONTACT US" />
      <ContactForm />
      <FeaturedEvents/>
      <GalleryMap />
    </main>
  );
};

export default ContactUs;
