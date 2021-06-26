import BaseButton from './BaseButton';

export default {
  title: 'Components/Elements/Buttons/Base',
  component: BaseButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <BaseButton label='Base Button' {...args} />;

export const Base = Template.bind({});
