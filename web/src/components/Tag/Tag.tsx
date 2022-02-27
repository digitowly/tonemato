import { Colors } from '../../styles/Colors';
import { TagWrapper } from './Tag.style';

interface TagProps {
    backgroundColor?: Colors;
    color?: Colors;
}

const Tag: React.FC<TagProps> = ({ children, backgroundColor, color }) => {
    return (
        <TagWrapper backgroundColor={backgroundColor} color={color}>
            {children}
        </TagWrapper>
    );
};

export default Tag;
