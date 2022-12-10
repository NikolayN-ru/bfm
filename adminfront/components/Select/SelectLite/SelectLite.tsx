import { FC } from "react"
import { useGetCategory2Query } from "../../../redux/Category2Api"
import { useGetCategoryAllQuery } from "../../../redux/CategoryApi"

const SelectLite: FC<any> = ({ setCategory }): JSX.Element => {
    const { data=[], isLoading } = useGetCategory2Query(null)
  console.log(data, "data")

const setLocalCategory = (e:any) => {
    // const newCategory:any = []
    data.forEach((item:any) => {
        if(item.title === e){
            // newCategory.push(item._id)
            // console.log(item._id, 'item._id')
        setCategory(item._id)
      }
    })
}

if(isLoading){
  return <>LOADING CATEGOERY</>
}

  return (
    <div>
      <label htmlFor="category-select">выберете категорию: </label>
      <select name="pets" id="category-select"  onChange={(e:any)=>setLocalCategory(e.target.value)}>
        <option value="">-- выберите категорию --</option>
        {/* {variables.map((item) => (
          <option value="dog">{item}</option>
        ))} */}
        {data.map((item: any, id: number) => {
          return <option key={id} value={item.title} >{item.title}</option>
        })}
        {/* <option value="goldfish">Goldfish</option> */}
      </select>
    </div>
  )
}
export default SelectLite
