class Log{
    mode : string;
    startTime : string ;
    endTime ? : string;
    totalDuration ?: number;

    constructor (mode : string,startTime : string){
      this.mode = mode;
      this.startTime = startTime;
    }
    end(endTime : string){
        this.endTime = endTime;
    }
    duration(){
      const [startHour,startMinute] = this.startTime.split(":").map(Number)
      const [endHour,endMinute] = this.endTime.split(":").map(Number)
      const startTotalMin = startHour * 60 + startMinute;
      const endTotalMinute = endHour * 60 + endMinute;
      this.totalDuration = endTotalMinute - startTotalMin
    }
}
export default Log