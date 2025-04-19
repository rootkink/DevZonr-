import { useState } from "react";
import Dropdown from "./components/dropdown";
import LOGGER from "./logManager";
const Mode = ()=>{
            const [selectedMode, setSelectedMode] = useState<string>("");
            const [isVisible,setVisible] = useState<boolean>(true)

            const start=()=>{
                setVisible(false)
                LOGGER.addLog(selectedMode)
                console.log("started")
            }
            const stop=()=>{
                setVisible(true)
                LOGGER.stopLog()
                console.log("ended")
            }
            const aseHi =()=>{
                console.log(LOGGER.getLog())
                console.log("logged")
            }
    return (
     <div>
       {isVisible && <Dropdown options={["Learn", "Explore", "Build","Grind"]} onSelect={setSelectedMode} label="Mode" />}
        {isVisible &&  <button className="bg-green-400 py-2 px-4" onClick={start}>Start</button>}
        {!isVisible && <button className="bg-red-400 py-2 px-4" onClick={stop}>Stop</button>}
        <button className="bg-amber-400 py-2 px-4" onClick={aseHi}>Log</button>
     </div>
    )
}
export default Mode