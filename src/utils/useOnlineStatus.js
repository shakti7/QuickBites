import {useEffect,useState} from "react"

const useOnlineStatus=()=>{
    const [online,setOnline] = useState(true)
    useEffect(()=>{
        const handleOffline = () => setOnline(false)
        const handleOnline = () => setOnline(true)

        window.addEventListener("offline",handleOffline)
        window.addEventListener("online",handleOnline)

        return ()=>{
            window.removeEventListener("offline",handleOffline)
            window.removeEventListener("online",handleOnline)
        }
    },[])

    return online;
}

export default useOnlineStatus;