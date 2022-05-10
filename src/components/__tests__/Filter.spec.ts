import { shallowMount } from "@vue/test-utils";
import Filters from "../Filter/index.vue";

describe("Filters.vue", () => {
  test("renders this msg test", () => {
    const msg = "Hello Mohaddese";
    const wrapper = shallowMount(Filters, {
      propsData: {
        msg,
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
