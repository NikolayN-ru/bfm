import React from 'react'
import Select from 'react-select'
import Layout from '../../components/layout/Layout'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Index = () => {
    return (
        <div>
            <Layout>
                   
            </Layout>
            <div>
            <Select
                        placeholder='placeholder'
                        options={options}
                        isSearchable={true}
                    />
            </div>
        </div>
    )
}
export default Index;
