import { backdropUrlSizeW1280, posterUrlSizeOriginal } from '@/redux/api/endpoint'
import { convertNumberToTimeFormat } from '@/utils/utlis'
import Image from 'next/image'


function MovieDetailContent(props: any) {
  const {
    contentData
  } = props
  return (
    <main>
      <section className='w-full bg-cover bg-no-repeat text-white'
        style={{ backgroundImage: `url(${backdropUrlSizeW1280 + contentData.backdrop_path})` }}>
        <div className='bg-blend-screen bg-black/50 p-10 bg-right'>
          <div className='container m-auto flex gap-10'>
            <div className='max-h-[450px] max-w-[300px]'>
              {contentData?.poster_path !== null
                ?
                <Image
                  src={posterUrlSizeOriginal + contentData?.poster_path}
                  alt={contentData.poster_path ?? ''}
                  width={500}
                  height={500}
                  className='rounded-xl' /> : null
              }
            </div>
            <div>
              <div className='flex gap-2'>
                <p className='text-4xl font-semibold'>{contentData.title ?? contentData.name}</p>
                <p className='text-gray-300 text-4xl '>({contentData?.release_date?.slice(0, 4) ?? contentData.first_air_date.slice(0, 4)})</p>
              </div>
              <div>
                <div></div>
                <div className='flex gap-2 items-center'>
                  {contentData.runTime !== undefined ?
                    <>
                      <p>{contentData.release_date}</p>
                      <span>•</span>
                    </>
                    : null
                  }
                  {contentData?.genres.map((e: any, i: number) =>
                    <div key={i}>
                      <span key={i}>{e.name}</span>
                      {i !== contentData.genres.length - 1 ?
                        <span>{', '}</span> : null
                      }
                    </div>
                  )}
                  {contentData.runTime !== undefined ?
                    <>
                      <span>•</span>
                      <p>{convertNumberToTimeFormat(contentData.runtime)}</p>
                    </> : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MovieDetailContent