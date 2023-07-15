import SEO from '@/components/SEO';
import { Paths } from '@/config';
import { useNotesContext } from '@/utils/hooks/useNotesContext';

import Header from './components/Header';
import SideBar from './components/Sidebar';
import WelcomeTitle from './components/WelcomeTitle';
import WorkSpace from './components/WorkSpace';
import { FlexContainer, MainWrapper } from './styles';

const Main = () => {
  const { currentNote } = useNotesContext();

  const isWorkSpaceOrWelcomeTitle = currentNote ? (
    <WorkSpace />
  ) : (
    <WelcomeTitle />
  );

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
