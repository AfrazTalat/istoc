import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IBranch } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const useBranches = defineStore('branches', () => {
  const branches = ref<CrudResource<IBranch>>(defaultCrudState);
  const crudApi = useCrudApi(branches, 'extras/branches');

  const fetchBranches = () => {
    return crudApi.fetch();
  }

  return { branches, fetchBranches }
})