<template>
   <div ref="root"
         class="bake-bet-menu">
        <div class="bake-bet-menu__trigger">
            <slot name="trigger"
                  :toggle="toggle" />

      </div>

        <div v-if="open"
             class="bake-bet-menu__popout">
            <slot name="menu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const root = ref<HTMLElement | null>(null);
const open = ref(false);

onClickOutside(root, () => open.value = false);

function toggle() {
    open.value = !open.value;
}

</script>

<style scoped>
.bake-bet-menu {
    position: relative;
    cursor: pointer;
}

.bake-bet-menu__popout {
    position: absolute;
    display: flex;
    flex-direction: column;
        gap: var(--space-sm);
        padding: var(--space-sm);
    right: 0;
    top: calc(100% + 0.25rem);
    min-width: 10rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 100;
}
</style>