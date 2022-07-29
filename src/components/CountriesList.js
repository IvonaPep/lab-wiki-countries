import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: 90, overflow: 'scroll' }}>
          <div className="list-group">
            <h1>{props.country.name.official}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
