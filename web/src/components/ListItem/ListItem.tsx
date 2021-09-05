import { ComponentType, ReactElement } from 'react';
import * as S from './ListItem.style';

interface ListItemProps {
  Before?: ComponentType<any>;
}
const ListItem: React.FC<ListItemProps> = ({ children, Before }) => {
  return (
    <S.ListItemWrapper>
      <Before />
      {children}
    </S.ListItemWrapper>
  );
};

export default ListItem;
