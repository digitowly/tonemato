import Header from './Header';
import * as ProfileNavigation from '../Navigations/ProfileMenu/ProfileNavigation.stories';

export default {
  title: 'Components/Header/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  session: {
    user: {
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GjN-RoNWMOuKCNVcogCf61ZmCY5XshQHH4fmRNNLQ=s96-c',
    },
  },
};

export const LoggedOut = Template.bind({});
