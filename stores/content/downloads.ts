import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IDownloadAttachment } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const useDownloads = defineStore('downloads', () => {
  const downloads = ref<CrudResource<IDownloadAttachment>>(defaultCrudState);
  const crudApi = useCrudApi(downloads, 'content/downloads');

  const fetchDownloads = () => {
    return crudApi.fetch();
  }

  const getDownload = (id: number, params?: Record<string, any>) => {
    return crudApi.get(id, { params });
  }

  return { downloads, fetchDownloads, getDownload }
})