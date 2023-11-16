import { defineStore } from 'pinia'
import { IAlert } from '~/types/common/interface';
import { uuid } from '~/utilities/io';

export const useAlerts = defineStore('alerts', () => {
  const alerts = ref<IAlert[]>([]);

  const add = (alert: IAlert) => {
    alert.id = uuid();
    alerts.value.unshift(alert);
  }

  const remove = (alert: IAlert | string) => {
    alerts.value = alerts.value.filter((i) => typeof (alert) === 'string' ? i.id !== alert : alert.id !== alert.id);
  }

  return { alerts, add, remove }
})