import React, { useEffect, useState } from "react";
import Navbar from "../component/Home/Navbar";
import Category from "../component/Home/Category";
import RecentDelivery from "../component/Home/RecentDelivery/RecentDelivery";
import useCategory from "../hooks/useCategory";
import PageTemplate from "../component/Layout/PageTemplate";
import SideMenu from "../component/Layout/SideMenu";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const { category, setCategory } = useCategory();
  useEffect(() => {
    setCategory("");
  }, []);

  return (
    <PageTemplate>
      <SideMenu />
      <motion.div
        variants={fadeIn("right", "tween", 0.24, 1.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.23 }}
        className="flex flex-col gap-1 w-full"
      >
        <Navbar />
        <Category category={category} setCategory={setCategory} />
        <RecentDelivery />
      </motion.div>
    </PageTemplate>
  );
};
export default Home;
