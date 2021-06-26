import ProfileNavigation from './ProfileNavigation';

export default {
  title: 'Components/Header/ProfileNavigation',
  component: ProfileNavigation,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <ProfileNavigation {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  session: {
    user: {
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GjN-RoNWMOuKCNVcogCf61ZmCY5XshQHH4fmRNNLQ=s96-c',
    },
  },
  subNavOpen: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  subNavOpen: false,
};
