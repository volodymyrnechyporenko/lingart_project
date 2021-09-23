<template>
    <div class="accomplishments">
        <div class="accomplishments-wrap">
            <div class="accomplishments-card">
                <div class="card-round">100</div>
                <div class="card-title">Озвучено книг</div>
            </div>
            <div class="accomplishments-card">
                <div class="card-round">100</div>
                <div class="card-title">Записано годин</div>
            </div>
            <div class="accomplishments-card">
                <div class="card-round">100</div>
                <div class="card-title">Час у студії</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.accomplishments {
    background-color: $light;
    padding: $padding;

    & h2 {
        color: fontColor($light);
    }
}
.accomplishments-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 812px) {
        width: 100%;
    }
}
.card-round {
    background-color: $white;
    color: $grey;
    font-size: 2.4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: .6em;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 812px) {
        font-size: 1.6rem;
    }
}
.card-title {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1em;
    text-align: center;
}
</style>