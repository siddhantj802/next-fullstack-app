import React from 'react'

function BlogLayout({Children}) {
  return (
    <div>
        <h1>Bloglayout</h1>
        {Children}
    </div>
  )
}

export default BlogLayout