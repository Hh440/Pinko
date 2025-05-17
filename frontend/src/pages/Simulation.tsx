import { useEffect, useRef,useState } from "react"
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/constant";
import { pad } from "../game/padding";


export const Simulaltion=()=>{
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     let [outputs, setOutputs] = useState<{ [key: number]: number[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
  });


     async function simulate(ballManager:BallManager){
        let i=0;

        while(1){
            i++;
            ballManager.addBall(pad(WIDTH/2+20*(Math.random()-0.5)));
            await new Promise((resolve)=>setTimeout(resolve,1000))
        }
     }
     


       useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement,
        (index: number, startX?: number) => {
          setOutputs((outputs: any) => {
            return {
              ...outputs,
              [index]: [...(outputs[index] as number[]), startX],
            };
          });
        }
      );
      simulate(ballManager);

      ballManager.draw()

      return () => {
        ballManager.stop();
      };
    }
  }, [canvasRef]);
    

    
    return(
      <div className="grid grid-cols-2 h-screen overflow-hidden">
  {/* Left: Scrollable outputs */}
  <div className="overflow-y-auto h-screen bg-[#464033] text-white  px-4 py-6 hide-scrollbar">
    <pre className="whitespace-pre-wrap break-words">
      {JSON.stringify(outputs, null, 2)}
    </pre>
  </div>

  {/* Right: Fixed Canvas */}
  <div className="relative h-screen">
    <div className="fixed right-0 top-0 h-screen w-1/2 flex  justify-center bg-[#7e7c73]">
      <canvas ref={canvasRef} width="800" height="800" />
    </div>
  </div>
</div>

    )
}