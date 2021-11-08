import React from 'react';
import { mount, shallow } from 'enzyme';

import ReviewTile from '../../../review/reviewtile/ReviewTile.jsx'

describe('<ReviewTile />', () => {
  const oneReview = {
    "review_id": 841508,
    "rating": 3,
    "summary": "Wearable, but not practical",
    "recommend": true,
    "response": null,
    "body": "Don’t get me wrong, it is comfortable, but the outfit simply isn’t practical. It does not provide adequate cover, has no modular components, and I had to glue a bunch of grass to it (not provided in the package). Sure, you could wear it in public, but not down field. ",
    "date": "2021-09-24T00:00:00.000Z",
    "reviewer_name": "ParkRangerDan",
    "helpfulness": 54,
    "photos": [
        {
            "id": 1595490,
            "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632519216/vzyagmyflmv2hie3zybp.png"
        },
        {
            "id": 1595491,
            "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632519216/ofiw4yzfgapmassp3xj1.png"
        },
        {
            "id": 1595489,
            "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632519216/lyosyladxh40zo85o2lu.png"
        }]};

  it ('allows us to set props', () => {
    const wrapper = shallow(<ReviewTile review={oneReview}/>);
    expect(wrapper.contains(oneReview.summary)).toBe(true);
  })
});