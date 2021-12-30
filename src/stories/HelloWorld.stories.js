import HelloWorld from '../components/HelloWorld';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Helloworld',
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    msg: {
      control: { type: 'select' },
      options: ['msg1', 'msg2', 'msg3'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HelloWorld v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  msg: 'primary'
};

