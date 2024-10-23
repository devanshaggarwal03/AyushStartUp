import './language.css';

const Languageoption = (props) => {
    return (
        <select onChange={props.onChange} className="translate">
            <option value={'en'}>English</option>
            <option value={'hi'}>Hindi</option>
            <option value={'chi'}>Chinese</option>
        </select>
    );
};

export default Languageoption;