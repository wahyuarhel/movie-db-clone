import DetailHeaderSection from '@/components/detailHeaderSection'
import { ITvDetailsResponse } from '@/types/tvDetailType'
import React from 'react'

interface TvDetailContentProp {
  tvDetails: ITvDetailsResponse
}
const TvDetailContent = (props: TvDetailContentProp) => {
  const { tvDetails } = props
  return (
    <DetailHeaderSection
      backdropPath={tvDetails.backdrop_path}
      posterPath={tvDetails.poster_path}
      title={tvDetails.name}
      firstAirDate={tvDetails.first_air_date}
      voteAverage={tvDetails.vote_average}
      tagline={tvDetails.tagline}
      overview={tvDetails.overview}
      createdBy={tvDetails.created_by}
      genres={tvDetails.genres}
      video={tvDetails.videos}
    />
  )
}

export default TvDetailContent