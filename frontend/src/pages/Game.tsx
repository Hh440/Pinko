import { useState,useEffect,useRef } from "react";
import { BallManager } from "../game/classes/BallManager";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { baseURL } from "../utils";

export const Game=()=>{
     const [ballManager, setBallManager] = useState<BallManager>();
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <Button
        className="px-10 mb-4"
        onClick={async () => {
          const response = await axios.post(`${baseURL}/game`, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
           // ballManager.addBall(3908464.1604784667)
          }
        }}
      >
        Add ball
      </Button>
    </div>
  );
}