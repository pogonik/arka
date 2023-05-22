import React from 'react'

// /**
//  * @typedef {import("@prismicio/client").Content.VideoEmbedSlice} VideoEmbedSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<VideoEmbedSlice>} VideoEmbedProps
//  * @param { VideoEmbedProps }
//  */
const VideoEmbed = ({ slice }) => {
  let embedURL = slice.primary.embed.embed_url.replace('watch?v=','embed/');
  return (<div className='embed_wrapper'><iframe width="560" height="315" src={embedURL} title={slice.primary.embed.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>)
}

export default VideoEmbed