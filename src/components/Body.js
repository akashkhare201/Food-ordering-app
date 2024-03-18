import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
const [listofRestaurants , setlistofRestaurant] = useState([])
const [searchText ,setsearchText] = useState("")

const [resfiltered, setresfiltered] = useState([])

console.log("body rendered")
useEffect(()=> {
  fetchData()
} , [])

const fetchData = async ()=> {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await data.json()
  console.log(json)
  setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setresfiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
// Conditional Rendering
//if(listofRestaurants.length===0) {
 // return <Shimmer/>
//}
// using ternary opertor "?" adn ":" for above statement
return listofRestaurants.length===0 ?  <Shimmer/> : 
(<div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => 
        setsearchText(e.target.value)} />
        <button className="search-btn" onClick={()=> {
          const resfilteredList = listofRestaurants.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
            } ) //by applying .toLowercase() we make it as a case sensative
            setresfiltered(resfilteredList)
          }}>search</button>
      </div>


        <button className="btn" onClick={() => { const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4.5)
setlistofRestaurant(filteredList)} }>Top Rated Restaurant list</button>
</div>
      <div className="res-container">
      {resfiltered.map((restaurant) => <Restaurantcard key= {restaurant.info.id} resdata = {restaurant}/>
      )}
      </div>
      </div>
    )
  }

  export default Body;
  