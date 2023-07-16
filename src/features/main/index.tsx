import SEO from '@/components/SEO';
import { Paths } from '@/config';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { useNotesContext } from '@/utils/hooks/useNotesContext';

import Header from './components/Header';
import MobileWorkSpace from './components/MobileWorkSpace';
import SideBar from './components/Sidebar';
import WelcomeTitle from './components/WelcomeTitle';
import WorkSpace from './components/WorkSpace';
import { FlexContainer, MainWrapper } from './styles';

const Main = () => {
  const { currentNote } = useNotesContext();
  const matches = useMediaQuery('(min-width: 576px)');

  const isMobile = matches ? (
    <WorkSpace />
  ) : (
    <MobileWorkSpace>
      <WorkSpace />
    </MobileWorkSpace>
  );

  const isShowWelcomeTitle = matches ? <WelcomeTitle /> : null;

  const isWorkSpaceOrWelcomeTitle = currentNote ? isMobile : isShowWelcomeTitle;

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
          {isWorkSpaceOrWelcomeTitle}
        </FlexContainer>
      </MainWrapper>
    </>
  );
};

export default Main;
