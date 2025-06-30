import {computed, ref} from "vue"

export function useSelectedMenu(keys, content) {
    const activeIndex = ref(null)

    function handleChangeActiveIndex(index) {
        activeIndex.value = activeIndex.value === index ? null : index
    }

    const selectedMenu = computed(() => {
        if (activeIndex.value == null) return null
        const activeKey = keys[activeIndex.value]
        return content[activeKey]
    })
    return { activeIndex, selectedMenu, handleChangeActiveIndex }
}

