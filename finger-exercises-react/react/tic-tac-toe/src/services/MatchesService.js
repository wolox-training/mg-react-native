import api from '../config/api';

export default {
  getMatches: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(api.get('/matches'));
      }, 3000);
    })
};
