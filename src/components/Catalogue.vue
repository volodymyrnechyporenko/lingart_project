<template>
    <div class="catalogue">
        <div class="catalogue-wrap">
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
            <div class="book-card">
                <a href="#">
                    <div class="book-img"><img src="../img/dummy.png" alt=""></div>
                    <div class="book-title">Назва книги</div>
                    <div class="book-info">Категорія роботи, складність, час виконання</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.catalogue {
    background-color: $white;
    padding: $padding;
    text-align: center;

    & h2 {
        color: fontColor($white);
    }
}
.catalogue-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    align-items: start;
    width: 80%;

    & img {
        max-width: 100%;
    }

    @media screen and (max-width: 812px) {
        grid-template-columns: 1fr;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}
.catalogue-wrap > * {
    visibility: visible;

    &:hover {
        opacity: 1;
        transform: scale(1);
        transition-delay: 0ms, 0ms;
    }
}
.book-card {
    position: relative;
    transition: all .4s ease-in-out;
    transition-delay: .2s;
    transform: translateY(2%);
    animation: goodsCat ease 1s;

    &:nth-of-type(even) {
        padding-top: 3rem;

        @media screen and (max-width: 812px) {
            padding-top: 0;
        }
    }

    & a {
        text-decoration: none;
    }
}
@keyframes goodsCat {
    0% {opacity:0;}
    60% {opacity: 0;}
    100% {opacity:1;}
}
</style>