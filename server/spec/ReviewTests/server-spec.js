import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/reviews';

describe('Review Routes', () => {
  describe('Reviews API', () => {
    it ('Should return 200 with valid parameters', (done) => {
      axios.get(`${API_URL}/40344`)
        .then((res) => {
          expect(res.status).toEqual(200);
          done();
        })
        .catch((err) => {
          throw err;
        });
    })
  });
});
