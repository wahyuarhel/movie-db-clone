import React, { Fragment } from 'react'

export default function Footer() {
  return (
    <div className='bg-[#03243F]  px-4 pt-5 pb-10 md:pt-10 md:pb-24'>
      <div className='container m-auto flex md:justify-center'>
        <div className='flex flex-col gap-3 md:flex-row md:gap-10'>
          <div className='mb-5'>
            <div className='flex items-center gap-3 '>
              <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightGreen to-lightBlue'>MovieDB</p>
              <div className='w-[50px] h-[20px] rounded-full bg-lightBlue'></div>
            </div>
          </div>
          {footerContent.map((e, i) =>
            <div key={i}>
              <p className='text-white text-xl font-bold'>{e.title.toLocaleUpperCase()}</p>
              {e.fill.map((e, i) =>
                <React.Fragment key={i}>
                  <p className='text-white text-md font-light'>{e}</p>
                </React.Fragment>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )

}

const footerContent = [
  { title: 'The Basics', fill: ['About Mov-DB', 'Contact Us', 'Support Forums', 'API', 'System Status'] },
  { title: 'Get Involved', fill: ['Contribute', 'Add New Movie', 'Add New TV Show'] },
  { title: 'Get Community', fill: ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter'] },
  { title: 'Legal', fill: ['Terms of Use', 'API Terms of Use', 'Privacy Policy', 'DMCA Takedown Request'] },
]