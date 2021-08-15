import PrimaryButton from './PrimaryButton';
PrimaryButton.displayName = 'PrimaryButton';

export default {
  title: 'Components/Elements/Buttons/Primary',
  component: PrimaryButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};
