const Ad = ({text, icon }) => {
    const Icon = icon
    return ( 
        <div className="iteam add-product">
        <div>
          <Icon/>
          <h3>{text}</h3>
        </div>
      </div>
     );
}
 
export default Add;