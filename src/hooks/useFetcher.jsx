import { useEffect, useState } from "react"
import { getInfo } from "../utils/getInfo"

const useFetcher = (query = '2022-05-20') => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const { data } = await getInfo(query)
        setDataState(data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [query])

    return { dataState, loading }
}

export default useFetcher
