import { displayPostCreatorVar } from '../../../../lib/apollo/cache';
import LoginForm from '../../../Forms/LoginForm/LoginForm';
import Modal from '../../Modal';

const LoginPromptModal: React.FC = () => {
    return (
        <Modal title='Login' closeModal={() => displayPostCreatorVar(false)}>
            <LoginForm />
        </Modal>
    );
};

export default LoginPromptModal;
