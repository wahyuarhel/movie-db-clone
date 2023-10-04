'use client'
import { getCreditByMovieId } from '@/redux/action/movieAction'
import { profileUrlSizeW185 } from '@/redux/api/endpoint'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiSolidUser } from 'react-icons/bi'

function CastPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { credit } = useAppSelector(state => state.movie)

  const getDeptOfCrew = credit.crew?.filter((item, index, self) => self.findIndex((el) => el.department === item.department) === index).map((e) => e.department).sort();
  const getCrewNameByDept = (e: string) => credit.crew?.filter((el) => el.department === e).sort();

  type CrewAndDeptType = {
    name: string,
    dept: string[]
  }
  const [crewNameAndDept, setCrewNameAndDept] = useState<CrewAndDeptType[]>([])

  const getCrewName = credit.crew?.filter((item, index, self) => self.findIndex((el) => el.department === item.department)).map((e) => e.name && e.job).sort();
  console.log('getCrewName', getCrewName)
  useEffect(() => {
    dispatch(getCreditByMovieId(id as string))

  }, [dispatch, id])

  return (
    <main>
      <section>
        <div className='container m-auto'>
          <div className='grid grid-cols-2 pt-5'>
            <div className=''>
              <p className='font-semibold text-xl'>Cast <span className='text-gray-500 font-normal'>{credit.cast !== undefined ? credit.cast!.length - 1 : ''}</span></p>
              {credit.cast?.map((e, i: number) =>
                <div key={i} className='flex items-center my-3'>
                  <div className='w-[66px] h-[66px] relative '>
                    {e.profile_path !== null ?
                      <Image
                        priority
                        src={profileUrlSizeW185 + e.profile_path}
                        alt={e.name}
                        className='object-cover rounded-lg'
                        sizes='(max-width: 768px) 100vw, 700px'
                        fill
                      />
                      : <ImagePlaceholder />
                    }
                  </div>
                  <div className='pl-3'>
                    <p className='font-semibold'>{e.name}</p>
                    <p className='text-sm'>{e.character}</p>
                  </div>
                </div>

              )}
            </div>
            <div className=''>
              <p className='font-semibold text-xl'>Crew <span className='text-gray-500 font-normal'>{credit.crew !== undefined ? credit.crew!.length - 1 : ''}</span></p>
              {getDeptOfCrew?.map((e, i) =>
                <div key={i} className='py-3'>
                  <p className='font-semibold mb-3'>{e}</p>
                  {getCrewNameByDept(e)?.map((e, i) =>
                    <div key={i} className='mb-3'>
                      <div key={i} className='flex items-center mb-3'>
                        {e.profile_path !== null
                          ?
                          <div className='w-[66px] h-[66px] relative'>
                            <Image
                              priority
                              src={profileUrlSizeW185 + e.profile_path}
                              alt={e.name}
                              className='object-cover rounded-lg'
                              sizes='(max-width: 768px) 100%'
                              fill
                            />
                          </div>
                          : <ImagePlaceholder />
                        }
                        <div className='pl-3'>
                          <p className='font-semibold'>{e.name}</p>
                          <p className='text-sm'>{e.job}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )

  function ImagePlaceholder() {
    return (
      <div className='bg-gray-300 w-[66px] h-[66px] flex items-center justify-center rounded-lg'>
        <BiSolidUser className='text-gray-400' size={30} />
      </div>
    )
  }
}

export default CastPage