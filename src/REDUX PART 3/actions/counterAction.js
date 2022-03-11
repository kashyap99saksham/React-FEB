import axios from "axios"

export const increase = () => {
    return {
        type: "AGE_UP",
        payload: 1
    }
    
}
export const decrease = () => {
    return {
        type: "AGE_DOWN"
    }
}

