<template>
    <div class="fixed">
        <div class="fixed-title">Бажаєте замовити аудіокнигу?</div>
        <div class="fixed-txt">Ми допоможемо озвучити українською мовою будь-який матеріал.</div>
        <button class="send" @click="showCalc = !showCalc">Розрахувати замовлення</button>
        <transition name="fade">
            <div class="calc-wrap" v-if="showCalc">
                <BookPrice></BookPrice>
            </div>
        </transition>
    </div>
</template>

<script>

import BookPrice from './BookPrice.vue';

export default {
    components: {
        BookPrice
    },
    data() {
        return {
            showCalc: false
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.fixed {
    position: fixed;
    right: 10vw;
    bottom: 0;
    background-color: $white;
    padding: 1.4rem;
    width: 16vw;

    @media screen and (max-width: 812px) {
        display: none;
    }
}
.fixed-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.4em;
}
.fixed-txt {
    font-size: 1rem;
    margin-bottom: 1.4em;
    color: $grey;
}
.calc-wrap {
    padding-top: 1.4rem;
}
.fade-enter-active {
    animation: fadeIn .5s;
}
.fade-leave-active {
    animation: fadeIn .5s reverse;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>