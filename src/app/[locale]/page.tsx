import { buildPageLanguage } from "@/config/locale";

const Home = async () => {
  const l = await buildPageLanguage();
  return <main>{l.title}</main>;
};

export default Home;
