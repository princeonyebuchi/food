// src/app/page.tsx


import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import TrendingFoods from "@/components/TrendingFoods";
import FoodStats from "@/components/FoodStats";
import PopularRestaurants from "@/components/PopularRestaurants";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import FoodDelivery from "@/components/FoodDelivery";
import RecipeVideos from "@/components/RecipeVideos";
import FoodGallery from "@/components/FoodGallery";
import TopChefs from "@/components/TopChefs";
import ChefSpecials from "@/components/ChefSpecials";
import FoodPartners from "@/components/FoodPartners";
import SpecialOffers from "@/components/SpecialOffers";
import LatestBlog from "@/components/LatestBlog";
import CustomerReviews from "@/components/CustomerReviews";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      <Hero />
      <Categories />
      <FeaturedRecipes />
      <TrendingFoods />
      <FoodStats />
      <PopularRestaurants />
      <HowItWorks />
      <WhyChooseUs />
      <FoodDelivery />
      <RecipeVideos />
      <FoodGallery />
      <TopChefs />
      <ChefSpecials />
      <FoodPartners />
      <SpecialOffers />
      <LatestBlog />
      <CustomerReviews />
      <Testimonials />
      <AppDownload />
      <Newsletter />
      <Footer />
    </main>
  );
}