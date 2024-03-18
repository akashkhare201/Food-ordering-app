import { RES_LOGO } from "../utility/constants"


const Restaurantcard = (props) => {
    const {resdata} = props
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resdata?.info
    return(
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}} > 
        <img alt="res-logo" src={RES_LOGO+cloudinaryImageId} />
      <h1>{name}</h1>
      <h2>{" Rating  "+avgRating}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwo}</h4>
      <h5>{"Delivery Time:  " + sla?.slaString}</h5>
    </div>
    )}

    export default Restaurantcard;