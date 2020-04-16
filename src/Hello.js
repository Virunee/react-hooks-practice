import React from 'react';

export const Hello = () => {
    React.useEffect(() => {
        console.log("render");
    
        return () => {
          // clean-up code goes here
          console.log("unmount")
        }
      }, [])

      return <div className="toggableBlock">Hello!</div>
}
