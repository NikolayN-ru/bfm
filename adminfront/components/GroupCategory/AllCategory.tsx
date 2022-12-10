import React from 'react'
import { useGetCategory2Query } from '../../redux/Category2Api'
import { useGetCategoryAllQuery } from '../../redux/CategoryApi'

const AllCategory = () => {
  const { data, isLoading } = useGetCategory2Query('a')
  console.log(data, "data")
  return (
    <div>AllCategory</div>
  )
}

export default AllCategory