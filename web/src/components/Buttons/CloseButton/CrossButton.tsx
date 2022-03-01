import React, { ComponentType } from 'react';
import { css } from 'styled-components';
import BaseButton, { withButton } from '../BaseButton/BaseButton';
import CrossIcon from '../../../icons/ui/CrossIcon';

const CrossButton: ComponentType<any> = withButton(
    BaseButton,
    css`
        background-color: transparent;
        padding: 0%;
    `,
    {
        after: (
            <CrossIcon
                customStyle={css`
                    transform: scale(0.9);
                    filter: brightness(3.75);

                    transition: all 0.25s ease-in-out;
                    &:hover {
                        transform: scale(1.1);
                        filter: brightness(1);
                    }
                `}
            />
        ),
    }
);

export default CrossButton;
