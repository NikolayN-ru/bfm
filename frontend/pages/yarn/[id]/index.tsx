import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../../components/layout/Layout";

const index = () => {
    const path = 'http://localhost:4200'
    const [state, setState] = useState<any>([]);

    const updateProduct = () => {
        axios.get(`http://localhost:4200/api/yarn/${window.location.href.split('/')[4]}`)
            .then((res) => {
                // console.log(res.data)
                setState(res.data);
            })
    }

    useEffect(() => {
        updateProduct()
    }, [])

    const q = state.variables;
    const tags = state.tags;

    return (
        <div>
            <Layout />
            {state &&
                <div>
                    <img src={`${path}${state.image}`} alt="" width='150' />
                    <p>{state.name}</p>
                    <p>{state.country}</p>
                    <p>{state.description}</p>
                    <p>length - {state.length}</p>
                    <p>price - {state.price}</p>
                    <p>price - {state.wieght}</p>
                    <div>
                        состав - {tags && tags.map((item: any, id:number) => <p key={id}>{item.title}</p>)}
                        {/* variables - {console.log(q, 'q')} */}
                        {q && q.map((item: any, id:number) => <p key={id}>{item.number}</p>)}
                    </div>
                </div>}
        </div>
    )
}
export default index;