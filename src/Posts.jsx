import PropTypes from 'prop-types';
import "./App.css";
export default function Posts({Posts_info}){
    const{userId,title,body}=Posts_info
    return(
        <div className='student1'>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}
Posts.propTypes={
    Posts_info:PropTypes.object.isRequired
}