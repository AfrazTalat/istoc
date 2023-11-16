import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IProject } from '~/types/content';
import { defaultCrudState } from '~/utilities/http'

export const useProjects = defineStore('projects', () => {
  const projects = ref<CrudResource<IProject>>(defaultCrudState);
  const crudApi = useCrudApi(projects, 'content/projects');

  const fetchProjects = () => {
    return crudApi.fetch();
  }

  const getProject = (id: number, params?: Record<string, any>) => {
    return crudApi.get(id, { params });
  }

  return { projects, fetchProjects, getProject }
})