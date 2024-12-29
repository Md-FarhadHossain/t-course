import { serverSide } from '@/constant'

import React, { ReactNode } from 'react'

type server_side = {
  id: string,

  // params: ReactNode
}

const ServerSideId = ({ params }: { params: server_side }) => {

  const { id } = params

  // const url = `https://www.youtube.com/embed/${id}?loop=1&rel=0&color=white`
  const url = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&loop=1&modestbranding=1&rel=0&color=white&cc_load_policy=1`
  return (
    <aside className='p-8 lg:h-[70vh] md:h-[45vh] lg:shadow-none h-full shadow-lg lg:rounded-none rounded-2xl'>


      <iframe className='lg:h-[720px] lg:w-[full] w-full md:h-full h-[260px] sm:h-[400px] rounded-2xl' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <br />

    </aside>
  )
}

export default ServerSideId