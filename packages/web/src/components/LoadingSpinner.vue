<template>
    <svg
        class="spinner"
        width="48"
        height="48"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="90 150"
            stroke-dashoffset="0"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
</template>
<style scoped>
    svg {
        color: var(--color-primary);
    }
</style>