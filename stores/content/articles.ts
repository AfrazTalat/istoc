import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IArticle } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const useArticles = defineStore('articles', () => {
  const articles = ref<CrudResource<IArticle>>(defaultCrudState);
  const crudApi = useCrudApi(articles, 'content/articles');

  const fetchArticles = () => {
    return crudApi.fetch();
  }

  const getArticle = (id: number, params?: Record<string, any>) => {
    return crudApi.get(id, { params });
  }
  
  return { articles, fetchArticles, getArticle }
})