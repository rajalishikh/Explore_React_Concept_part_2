import PropTypes from 'prop-types';
import "./App.css";

export default function Friend2({Friend_details}){
    let{name,username}=Friend_details
    return(
        <div className="student">
            <p>Name:{name}</p>
            <p>User Name:{username}</p>
        </div>
    )
}
Friend2.propTypes={
    Friend_details:PropTypes.object.isRequired
}