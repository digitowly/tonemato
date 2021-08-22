import { useQuery } from '@apollo/client';
import { DISPLAY_BACKDROP } from '../../../graphql/local/DisplayBackdrop';
import * as S from './Backdrop.style';

const Backdrop: React.FC = () => {
  const { data } = useQuery(DISPLAY_BACKDROP);
  return <>{data.backdrop.display && <S.BackdropStyle></S.BackdropStyle>}</>;
};

export default Backdrop;
