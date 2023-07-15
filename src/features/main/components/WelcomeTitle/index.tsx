import {
  WelcomeText,
  WelcomeTitleIcon,
  WelcomeTitleStack,
  WelcomeTitleWrapper,
} from './styles';

const WelcomeTitle = () => {
  return (
    <WelcomeTitleWrapper>
      <WelcomeTitleStack>
        <WelcomeTitleIcon />
        <WelcomeText>
          Please, select or create notes to get started.
        </WelcomeText>
      </WelcomeTitleStack>
    </WelcomeTitleWrapper>
  );
};

export default WelcomeTitle;
