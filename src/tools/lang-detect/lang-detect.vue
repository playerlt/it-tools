<script setup lang="ts">
import {getLang, getLang6391} from './lang-detect.service';

const text = ref('');
</script>

<template>
  <c-card>
    <c-input-text v-model:value="text" multiline placeholder="Your text..." rows="5" />

    <div class="mt-5 flex justify-center items-center">
      detected language(ISO 639-3): {{getLang(text)}}
    </div>
    <div class="mt-5 flex justify-center items-center">
      detected language(ISO 639-1): {{getLang6391(text)}}
    </div>

  </c-card>
</template>