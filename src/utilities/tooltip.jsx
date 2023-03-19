const Tooltip  = (text) => {
    return (
        // <div className={text.text[1].url === text.text[1].i?'tooltipActive': 'tooltip'}>
        //    <p>{text.text[0].view}</p> 
        // </div>
        <div className={'tooltip'}>
           <p>{text.text[0].view}</p> 
        </div>
    )
}

export default Tooltip