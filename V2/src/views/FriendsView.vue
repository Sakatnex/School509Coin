<template>
  <div class="text-content">
    <h1>Твои друзья</h1>

    <div class="center">
      <button class="referal" @click="copy">{{ referalText }}</button>
    </div>

    <h3 v-if="friends.length === 0">Пока нет друзей</h3>

    <ul class="list">
      <li class="list-item" v-for="friend in friends"  :key="friend.id">
        {{ friend.name }}
        <span class="list-btn done">35000</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTelegram } from '@/services/telegram';
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';

const app = useAppStore()
const { user } = useTelegram()

const referalText = ref('Твоя реферальная ссылка')

const friends = computed(() => Object.keys(app.user.friends).map((id) => ({
  id,
  name: app.user.friends[id],
})))

function copy() {
  navigator.clipboard.writeText('https://t.me/School509CoinBeta_bot?start=' + user?.id)
  referalText.value = 'Скопировано!'
}
</script>