import PostsFilter from './PostsFilter';

export default {
  title: 'Components/PostsFilter',
  component: PostsFilter,
};

const Template = (args) => <PostsFilter {...args} />;

export const OptionOne = Template.bind({});
