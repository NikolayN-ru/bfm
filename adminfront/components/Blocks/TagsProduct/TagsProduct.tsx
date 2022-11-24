import { FC, useState } from "react"
import { useGetTagsQuery } from "../../../redux/tagsApi"

const TagsProduct: FC<any> = ({ toggleTag }) => {
  const [tags, setTags] = useState<string[]>([])
  const { data = [], isError, isLoading } = useGetTagsQuery()

  const toggle = (id: string) => {
    setTags((prev) => {
      if (prev.includes(id)) {
        return prev.filter((tag) => tag !== id)
      } else return [...prev, id]
    })
  }
  return (
    <>
      <div>
        {data.map((item: any, id: number) => {
          if (tags.includes(item._id)) {
            return (
              <button
                style={{ backgroundColor: "green" }}
                key={id}
                onClick={() => toggle(item._id)}
              >
                {item.title}
              </button>
            )
          }
          return (
            <button key={id} onClick={() => toggle(item._id)}>
              {item.title}
            </button>
          )
        })}
      </div>
      <hr />
      <button onClick={()=>toggleTag(tags)}>поменять теги</button>
      {/* <div>
      {tags.map((item:any, id:number) => {
        return (
          <button key={id} onClick={()=>toggleTag(item._id)}>{item}</button>
        )
      })}
    </div> */}
    </>
  )
}
export default TagsProduct
