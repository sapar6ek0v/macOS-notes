import SEO from '@/components/SEO';
import { Paths } from '@/config';
import Header from './components/Header';
import { MainWrapper } from './styles';

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
      <MainWrapper>
        <Header />
      </MainWrapper>
    </>
  );
};

export default Main;
