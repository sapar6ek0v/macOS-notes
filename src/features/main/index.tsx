import SEO from '@/components/SEO';
import { Paths } from '@/config';

import Header from './components/Header';
import SideBar from './components/Sidebar';
import WorkSpace from './components/WorkSpace';
import { FlexContainer, MainWrapper } from './styles';

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
        <FlexContainer>
          <SideBar />
          <WorkSpace />
        </FlexContainer>
      </MainWrapper>
    </>
  );
};

export default Main;
