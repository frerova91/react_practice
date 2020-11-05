import { useState, useEffect } from 'react'

function debounce (fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])
  useEffect(() => {
    const handleWindowResize = debounce(() => {
      /* console.log('***** debounced resize') See the cool difference in console */
      setWindowSize([window.innerWidth, window.innerHeight])
    }, 100) // 100ms
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, []) // Note this empty array. this effect should run only on mount and unmount
  return windowSize
}
