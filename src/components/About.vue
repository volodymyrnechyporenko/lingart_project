<template>
    <div id="about" class="about">
        <div class="about-wrap">
            <div class="about-us">
                <h2>Що таке Lingart</h2>
                <p>Ми розробили новий формат електронних книжок з можливістю слухати й читати різними мовами водночас, синхронізуючи текст зі звуком</p>
                <div class="market-btn">
                    <button class="market">Play Market</button>
                    <button class="market">Apple Store</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.about {
    background-color: $white;
    padding: $padding;

    & h2 {
        color: fontColor($white);
    }
}
.about-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;

    @media screen and (max-width: 812px) {
        width: 100%;
    }

    & p {
        color: $grey;
    }

    & .about-us {
        width: 60%;

        @media screen and (max-width: 812px) {
            width: 100%;
        }
    }
}
.market-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
}
</style>