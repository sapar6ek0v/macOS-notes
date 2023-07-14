import { LoaderWrapper, Line } from './styles';

interface Props {
  centered?: boolean;
}

const Loader = ({ centered = false }: Props) => {
  return (
    <LoaderWrapper $isCentered={centered}>
      <Line>
        <Line>
          <Line>
            <Line>
              <Line>
                <Line>
                  <Line />
                </Line>
              </Line>
            </Line>
          </Line>
        </Line>
      </Line>
    </LoaderWrapper>
  );
};

export default Loader;
