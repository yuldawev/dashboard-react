const Insights = ({icon, time, text, number, percent, type}) => {
const Icon = icon;


  return (

      

        <div className={type}>
        <span className="material-icons-sharp"><Icon/></span>
        <div className="middle">
            <div className="left">
                <h3>{text}</h3>
                <h1>{number}</h1>
            </div>
            <div className="progress">
                <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                    <h3>{percent}%</h3>
                </div>
            </div>
        </div>
        <small className="text-muted">{time}</small>
    </div>

    
  );
};

export default Insights;
