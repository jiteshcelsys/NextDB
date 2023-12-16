import React from 'react'
import {notFound} from 'next/navigation'
function ReviewOfProduct({params}) {
  if(params.productId<500){
    console.log(params.productId);
    return (
      <>
        <h1>review {params.reviewId} of the Product{params.productId}</h1>
      </>
    )
  }
  else{
    notFound();
}
}

export default ReviewOfProduct
