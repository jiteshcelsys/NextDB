import React from 'react'
import NotFound from './not-found';
function ReviewOfProduct({params}) {
  if(params.productId<500){
    return (
      <>
        <h1>review {params.reviewId} of the Product{params.productId}</h1>
      </>
    )
  }
  else{
    NotFound();
}
}

export default ReviewOfProduct
