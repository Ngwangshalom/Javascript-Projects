function calculateSpeed(distance,time){
    const speed  = distance / time;
    return speed.toFixed(2) + " m/s2";

}

console.log(calculateSpeed(40, 3));