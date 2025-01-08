// pages/Profile.jsx
import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Profile = () => {
  const userName = localStorage.getItem("userName");

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p>Welcome, {userName}</p>
      <Footer />
    </>
  );
};

export default Profile;
