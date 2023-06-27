class  AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback){
        if (!(typeof callback === "function") || time.length !== 5 || time[2] !== ":"){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.length > 0){
            this.alarmCollection.forEach(alarm=>{
                if (alarm.time === time) {
                    console.warn('Уже присутствует звонок на это же время');
                }
            });
        } 
        this.alarmCollection.push({
            callback, 
            time, 
            canCall: true
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime(){
       const now = new Date();
       return now.getHours()+":"+ (now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes());  
       now.get
    }

    start(){
        if (this.intervalId){
            console.warn("Нельзя создавать несколько интервалов!!!")
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000)
        }
    }

    stop(){
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}