import { defineStore } from 'pinia'
import { ISetting } from '~/types/common/global'
import { CrudResource } from '~/types/common/http'
import { defaultCrudState } from '~/utilities/http'

export const useSettings = defineStore('settings', () => {
  const settings = ref<CrudResource<ISetting>>(defaultCrudState);
  const crudApi = useCrudApi(settings, 'commons/settings');

  const keyedSettings = computed(() => useKeyBy(settings.value.list, 'key'));

  const setting = (key: string) => keyedSettings.value[key];
  const webTitle = (subtitle?: string) => `${setting('app_name')?.value ?? 'SCMS'} ${subtitle ? `- ${subtitle}` : ''}`

  const fetchSettings = () => {
    return crudApi.fetch();
  }

  return { settings, fetchSettings, setting, webTitle }
})