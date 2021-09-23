<template>
    <div class="are-you-in">
        <div class="are-you-in-wrap">
            <h2>Зацікавились?</h2>
            <p>Скористайтесь нашим онлайн калькулятором для прорахунку замовлення. Або надішліть нам сповіщення і ми допоможемо вам озвучити будь-який матеріал.</p>
            <div class="order">
                <button class="send" @click="showCalc = !showCalc">Розрахувати замовлення</button>
                <p>або</p>
                <form action="">
                    <input type="mail">
                    <button class="send">Надіслати</button>
                </form>
            </div>
            <!-- <transition name="fade">
                <div class="calc-wrap" v-if="showCalc">
                    <BookPrice></BookPrice>
                </div>
            </transition> -->
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showCalc: false
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.are-you-in {
    background-color: $light;
    padding: $padding;

    & h2 {
        color: fontColor($light);
    }
}
.are-you-in-wrap {
    width: 80%;
    
    & p {
        color: $grey;
    }

    @media screen and (max-width: 812px) {
        width: 100%;
    }
}
.order {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;

    @media screen and (max-width: 812px) {
        flex-direction: column;
        gap: 0;
    }
}
.btn-wrap {
    display: flex;
    flex-direction: column;
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
input {
    margin-right: 1rem;
}
</style>