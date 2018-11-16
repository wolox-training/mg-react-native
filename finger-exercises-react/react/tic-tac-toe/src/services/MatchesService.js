import api from '../config/api';

// export default {
//   getMatches: () => api.get('/matches')
// };

export default {
  getMatches: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(api.get('/matches'));
      }, 3000);
    })
};
