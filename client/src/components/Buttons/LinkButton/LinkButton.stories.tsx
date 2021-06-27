import LinkButton from './LinkButton';
LinkButton.displayName = 'LinkButton';

export default {
  title: 'Components/Elements/Buttons/Link',
  component: LinkButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <LinkButton {...args} />;

export const Link = Template.bind({});
Link.args = {
  label: 'Link Button',
};
