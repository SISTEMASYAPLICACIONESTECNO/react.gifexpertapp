import { useState,useEffect } from "react";
import {getGits} from "../helpers/getGifs";

export const useFetchGifs = (category) => {

const [state, setState] = useState({
    data:[],
    loading:true
});

useEffect( () => {

    getGits(category)
    .then( imgs => {

        // setTimeout(() => {
            
            console.log(imgs);
            setState({
            data: imgs,
            loading:false
            });

        // }, 3000);


    
    });


},[category])



return state; // data:[], loading: true


}

