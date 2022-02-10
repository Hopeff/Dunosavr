import {useGeolocation} from 'react-use';

    const Geo = () => {
        const state = useGeolocation();
        return (
            <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
        )}
export default Geo;