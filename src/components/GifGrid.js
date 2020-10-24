import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGits } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);
    const {data:images ,loading} = useFetchGifs( category );
    console.log(loading);
    // useEffect( () => {
    //     // getGits();
    //     getGits(category)
    //     .then(imgs => setImages(imgs));
    // },[category])

/*     const getGits = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HJbFbqy2wWbGFPm0XLQi8kLBr6H2qe3e`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }
 */
    // getGits();

    return (      
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading &&  <p className="animate__animated animate__flash" >Cargando...</p> }
            {/* {loading ?  <p>Cargando...</p> :null}  es lo mismo de la linea de arriba arriba*/}
            <div className="card-grid">
        

                    {
                    images.map( (img) =>  ( 
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                        // <li key={img.id}>{img.title}</li> 
                        ))
                    }

            </div>     
        </>

    )
}
