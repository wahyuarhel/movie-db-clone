import { useParams } from 'next/navigation'
import React from 'react'

function PersonDetailsPage() {
  const { id } = useParams()
  return (
    <div>PersonDetailsPage</div>
  )
}

export default PersonDetailsPage