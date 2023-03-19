
function skillItem(props) {
    return (
        <div className="technologyItem" id={props.item.position} draggable="true" style={{ transform: `translateY(${props.item.position*0.75}%)`}}>
            <div className="tooltip">
                <p>{props.item.name}</p>
            </div>
            <img className="itemInfoChart" src={props.item.url} alt={props.item.name}/>
        </div>
    );
    
  };
  
export default skillItem;