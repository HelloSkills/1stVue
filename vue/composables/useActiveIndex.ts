import {computed, ref} from "vue";

export function useSelectedMenu(keys, content) {
    console.log('Привет из useSelectedMenu', keys, content);
    const activeIndex = ref(null)

    function handleChangeActiveIndex(index) {
        console.log('Привет из handleChangeActiveIndex', index);
        // console.log('Handle do', activeIndex.value)
        activeIndex.value = activeIndex.value === index ? null : index
        // console.log('Handle posle', activeIndex.value)
    }

    const selectedMenu = computed(() => {
        console.log('Привет из selectedMenu');
        if (activeIndex.value == null) return null
        const activeKey = keys[activeIndex.value]
        return content[activeKey]
    })
    console.log('activeIndex, selectedMenu, handleChangeActiveIndex', activeIndex, selectedMenu, handleChangeActiveIndex)
    return { activeIndex, selectedMenu, handleChangeActiveIndex }
}

