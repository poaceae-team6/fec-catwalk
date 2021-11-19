const pactum = require('pactum');
require('regenerator-runtime/runtime')
const url = require('../../../atelier_api.js')
const { singleProductData } = require('./mockData.js');

// jest.mock('node-fetch')
// const fetch = require('node-fetch')
// const { Response } = jest.requireActual('node-fetch');

describe('Single Product Info', () => {
    test('should retrieve product information', async () => {
      await pactum.spec()
        .get(`${url}/products/1`)
        .expectStatus(200)
        .expectJson({
              "id": 1,
              "name": "Camo Onesie",
              "slogan": "Blend in to your crowd",
              "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
              "category": "Jackets",
              "default_price": 140,
              "features": [
                  {
                      "feature": "Fabric",
                      "value": "Canvas"
                  },
                  {
                      "feature": "Buttons",
                      "value": "Brass"
                  }
              ]
        })
    })
})

// describe('Product Style Info', () => {
//     test('should retrieve product style information', async () => {
//       await pactum.spec()
//         .get(`${url}/products/1`)
//         .expectStatus(200)
//         .expectJson({
//         })
//     })
// })
