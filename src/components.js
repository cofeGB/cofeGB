import tooltip from '@/components/tooltip.vue';
import Title from '@/components/Title.vue';
import Card from '@/components/Card.vue';
export default function install(Vue) {
  Vue.component('tooltip', tooltip);
  Vue.component('Title', Title);
  Vue.component('Card', Card);
}
