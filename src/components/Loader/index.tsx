import { LoaderWrapper, Line } from './styles';

interface Props {
  size: number;
  centered?: boolean;
}

const Loader = ({ size, centered = false }: Props) => {
  return (
    <LoaderWrapper $isCentered={centered}>
      <Line $size={size}>
        <Line $size={size}>
          <Line $size={size}>
            <Line $size={size}>
              <Line $size={size}>
                <Line $size={size}>
                  <Line $size={size} />
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
