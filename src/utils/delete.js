import { client } from '../service/sanity';

export const deleteComm = (id) => {
  client.delete(id);
};
