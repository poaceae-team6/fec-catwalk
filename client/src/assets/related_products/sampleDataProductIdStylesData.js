// GET /products/:product_id/styles -> res.result[0]

const sampleProductIdStylesData = {
  "style_id": 1,
  "name": "Forest Green & Black",
  "original_price": "140",
  "sale_price": "0",
  "default?": true,
  "photos": [
    {
      "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      "url": "urlplaceholder/style_1_photo_number.jpg"
    },
    {
      "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      "url": "urlplaceholder/style_1_photo_number.jpg"
    }
  ],
  "skus": {
    "37": {
      "quantity": 8,
      "size": "XS"
    },
    "38": {
      "quantity": 16,
      "size": "S"
    },
    "39": {
      "quantity": 17,
      "size": "M"
    },
  }
};

export default sampleProductIdStylesData;