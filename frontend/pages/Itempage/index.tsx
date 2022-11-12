import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select
    placeholder='plaseholder'
    options={options}
    isSearchable={true}
  // onChange={setStatusVision}
  />
)

const Index = () => {
  return (
    <div>
      <div>
        <Select
          placeholder='plaseholder'
          options={options}
          isSearchable={true}
        />
      </div>
    </div>
  )
}
export default Index