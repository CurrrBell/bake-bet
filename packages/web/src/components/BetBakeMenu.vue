<template>
    <div ref="root" class="menu">
        <slot name="trigger" :toggle="toggle"></slot>

        <div v-if="open" class="menu__popout">
            <slot name="menu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const root = ref<HTMLElement | null>(null);
const open = ref(false);

function toggle() {
    open.value = !open.value;
}

function onClickOutside(e: MouseEvent) {
    if (!root.value) return;
    if (!root.value.contains(e.target as Node)) {
        close();
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped>
.menu {
    position: relative;
}

.menu__popout {
    position: absolute;
    right: 0;
    top: calc(100% + 0.25rem);
    min-width: 10rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    padding: 0.25rem 0;
    z-index: 100;
}
</style>
