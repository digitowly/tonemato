import React from 'react';
import RemoveButton from '../../../Buttons/RemoveButton/RemoveButton';
import * as S from './Removeable.style';

interface RemoveableProps {
  onRemove: () => void;
}

const Removeable: React.FC<RemoveableProps> = ({ children, onRemove }) => {
  return (
    <S.RemoveableWrapper>
      {children}
      <RemoveButton preventDefault label='remove' onClick={onRemove} />
    </S.RemoveableWrapper>
  );
};

export default Removeable;
