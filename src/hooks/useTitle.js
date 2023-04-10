const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Movie Review`;
    },[title])
}

export default useTitle;