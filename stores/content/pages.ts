import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IPage } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const usePages = defineStore('pages', () => {
  const pages = ref<CrudResource<IPage>>(defaultCrudState);
  const crudApi = useCrudApi(pages, 'content/pages');

  const fetchPages = () => {
    return crudApi.fetch();
  }

  const getPage = (slug: string, params?: Record<string, any>) => {
    return crudApi.get(slug, { params });
  }

  return { pages, fetchPages, getPage }
})