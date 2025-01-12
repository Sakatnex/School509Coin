<template>
  <div class="game-container">
    <ScoreProgress />
    <div class="header">
      <img src="../assets/favicon.png" alt="coin" />
      <h2 class="score" id="score">{{ store.score }}</h2>
    </div>
    <div class="circle">
      <img @click="increment" ref="img" id="circle" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ScoreProgress from '@/components/ScoreProgress.vue'
import { useScoreStore } from '@/stores/score'
import RIA from '@/assets/RIA.png'
import ALM from '@/assets/ALM.png'
import KDV from '@/assets/KDV.png'
import PVV from '@/assets/PVV.png'
import SYV from '@/assets/SYV.png'
import NPV from '@/assets/NPV.png'
import MMA from '@/assets/MMA.png'
import ALV from '@/assets/ALV.png'
import ELA from '@/assets/ELA.png'
import PIV from '@/assets/PIV.png'
import KDN from '@/assets/KDN.png'
import OAS from '@/assets/OAS.png'
import BED from '@/assets/BED.png'
import KEA from '@/assets/KEA.png'
import CMY from '@/assets/CMY.png'
import GVV from '@/assets/GVV.png'
import TSS from '@/assets/TSS.png'
import SEA from '@/assets/SEA.png'
import MVO from '@/assets/MVO.png'
import IMV from '@/assets/IMV.png'
import SRA from '@/assets/SRA.png'
import MMG from '@/assets/MMG.png'
import NNU from '@/assets/NNU.png'
import KVO from '@/assets/KVO.png'
import SDI from '@/assets/SDI.png'
import ZMG from '@/assets/ZMG.png'
import Logo from '@/assets/favicon.png'

const img = ref(null)
const imgSrc = computed(() => {
  if (store.score > 1342177270) {
    return Logo;
  } else if (store.score > 671088630) {
    return ZMG;
  } else if (store.score > 335544310) {
    return SDI;
  } else if (store.score > 167772150) {
    return KVO;
  } else if (store.score > 41943030) {
    return NNU;
  } else if (store.score > 20971510) {
    return MMG;
  } else if (store.score > 10485750) {
    return SRA;
  } else if (store.score > 5242870) {
    return IMV;
  } else if (store.score > 2621430) {
    return MVO;
  } else if (store.score > 1310710) {
    return SEA;
  } else if (store.score > 655350) {
    return TSS;
  } else if (store.score > 327670) {
    return GVV;
  } else if (store.score > 163830) {
    return CMY;
  } else if (store.score > 81910) {
    return KEA;
  } else if (store.score > 40950) {
    return BED;
  } else if (store.score > 20470) {
    return OAS;
  } else if (store.score > 10230) {
    return KDN;
  } else if (store.score > 5110) {
    return PIV;
  } else if (store.score > 2550) {
    return ELA;
  } else if (store.score > 1270) {
    return ALV;
  } else if (store.score > 630) {
    return MMA;
  } else if (store.score > 310) {
    return NPV;
  } else if (store.score > 150) {
    return SYV;
  } else if (store.score > 70) {
    return PVV;
  } else if (store.score > 30) {
    return KDV;
  } else if (store.score > 10) {
    return ALM; 
  } else {
    return RIA;
  }
});
const store = useScoreStore()

function increment(event) {
  store.add(1)
  const rect = event.target.getBoundingClientRect()

  const offsetX = event.clientX - rect.left - rect.width / 2
  const offsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offsetY / rect.height) * DEG
  const tiltY = (offsetX / rect.width) * -DEG

  img.value.style.setProperty('--tiltX', `${tiltX}deg`)
  img.value.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    img.value.style.setProperty('--tiltX', `0deg`)
    img.value.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  img.value.parentElement.appendChild(plusOne)

  setTimeout(() => plusOne.remove(), 2000)
}

</script>
