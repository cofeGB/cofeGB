import tooltip from '@/components/components/Tooltip.vue';
import Title from '@/components/components/Title.vue';
import Card from '@/components/components/Card.vue';
import Menu from '@/components/components/Menu.vue';
export default function install(Vue) {
  Vue.component('tooltip', tooltip);
  Vue.component('Title', Title);
  Vue.component('Card', Card);
  Vue.component('Menu', Menu);
}
