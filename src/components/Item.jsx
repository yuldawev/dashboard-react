const Item = ({icon, time, text, number, percent, type}) => {
 
    const Icon = icon
    return (
    
    <div>
    {type !== "add-product" ? (<div className={`item ${type}`}>
        <div className="icon">
            <Icon/>
        </div>
        <div className="info">
            <h3>{text}</h3>
            <small className="text-muted">{time}</small>
        </div>
        <h5 className={percent > 0 ? "success" : "danger"}>{percent}%</h5>
        <h3>{number}</h3>
    </div>) : (
        <div className="item add-product"><Icon/><h3>{text}</h3></div>
    )}
</div>
  );

 
};

export default Item;
