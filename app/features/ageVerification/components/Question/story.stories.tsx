import { Question } from ".";

export default {
  title: "Features/AgeVerification/Components/Question",
  component: Question,
};

const Template = (args) => <Question {...args}/>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("Button clicked"),
};