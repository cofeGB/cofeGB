<template>
  <div class="callback__container">
    <div class="wrap">
      <tooltip top content="Хотите, чтобы мы Вам перезвонили? Нажимайте сюда!">
        <v-btn class="btn-phone-btn" icon @click="showmodal">
          <div class="btn-phone-wrap">
            <v-img
              class="btn-phone"
              height="30"
              width="30"
              contain
              :src="require('../assets/img/call.png')"
            >
            </v-img>
            <div class="btn-phone-circle1"></div>
            <div class="btn-phone-circle2"></div>
          </div>
        </v-btn>
      </tooltip>
    </div>
    <ModalCallBack />
    <CallBackAccept />
  </div>
</template>

<script>
import ModalCallBack from './ModalCallBack.vue';
import { mapActions } from 'vuex';

export default {
  name: 'callBack',
  data() {
    return {
      modalName: 'callBack',
    };
  },
  components: {
    ModalCallBack,
  },
  methods: {
    ...mapActions(['OPEN_MODAL']),
    // ...mapGetters(['MODAL_NAME']),
    showmodal() {
      this.OPEN_MODAL(this.modalName);
    },
  },
};
</script>
<style lang="sass">
@keyframes phone-rotate
  0%
    transform: rotate(0)
  100%
    transform: rotate(15deg)

@keyframes btn-phone-circle1
  0%
    transform: scale(1)
  100%
    transform: scale(1.3)

@keyframes btn-phone-circle2
  0%
    opacity: 0.2
    transform: scale(0.7)
  30%
    opacity: 1
    transform: scale(1.3)
  100%
    opacity: 0.2
    transform: scale(1.6)

.callback__container
  max-width: 150px
  margin-top: 30px

.wrap
  display: flex
  justify-content: center
  position: relative
  margin: 10px auto

.btn-phone
  background: url(../assets/img/call.png)	center center no-repeat
  border-radius: 50px
  animation: phone-rotate 1s infinite alternate linear
  color: #fff
  position: absolute
  top: 14px
  left: 14px
  &::hover
    cursor: pointer
  &-btn
    // background-color: #rgba(0,0,0,0.4)
  &-wrap
    position: relative
  &-circle1
    height: 60px
    width: 60px
    border: 8px solid #fff
    position: absolute
    opacity: 0.8
    border-radius: 60px
    animation: btn-phone-circle1 1.4s infinite alternate linear
  &-circle2
    height: 60px
    width: 60px
    border: 1px solid #fff
    border-radius: 60px
    animation: btn-phone-circle2 1.4s infinite alternate linear
</style>
