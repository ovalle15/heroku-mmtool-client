import https from 'https';
import axios from 'axios';


const api = axios.create({
    baseURL: 'https://mernmanagement.herokuapp.com/api',
    hostname: 'https://mernmanagement.herokuapp.com/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

export const getAllItems = payload =>api.get(`/items`, payload);

export const getItemsById = id => api.get(`/item/${id}`);

export const insertItem = payload => api.post(`/item`, payload);

export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);

export const deleteItemById = id => api.delete(`/item/${id}`);

export const uploadItem = payload => api.post(`/upload`, payload);


const apis = {
    getAllItems,
    getItemsById,
    insertItem,
    updateItemById,
    deleteItemById,
    uploadItem
}

export default apis;