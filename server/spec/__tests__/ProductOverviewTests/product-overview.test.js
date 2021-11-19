const pactum = require('pactum');

const url = require('../../../atelier_api.js')

test('should retrieve product information', () => {
  return pactum.spec()
    .get(`${url}/products`)
    .expectStatus(200)
    .expectJson([{
          "id": 1,
          "name": "Camo Onesie",
          "slogan": "Blend in to your crowd",
          "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
          "category": "Jackets",
          "default_price": 140,
          // "features": [
          //     {
          //         "feature": "Fabric",
          //         "value": "Canvas"
          //     },
          //     {
          //         "feature": "Buttons",
          //         "value": "Brass"
          //     }
          // ]
    }])
})

// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:3000/reviews';

// describe('Review Routes', () => {
//   describe('Reviews API', () => {
//     it ('Should return 200 with valid parameters', (done) => {
//       axios.get(`${API_URL}/40344`)
//         .then((res) => {
//           expect(res.status).toEqual(200);
//           done();
//         })
//         .catch((err) => {
//           throw err;
//         });
//     })
//   });
// });
