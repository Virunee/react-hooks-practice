import React from 'react';



export const useFetch = url => {
    const [state, setState] = React.useState({apiData: null, loading: true})

    React.useEffect(() => {
        setState(state => ({apiData: state.apiData, loading: true}));

        fetch(url).then(response => response.text())
        .then(responseText => {
        setState({apiData: responseText, loading: false})
      })
    }, [url, setState])

    return state;
  }