<template>
    bet slip {{ marketId }}
</template>

<script setup lang="ts">
const props = defineProps<{
    marketId: string;
}>();
</script>