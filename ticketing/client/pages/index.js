import React from "react";
import axios from "axios";

const Index = ({ currentUser }) => {
  console.log(currentUser);
  return <div>Landing Page</div>;
};

Index.getInitialProps = async () => {
  const response = await axios.get("/api/users/currentuser");

  return response.data;
};

export default Index;
