import { useRouter } from "next/router"
import React from "react"
import Needles from "../../../components/Needles/needles"

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      Item needle
      <div>
        <p></p>
        <Needles id={id}/>
      </div>
    </div>
  )
}

export default Index
