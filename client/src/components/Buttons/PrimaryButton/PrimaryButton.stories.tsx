import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/Elements/Buttons/Primary',
  component: PrimaryButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.displayName = 'PrimaryButton';
Primary.args = {
  label: 'Primary Button',
};
