function InputArea(props) {
    return (
        <div className="form">
            <input onChange={props.onChange} type="text" value={props.value} />
            <button onClick={props.onClick}>
                <span>Add</span>
            </button>
            <button id="clear" onClick={props.onClear}>
                <span>Clear</span>
            </button>
        </div>
    );
}

export default InputArea;