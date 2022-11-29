import { FC, useEffect, useState } from "react"
import { useGetWaresQuery } from "../../redux/waresApi"

const initState = {
  title: "",
  description: "",
}

const Wares: FC<any> = ({ id }) => {
  const { data, isLoading } = useGetWaresQuery(id)
  const [state, setState] = useState(initState)
  console.log(state, "state")
  console.log(data, "data")

  useEffect(() => {
    setState(data)
  }, [data])

  const changeTitle = (e: any) => {
    setState((prev: any) => {
      return {
        ...prev,
        title: e.target.value,
      }
    })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      warres - id -- {id}
      <p>{state.title}</p>
      <div>
        <input
          type="text"
          onChange={(e) => changeTitle(e)}
        //   value={state.title}
        />
      </div>
    </div>
  )
}
export default Wares
