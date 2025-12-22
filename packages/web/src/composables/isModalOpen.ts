import { ref } from "vue";

const isModalOpen = ref(false);

export function useIsModalOpen() {
    return {
        isModalOpen
    }
}