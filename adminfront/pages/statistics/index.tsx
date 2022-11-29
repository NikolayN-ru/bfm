import { useState } from "react";
import ButtonOk from "../../components/Buttons/ButtonOK/ButtonOk"
import { useGetCategory2Query } from "../../redux/Category2Api";
import { useGetCategoryAllQuery } from "../../redux/CategoryApi";

const index = () => {

    const { data = [], isLoading } = useGetCategory2Query();
    const [count, setCount] = useState<number>(0);
    const [obj, setObject] = useState<any>([]);

    const counFunc = () => {
        setCount(0);
        setObject([])

        data.forEach((item: any) => {
            let localcount = 0;
            item.YarnItem.forEach((itemVar: any) => {
                itemVar.variables.forEach((element: any) => {
                    setCount(prev => (prev += element.count * itemVar.price))
                    localcount += element.count * itemVar.price;
                });
            })
            setObject((prev: any) => {
                return [...prev, { "title": item.title, "count": localcount }]
            });
        })
    }

    return (
        <div>
            <h3>Статистика:</h3>
            <div>
                <p>вся стоимость товаров загруженая в систему</p>
                <ButtonOk title='посчитать' okFunc={counFunc} />
                <h1>{count}</h1>
            </div>
            <div>
                {obj && obj.map((item: any, id: number) => <p key={id}>{item.title} на сумму {item.count} p.</p>)}
            </div>
        </div>
    )
}
export default index;

