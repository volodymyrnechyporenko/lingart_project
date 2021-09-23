<template>
    <div class="team">
        <h2>Наша команда</h2>
        <div class="team-cards-wrap">
            <div class="team-card">
                <div class="team-img"><img src="../img/dummy.png" alt=""></div>
                <div class="team-name">Ім'я</div>
                <div class="team-info">Вид діяльності</div>
            </div>
            <div class="team-card">
                <div class="team-img"><img src="../img/dummy.png" alt=""></div>
                <div class="team-name">Ім'я</div>
                <div class="team-info">Вид діяльності</div>
            </div>
            <div class="team-card">
                <div class="team-img"><img src="../img/dummy.png" alt=""></div>
                <div class="team-name">Ім'я</div>
                <div class="team-info">Вид діяльності</div>
            </div>
            <div class="team-card">
                <div class="team-img"><img src="../img/dummy.png" alt=""></div>
                <div class="team-name">Ім'я</div>
                <div class="team-info">Вид діяльності</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.team {
    background-color: $dark;
    padding: $padding;

    & h2 {
        color: fontColor($dark);
    }
}
.team-cards-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    & img {
        max-width: 100%;
    }

    @media screen and (max-width: 812px) {
        grid-template-columns: 1fr;
    }
}
</style>