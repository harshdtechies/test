import React from "react";
import EcommerceWidget from "../Components/EcommerceWidget";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div class="dashboard-main-wrapper">
      <Navbar />
      <Sidebar />
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <PageHeader />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
