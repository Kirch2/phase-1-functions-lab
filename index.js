
const x = '42';

function distanceFromHqInBlocks(path) {
    if (path > x) {
        return path - x;
    } else {
        return x - path;
    }
}

function distanceFromHqInFeet(corner) {
    return distanceFromHqInBlocks(corner) * 264;
}

function distanceTravelledInFeet(start, finish) {
    if (start < finish) {
        return (finish - start) * 264;
    } else {
        return (start - finish) * 264;
    }
}




function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}