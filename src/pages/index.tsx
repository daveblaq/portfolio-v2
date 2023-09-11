import React from "react";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import PageLayout from "../layouts/PageLayout";

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Experience />
    </PageLayout>
  );
}

export default Home;
