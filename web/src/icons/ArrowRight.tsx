import { ComponentType } from 'react';
import { colors } from '../styles/globals';
import Icon, { withIcon } from '../utils/Icon';

const ArrowRight: ComponentType<any> = withIcon(Icon, {
  fill: colors.highlight,
  width: '35',
  height: '24',
  path:
    'M34.0607 13.0607C34.6464 12.4749 34.6464 11.5251 34.0607 10.9393L24.5147 1.3934C23.9289 0.807614 22.9792 0.807614 22.3934 1.3934C21.8076 1.97919 21.8076 2.92893 22.3934 3.51472L30.8787 12L22.3934 20.4853C21.8076 21.0711 21.8076 22.0208 22.3934 22.6066C22.9792 23.1924 23.9289 23.1924 24.5147 22.6066L34.0607 13.0607ZM-1.31134e-07 13.5L33 13.5L33 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z',
});

export default ArrowRight;
