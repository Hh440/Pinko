import { HEIGHT, NUM_SINKS, obstacleRadius, sinkWidth, WIDTH } from "./constant";
import { pad } from "./padding";

export interface Obstacle {
    x: number;
    y: number;
    radius: number;
}
export interface Sink{
    x:number,
    y:number,
    width:number,
    height:number,
    multiplier?:number;
}

const MULTIPLIERS: {[key:number]:number}={
    1:16,
    2:9,
    3:2,
    4:1.4,
    5:1.4,
    6:1.2,
    7:1.1,
    8:1,
    9:0.5,
    10:1,
    11:1.1,
    12:1.2,
    13:1.4,
    14:1.4,
    15:2,
    16:9,
    17:16
}


export const createObstacles= ():Obstacle[]=>{
    const obstacles :Obstacle[]= []

    const rows=18;

    for(let row=2;row<rows;row++){
        const numObstacles= row+1;
        const y=0+row*35

        const spacing=35;

        for(let col=0;col<numObstacles;col++){

            const x= WIDTH/2-spacing*(row/2-col);
            obstacles.push({x:pad(x),y:pad(y),radius:obstacleRadius})

        }
    }


    return obstacles

}



export const createSink=():Sink[] =>{
    const sinks:Sink[]=[]

    const spacing=obstacleRadius*2;

    for(let i=0;i<NUM_SINKS;i++){
        const x= WIDTH/2+sinkWidth*(i-Math.floor(NUM_SINKS/2))-spacing*1.5
        const y= HEIGHT-170
        const width= sinkWidth
        const height=width

        sinks.push({x,y,width,height,multiplier:MULTIPLIERS[i+1]})
    
    }





    return sinks
}
