import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { ISlider } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const useSliders = defineStore('sliders', () => {
  const sliders = ref<CrudResource<ISlider>>(defaultCrudState);
  const crudApi = useCrudApi(sliders, 'content/sliders');

  const fetchSliders = () => {
    return crudApi.fetch();
  }

  return { sliders, fetchSliders }
})