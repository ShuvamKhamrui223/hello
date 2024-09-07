import axios_instance from "../lib/AXIOS.jsX"

const useFetchAPI = () => {
    const FETCH=axios_instance.get("/commodityprice")
}

export default useFetchAPI
