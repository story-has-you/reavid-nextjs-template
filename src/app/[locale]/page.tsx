import { Button } from "@/components/ui/button";
import { buildPageLanguage } from "@/config/locale";

const Home = async () => {
  const l = await buildPageLanguage();
  return (
    <main>
      <Button>{l.title}</Button>
    </main>
  );
};

export default Home;
