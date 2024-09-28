import { ReactNode } from "react";
import classes from "./CrossKey.module.css"

type Color = "up"|"down"|"left"|"right";

const colorStyles ={
     up:{backgroundColor:"#FFFFFF"},
     down:{backgroundColor:"#FFFFFF"},
     left:{backgroundColor:"#FFFFFF"},
     right:{backgroundColor:"#FFFFFF"},
    };

type Props={
    children? :ReactNode;
    onPress ?:()=>void ;
    onRelease ?:()=> void ;
    color?:Color;
};

export const CrossKeyButton = ({
    children ,
    onPress,
    onRelease,
    color
}:Props)=>{
    return(
        <button
        onTouchStart={onPress}
        onTouchEnd={onRelease}
        onMouseDown={onPress}
        onMouseUp={onRelease}
        className={classes.key}
        style={color?colorStyles[color]:{}}
        >
            {children}
        </button>
    )
}