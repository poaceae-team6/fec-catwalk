
import React from 'react';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div>
        <div>Sort</div>
        <div>ReviewList</div>
        <button>
          More Review
        </button>
        <button>
          Write New Review
        </button>

      </div>
    )
  }
}


export default Reviews;