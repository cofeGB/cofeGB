import tooltip from '@/components/components/Tooltip.vue';
import Title from '@/components/components/Title.vue';
import Card from '@/components/components/Card.vue';
import Menu from '@/components/components/Menu.vue';
import Slider from '@/components/components/Slider.vue';
import Modal from '@/components/components/Modal.vue';
export default function install(Vue) {
  Vue.component('tooltip', tooltip);
  Vue.component('Title', Title);
  Vue.component('Card', Card);
  Vue.component('Menu', Menu);
  Vue.component('Slider', Slider);
  Vue.component('Modal', Modal);
}
