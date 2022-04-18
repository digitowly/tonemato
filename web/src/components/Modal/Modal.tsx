import { Colors } from '../../styles/Colors';
import CrossButton from '../Buttons/CloseButton/CrossButton';
import { H2 } from '../Text/Headline';
import { ModalOuter, ModalTopRow, ModalWrapper } from './Modal.style';

interface ModalProps {
    closeModal?: () => void;
    title?: string;
    titleColor?: Colors;
}

const Modal: React.FC<ModalProps> = ({
    children,
    title,
    titleColor,
    closeModal,
}) => {
    return (
        <ModalOuter>
            <ModalWrapper>
                <ModalTopRow>
                    <H2 color={titleColor}>{title}</H2>
                    <CrossButton onClick={() => closeModal()} />
                </ModalTopRow>
                {children}
            </ModalWrapper>
        </ModalOuter>
    );
};

export default Modal;
