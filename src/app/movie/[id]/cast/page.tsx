import { useParams } from 'next/navigation'
import React from 'react'

interface ICastPageProps {

}
function CastPage() {
  const { creditsByMovieId } = useParams()
  console.log('creditsByMovieId:', creditsByMovieId)
  return (
    <div>CastPage</div>
  )
}

export default CastPage