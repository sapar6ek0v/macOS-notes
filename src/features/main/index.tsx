import SEO from "@/components/SEO";
import { Paths } from "@/config";

const Main = () => {
  return (
    <>
      <SEO
        title="Main"
        description="A simple macOS note"
        name="Eldiiar"
        type="application"
        keywords="Notes, MacOS"
        href={Paths.MAIN}
      />
      <div>Hello World!</div>
    </>
  );
};

export default Main;