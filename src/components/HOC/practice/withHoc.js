import React, {useState} from "react";
const withHoc = (WrappedComponent) => {
    const withWrapper = (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount((count) => count + 1);
        }
        return (
            <>
                <WrappedComponent {...props} count={count} incrementCount={incrementCount}/>
            </>
        )
    }
    return withWrapper;
};
export default withHoc;