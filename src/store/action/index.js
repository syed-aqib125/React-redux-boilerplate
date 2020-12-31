

const set_data = () => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", payload: { name: "hussain", email: "hussain@gmail.com" } })
    }
}


export {
    set_data
}