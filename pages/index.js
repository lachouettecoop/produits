const Home = () => {
  if (typeof window !== "undefined") {
    window.location = "/index.html";
  }
  return null;
};

export default Home;
