<template>
  <Header></Header>
  <main>
    <BannerArea></BannerArea>
    <Accomplishments></Accomplishments>
    <About></About>
    <Catalogue></Catalogue>
    <AreYouIn></AreYouIn>
    <Team></Team>
    <OrderStudio></OrderStudio>
    <Fixed></Fixed>
    <ScrollTopArrow></ScrollTopArrow>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import BannerArea from './components/BannerArea.vue';
import Accomplishments from './components/Accomplishments.vue';
import About from './components/About.vue';
import Catalogue from './components/Catalogue.vue';
import AreYouIn from './components/AreYouIn.vue';
import OrderStudio from './components/OrderStudio.vue';
import Team from './components/Team.vue';
import Fixed from './components/Fixed.vue';
import ScrollTopArrow from './components/ScrollTopArrow.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    BannerArea,
    Accomplishments,
    About,
    Catalogue,
    AreYouIn,
    OrderStudio,
    Team,
    Fixed,
    ScrollTopArrow,
    Footer
  }
};
</script>

<style lang="scss">
@import '@/scss/_btn.scss';
@import '@/scss/_txt.scss';
</style>
