import { randomUUID } from 'crypto';
import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { ICart } from '~/types/resources/ecommerce';
import { defaultCrudState } from '~/utilities/http'
import { uuid } from '~/utilities/io';

export const useCart = defineStore('shopping-cart', () => {
  const instance = ref<ICart>();

  const getSessionId = () => {
    if (process.server) return undefined;
    const sessionId = localStorage.getItem('CART_SESSION') ?? uuid();
    localStorage.setItem('CART_SESSION', sessionId)
    return sessionId;
  }

  const api = useApi(`ecommerce/cart/${getSessionId()}`);

  const fetchCart = (params?: Record<string, any>) => {
    return api.get('', { params }).then((res: any) => instance.value = res);
  }

  const addProduct = (id: number, data?: Record<string, any>) => {
    return api.post(`/${id}`, { data }).then((res: any) => instance.value = res.data);
  }

  const deleteItem = (id: number) => {
    return api.del(`/${id}`).then((res: any) => instance.value = res.data);;
  }

  const transformToOrder = (orderData: Record<string, any>) => {
    return api.post(`/order`, { data: orderData }).then((res) => {
      instance.value = undefined;
      return res
    });
  }

  return { instance, fetchCart, addProduct, deleteItem, transformToOrder, }
})