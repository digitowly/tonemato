import { ModalOuter, ModalWrapper } from './Modal.style';

const Modal: React.FC = ({ children }) => {
    return (
        <ModalOuter>
            <ModalWrapper>{children}</ModalWrapper>
        </ModalOuter>
    );
};

export default Modal;
