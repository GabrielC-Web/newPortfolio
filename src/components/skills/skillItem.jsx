
function skillItem(props) {
    return (
        // <div className="cursor-pointer flexCentered w-20 h-20 darkBoxColor p-6 rounded-md" id={props.item.position} draggable="true" style={{ transform: `translateY(${props.item.position*0.75}%)`}}>
        <div className="technologyItem" id={props.item.position} draggable="true" style={{ transform: `translateY(${props.item.position*0.75}%)`}}>
            <div className="tooltip">
                <p>{props.item.name}</p>
            </div>
            <img src={props.item.url} alt={props.item.name}/>
        </div>
    );
    
  };
  
export default skillItem;