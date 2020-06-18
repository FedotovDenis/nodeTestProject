const EventEmitter = require("events")

//const emitter = new EventEmitter()

//emitter.on("anything", data => {
//    console.log("ON: anything", data)
//})

//emitter.emit("anything", {a: 1})
//emitter.emit("anything", {b: 2})
//emitter.emit("anything", {c: 3})
//emitter.emit("anything", {d: 4})
//emitter.emit("anything", {g: 5})

//setTimeout(() => {
//    emitter.emit("anything", {e: 3})
//}, 1500)

class Dispatcher extends EventEmitter {
    subscribe(eventName, cd) {
        console.log("[Subscribe...]")
        this.on(eventName, cd)
    }

    dispatch(eventName, data) {
        console.log("[Dispatching...]")
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe("aaa", data => {
    console.log("ON: aaa", data)
})

dis.dispatch("aaa", {aaa: 1000})