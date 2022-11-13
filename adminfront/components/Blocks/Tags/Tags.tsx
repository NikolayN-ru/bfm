import { FC, useState } from "react";
import {
    useGetTagsQuery,
    useAddTagMutation,
    useAddDescTagMutation,
    useDeleteTagMutation
} from "../../../redux/tagsApi";

const Tags: FC = () => {
    const [state, setState] = useState<string>('');
    const [count, setCount] = useState<any>('');

    const { data = [], isLoading } = useGetTagsQuery(count);
    const [addTag, { isError }] = useAddTagMutation();
    const [updateTag, { "isLoading": isLoading2 }] = useAddDescTagMutation();
    const [deleteTag, { "isError": Error2, "isLoading": isLoading3 }] = useDeleteTagMutation();

    const [activeDeleteTag, setActiveTag] = useState<string>('');

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const createTag = async () => {
        await addTag({}).unwrap();

    }

    const addDescriptionTag = async (id: any) => {
        await updateTag({ "title": state, "id": id }).unwrap();
    }

    const deleteTagFunc = async (id: any) => {
        setActiveTag(id);
        await deleteTag(id).unwrap();
    }

    return (
        <div>
            <button onClick={() => createTag()}>NEW TAG</button>
            <div>
                {data.map((tag: any, id: number) => {
                    return (
                        tag.title ? <div>
                            <>
                                <span key={id}>{tag.title}</span>
                                {
                                    (activeDeleteTag == tag._id) ? "DELETE-TAG" :
                                        <button onClick={() => deleteTagFunc(tag._id)}>delete tag</button>
                                }
                                <hr />
                            </>
                        </div> :
                            <div>
                                {
                                    isLoading2 ? "UPDATE-TAG" :
                                        <>
                                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                                            <button onClick={() => addDescriptionTag(tag._id)}>ADD-description-tag</button>
                                        </>
                                }
                            </div>
                    )
                }
                )}
            </div>
            <select value={count} onChange={(e) => setCount(e.target.value)}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br />
            <hr />
        </div>
    )
}
export default Tags;