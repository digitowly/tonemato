import { useTransition } from '@react-spring/web';
import { useDisplayBackdropQuery } from '../../../generated/codegen_types';
import * as S from './Backdrop.style';

const Backdrop: React.FC = () => {
  const { data } = useDisplayBackdropQuery();
  const transition = useTransition(data.backdrop, S.transitionConfig);

  return transition(
    (style, item) => item && <S.BackdropStyle style={style}></S.BackdropStyle>
  );
};

export default Backdrop;
