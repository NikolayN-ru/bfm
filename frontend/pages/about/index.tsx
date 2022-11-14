import { FC } from 'react';
import Select from 'react-select';

import Layout from '../../components/layout/Layout';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Index: FC = () => {
    return (
        <div>
            <Layout>
                <div style={{color: "rgb(118, 85, 165)"}}>
                    <p>
                        телефон: 8-999-455-97-07
                    </p>
                    <p>
                        время работы:
                    </p>
                    <p>
                        пн-пт 11:00 - 19:00
                    </p>
                    <p>
                        cб, вс 11:00 - 17:00
                    </p>
                </div>
            </Layout>
            <div>
                {/* <Select
                        placeholder='placeholder'
                        options={options}
                        isSearchable={true}
                    /> */}


            </div>
        </div>
    )
}
export default Index;
