import { shallowMount } from '@vue/test-utils';
import StartStopBtn from '../src/vue/StartStopBtn.vue';
import { BButton } from 'bootstrap-vue';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(StartStopBtn, {
        'stubs': {
            'b-button': BButton
        }
    });
});

afterEach(() => {
    wrapper.destroy();
});

test('Initially acts as a "start" button', () => {
    expect(wrapper.text()).toBe('Start');
    expect(wrapper.vm.variant).toBe('success');
});

test('Emits "start" event and changes to "stop" button on first click', () => {
    wrapper.trigger('click');
    expect(wrapper.vm.caption).toBe('Stop');
    expect(wrapper.vm.variant).toBe('danger');
    expect(wrapper.emitted().start.length).toBe(1);
});

test('Emits "stop" event and changes to "start" button on 2nd click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().start.length).toBe(1);
    wrapper.trigger('click');
    expect(wrapper.vm.caption).toBe('Start');
    expect(wrapper.vm.variant).toBe('success');
    expect(wrapper.emitted().stop.length).toBe(1);
});