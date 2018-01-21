function distanceIn3D (data){
    let x1 = data[0]
    let y1 = data[1]
    let z1 = data[2]
    let x2 = data[3]
    let y2 = data[4]
    let z2 = data[5]
    console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)));
}

