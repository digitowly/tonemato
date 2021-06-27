import SecondaryButton from './SecondaryButton';
SecondaryButton.displayName = 'SecondaryButton';

export default {
  title: 'Components/Elements/Buttons/Secondary',
  component: SecondaryButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
Secondary.displayName = 'SecondaryButton';
Secondary.args = {
  label: 'Secondary Button',
};
