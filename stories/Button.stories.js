import Button from "../components/button/button";

export default {
  title: "Button",
  components: { Button },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" />
  `,
});

export const Hello = Template.bind({});
Hello.args = {};
