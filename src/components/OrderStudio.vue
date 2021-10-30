<template>
  <div class="order-studio">
    <h2>Бронювання студії</h2>
    <div class="order-wrap">
      <div class="order-studio-info">
        <p>
          Ви можете орендувати наше устаткування в будь-який зручний для вас
          час.
        </p>
      </div>
      <div class="order-studio-btn">
        <button class="order_btn" @click="showDates = !showDates">
          Дивитись дати
        </button>
        <transition name="fade">
          <div class="calendar-wrap" v-if="showDates">
            <div class="date_picker">
              <DatePicker
                v-model="range"
                :select-attribute="selectAttribute"
                :drag-attribute="selectDragAttribute"
                :model-config="modelConfig"
                is-range
                is-expanded
                mode="dateTime"
                :min-date="new Date()"
                is24hr
                :minute-increment="30"
                locale="uk"
              />
            </div>
            <button class="order_btn" @click="bookDates">Забронювати</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar';

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      range: {
        start: new Date(),
        end: null
      },
      dragValue: null,
      selectAttribute: {
        dot: true
      },
      modelConfig: {
        start: {
          timeAdjust: '09:00:00'
        },
        end: {
          timeAdjust: '17:00:00'
        }
      },
      showDates: false
    };
  },
  computed: {
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: true
        }
      };
    }
  },
  methods: {
    bookDates: function() {
      console.log(this.range.start);
      console.log(this.range.end);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.order-studio {
  background-color: $white;
  padding: $padding;
  transition: all 1s ease;

  & h2 {
    color: fontColor($white);
  }
}
.order-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 80%;

  @media screen and (max-width: 812px) {
    width: 100%;
  }
}
.order-studio-info {
  height: 100%;
}
.order-studio-btn,
#calendar-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;

  @media screen and (max-width: 812px) {
    width: 100%;
  }
}
.fade-enter-active {
  animation: fadeIn 0.5s;
}
.fade-leave-active {
  animation: fadeIn 0.5s reverse;
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
