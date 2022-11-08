import { useQuery } from "react-query";

export const usePoPularGenres = () => {
    const queryData = useQuery('popular genre menu', ()=> {})

    return queryData;
}