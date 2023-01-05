const Item = ({icon, name, text, number, success=0, danger=0,  gap = 0, iconka=0}) => {
 
    const Icon = icon
    return (
    <div>
    <div className="item online">
      <div className="icon">
        <Icon/>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <small className="text-muted">{text}</small>
      </div>
      {  success > 0 ? (<h5 className="success">{success}</h5>) : ""}
      {danger > 0 ? (<h5 className="danger">{danger}</h5>) : ""}
        <h3>{number}</h3>
       
        
    </div>

   <div className="iteam add-product">{gap > 0 ?(<h3>{gap}</h3>) : ""}
    { iconka > 0?(<iconka/>) : ""}</div>
    
    </div>
  );

 
};

export default Item;
