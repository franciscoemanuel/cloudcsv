import httpClient from './HttpClient';

const END_POINT = '/tables/tables';

const getTables = () => httpClient.get(END_POINT);

const getTable = id => httpClient.get(`${END_POINT}/${id}`);

const create = payload => httpClient.post(END_POINT,payload);

const updateColumn = payload => httpClient.patch(`/tables/columns/${payload.id_table_colum}`,payload);

const deleteFromDataBase = id => httpClient.delete(`${END_POINT}/${id}`);

export {
    getTables,
    getTable,
    create,
    deleteFromDataBase,
    updateColumn
}