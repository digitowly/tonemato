import { displayPostCreatorVar } from '../../../../lib/apollo/cache';
import LoginForm from '../../../Forms/LoginForm/LoginForm';
import Modal from '../../Modal';

const LoginPromptModal: React.FC = () => {
    return (
        <Modal>
            <button onClick={() => displayPostCreatorVar(false)}>close</button>
            <LoginForm />
        </Modal>
    );
};

export default LoginPromptModal;
