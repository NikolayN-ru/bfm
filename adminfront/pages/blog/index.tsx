import React, { FC } from "react"
import axios from "axios"

const Index: FC = ({}): JSX.Element => {
  let data = {
    title: "title-999",
    text: "text-999",
  }
  // реализация запроса за добавление
  const getPost = () => {
    axios.post(`http://127.0.0.1:8000/api/blog-new/`, data).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  return (
    <div>
      Index - добавление поста
      <button onClick={getPost}>POST</button>
    </div>
  )
}

export default Index
