import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HandmadeProcess from "@/components/sections/HandmadeProcess";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getFeaturedProducts } from "@/lib/db/products";
import { featuredProducts as staticFeatured } from "@/data/products";

export default async function Home() {
  let featured = await getFeaturedProducts();
  if (featured.length === 0) featured = staticFeatured;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts products={featured} />
        <WhyChooseUs />
        <HandmadeProcess />
        <TestimonialsSection />
        <InstagramSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
