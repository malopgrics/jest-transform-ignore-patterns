import { useArrayDifference } from '@vueuse/core';

export const dummy = (array1, array2) => {
    return useArrayDifference(array1, array2).value
}