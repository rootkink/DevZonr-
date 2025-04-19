import Log from "./log"

class LogManager{
    logs: Log[] = [];
    currentLog: Log | null = null;
   addLog(mode : string){
      const startTime = new Date().toLocaleTimeString("en-US",{hour : "2-digit",minute:"2-digit",hour12: false})
      this.currentLog = new Log(mode,startTime)
      console.log("step 1 done")
   }
   stopLog(){
    if(this.currentLog){
        const endTime = new Date().toLocaleTimeString("en-US",{hour : "2-digit",minute:"2-digit",hour12: false})
       this.currentLog.end(endTime);
       this.logs.push(this.currentLog);
       console.log(this.currentLog.duration())
    this.currentLog = null;
    console.log("last step done")
    }else{
        console.warn("No log is currently active.");
    }
   }
   getLog(){
    return this.logs
   }
}

const LOGGER = new LogManager()
export default LOGGER
