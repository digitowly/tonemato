import React from 'react';
import RemoveItemButton from '../../../Buttons/RemoveItemButton/RemoveItemButton';
import * as S from './Removeable.style';

interface RemoveableProps {
    onRemove: () => void;
}

const Removeable: React.FC<RemoveableProps> = ({ children, onRemove }) => {
    return (
        <S.RemoveableWrapper>
            {children}
            <RemoveItemButton preventDefault onClick={onRemove} />
        </S.RemoveableWrapper>
    );
};

export default Removeable;
