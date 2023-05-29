import React from "react";

const Index = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT singed in</h1>
  );
};

Index.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default Index;
