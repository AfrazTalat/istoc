import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IPartner } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const usePartners = defineStore('partners', () => {
  const partners = ref<CrudResource<IPartner>>(defaultCrudState);
  const crudApi = useCrudApi(partners, 'extras/partners');

  const fetchPartners = () => {
    return crudApi.fetch();
  }

  return { partners, fetchPartners }
})