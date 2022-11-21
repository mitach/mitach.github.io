export function formatNum(num) {
    if (num.length == 1) {
        num = '00' + num;
    } else if (num.length == 2) {
        num = '0' + num;
    }

    return num;
}

export function slotWriter(string, ...slots) {
    slots[0].textContent = string[0];
    slots[1].textContent = string[1];
    slots[2].textContent = string[2];
}

export function playAllAnimations(...elements) {
    for (let element of elements) {
        element.play();
    }
}

export function stopAllAnimations(...elements) {
    for (let element of elements) {
        element.cancel()
    }
}