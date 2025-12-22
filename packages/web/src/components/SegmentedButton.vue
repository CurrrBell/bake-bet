<template>
    <fieldset class="segmented-button">
        <button v-for="option in options"
                class="segmented-button__option"
                :class="{ active: modelValue === option }"
                @click="select(option)">
            {{ option }}
        </button>
    </fieldset>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: string;
    options: string[];
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

function select(value: string) {
    emit('update:modelValue', value);
}
</script>

<style scoped>
.segmented-button {
    display: inline-flex;
    background-color: var(--color-bg-surface);
    border-radius: var(--radius-md);
    padding: 4px;
    gap: 4px;
}

.segmented-button__option {
    background-color: transparent;
    color: var(--color-text-muted);
    border: none;
    border-radius: var(--radius-sm);
    padding: 0.5rem 1rem;
    font-weight: 600;
    cursor: pointer;

    transition:
        background-color var(--transition-hover),
        color var(--transition-hover);
}

.segmented-button__option:hover {
    color: var(--color-text);
}

.segmented-button__option.active {
    background-color: var(--color-primary);
    color: white;
}

.segmented-button__option:active {
    transform: translateY(1px);
}
</style>