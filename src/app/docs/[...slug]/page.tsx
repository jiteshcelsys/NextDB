import React from 'react'

function DocsFeatures({params, }:{
  params :{ 
    slug:string[]
  }
}) {
  console.log(params.slug?.length);
  return (
    <>
      <h1>docs -{params.slug[0]} concept -{params.slug[1]}</h1>
    </>
  )
}

export default DocsFeatures
