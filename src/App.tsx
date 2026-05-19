import { Fragment } from 'react/jsx-runtime'
import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from './components/Heading'

export function App(){
    console.log("Olá Mundo!")
    return(
        <Fragment>
        <Heading>Olá Mundo 0!</Heading>
        <Heading>Olá Mundo 1!</Heading>
        <Heading>Olá Mundo 2!</Heading>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Earum adipisci molestias vero? Ipsa ipsam nam quidem quo, 
             aliquam officia esse libero nulla illum quae impedit at, odit sit nobis odio!
            </p>
        </Fragment>
    )
}
      
