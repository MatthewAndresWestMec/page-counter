import {useEffect,useState} from 'react'

const PageViewCounter = () => {
const [visits, setVisits] = useState(0)

useEffect(() => {
  let localcount = localStorage.getItem("pageVisits")
  let count = Number(localcount)
 localStorage.setItem("pageVisits", count + 1)
 setVisits(count + 1)
}, [])

  return (
    <div className='bottom-right'>This page has been visited {visits}</div>
  )
}

export default PageViewCounter