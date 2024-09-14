import { Bucket } from ".";

export default {
  title: "Features/Bucket/Components/Bucket",
  component: Bucket,
};

const Template = (args) => <Bucket {...args}/>;

export const Default = Template.bind({});
Default.args = {
  age: {
    start: 10,
    end: 20
  },
};