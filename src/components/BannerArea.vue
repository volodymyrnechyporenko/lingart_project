<template>
    <div class="banner">
        <div class="heading">
            <h1>Lingart</h1>
            <div class="subtitle">Ми створюємо аудіокниги</div>
        </div>
        <div class="heading-btn">
            <button class="preorder-studio">Бронювання студії</button>
            <button class="preorder-book">Замовити книгу</button>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.banner {
    background-color: $dark;
    padding: 10vh 0;
    text-align: center;

    & h1 {
        color: fontColor($dark);
    }

    & .subtitle {
        color: fontColor($dark);
    }
}
.heading-btn {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
}
</style>