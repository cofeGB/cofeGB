import tooltip from '@/components/GobalComponents/Tooltip.vue';
import Title from '@/components/GobalComponents/Title.vue';
import Card from '@/components/GobalComponents/Card.vue';
import Menu from '@/components/GobalComponents/Menu.vue';
import Slider from '@/components/GobalComponents/Slider.vue';
import Modal from '@/components/GobalComponents/Modal.vue';
export default function install(Vue) {
  Vue.component('tooltip', tooltip);
  Vue.component('Title', Title);
  Vue.component('Card', Card);
  Vue.component('Menu', Menu);
  Vue.component('Slider', Slider);
  Vue.component('Modal', Modal);
}
