import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavbarComp.vue';

describe('NavBar.vue', () => {
  const color = 'red';

  it('Should renders color', () => {
    const wrapper = shallowMount(NavBar, {
      props: {
        colorNavBar: color,
      },
    });
    const navBarColor = wrapper.find('.containerNavBar');
    expect(navBarColor.attributes('style')).toContain('background-color: red');
  });
});
