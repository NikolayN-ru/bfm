import { FC, useState } from "react"
import {
  useGetTagsQuery,
  useAddTagMutation,
  useAddDescTagMutation,
  useDeleteTagMutation,
} from "../../../redux/tagsApi"
import ButtonOff from "../../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import styles from "./Tags.module.scss"

const Tags: FC = () => {
  const [state, setState] = useState<string>("")
  const [count, setCount] = useState<any>("")

  const { data = [], isLoading } = useGetTagsQuery(count)
  const [addTag, { isError }] = useAddTagMutation()
  const [updateTag, { isLoading: isLoading2 }] = useAddDescTagMutation()
  const [deleteTag, { isError: Error2, isLoading: isLoading3 }] =
    useDeleteTagMutation()

  const [activeDeleteTag, setActiveTag] = useState<string>("")

  if (isLoading) {
    return <p>Loading...</p>
  }

  const createTag = async () => {
    await addTag({}).unwrap()
  }

  const addDescriptionTag = async (id: any) => {
    await updateTag({ title: state, id: id }).unwrap()
    setState("")
  }

  const deleteTagFunc = async (id: any) => {
    setActiveTag(id)
    await deleteTag(id).unwrap()
  }

  return (
    <div className={styles.wrapper}>
      <p>Теги:</p>
      <div>
        {data.map((tag: any, id: number) => {
          return tag.title ? (
            <div className={styles.tags} key={id}>
              <div className={styles.tag}>
                <span className={styles.title}>{tag.title}</span>
                {activeDeleteTag == tag._id ? (
                  "DELETE-TAG"
                ) : (
                  <ButtonOff
                    delFunc={() => deleteTagFunc(tag._id)}
                    title="удалить тег"
                  />
                )}
              </div>
            </div>
          ) : (
            <div>
              {isLoading2 ? (
                "UPDATE-TAG"
              ) : (
                <div>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    style={{
                      margin: "5px",
                      width: "115px",
                      marginBottom: "20px",
                    }}
                  />
                  {/* <button onClick={() => addDescriptionTag(tag._id)}>ADD-description-tag</button> */}
                  <ButtonOk
                    okFunc={() => addDescriptionTag(tag._id)}
                    title="добавить тег"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <ButtonOk okFunc={createTag} title="добавить новый тег" />
    </div>
  )
}
export default Tags
