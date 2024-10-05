function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()
saturdayFun(activity = "bathe my dog")

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
mondayWork()
mondayWork(activity = "work from home")

function wrapAdjective(emphasis = "*") {
    return function (adjective = "a hard worker") {
        return `You are ${emphasis}${adjective}${emphasis}!`;
    }
}
wrapAdjective("||")("a dedicated programmer");