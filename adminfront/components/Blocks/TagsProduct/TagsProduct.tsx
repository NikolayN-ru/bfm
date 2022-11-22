import { FC, useState } from "react"
import { useGetTagsQuery } from "../../../redux/tagsApi";

const TagsProduct:FC<any> = ({toggleTag}) => {
    const [tags, setTags] = useState();
    const { data = [], isLoading } = useGetTagsQuery('');

    console.log(data, 'tags')
  return (
    <div>
        {data.map((item:any, id:number) => {
            return (
                <button key={id} onClick={()=>toggleTag(item._id)}>{item.title}</button>
            )
        })}
    </div>
  )
}
export default TagsProduct