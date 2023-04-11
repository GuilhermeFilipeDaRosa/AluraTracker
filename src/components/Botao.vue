<template>
    <button class="button" @click="$emit('clicado')" :disabled="disabled">
            <span class="icon">
                <i class="fas" :class="icon"></i>
            </span>
            <span>{{ nome }}</span>
        </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BotaoTracker",
    emits: ["clicado"],
    props: {
        disabled: Boolean,
        nome: String,
        icon: String,
    }
})
</script>