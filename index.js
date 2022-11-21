import { spinAnimation, lastSpinRotation } from "./src/createAnimation.js";
import { slotWriter, formatNum, playAllAnimations, stopAllAnimations } from "./src/helperFunctions.js";

const countModal = document.getElementById("insert-number-modal");
const inputCount = document.getElementById('people-count');
const closeCountModal = document.getElementsByClassName("close")[0];

const winnerModal = document.getElementById("winner-modal");
const numEl = document.getElementById('num');
const againInWinModal = document.getElementsByClassName("again")[0];
const nextInWinModal = document.getElementsByClassName("next")[0];

const infoBoxes = document.querySelectorAll('.info-box');

let isModalOpen = true;
const members = [];

let isStart = true;
let slot = 1;
let currBox = 0;

let firstSlotSpinning;
let secondSlotSpinning;
let thirdSlotSpinning;

let changeNumInterval;

closeCountModal.addEventListener('click', () => {
    countModalLogic();
});

countModal.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        countModalLogic();
    }
});

function countModalLogic() {
    let count = inputCount.value;
    if (count > 0 && count < 1000) {
        countModal.style.display = "none";
        isModalOpen = false;

        for (let member = 1; member <= count; member++) {
            members.push(formatNum(member.toString()));
        }

        infoBoxes[currBox].classList.add('active');
        attachSpaceEvent();
    }
}

againInWinModal.addEventListener('click', spinAgain);
nextInWinModal.addEventListener('click', nextReward);

function attachSpaceEvent() {
    document.body.addEventListener('keydown', onSpaceEvent);

    function onSpaceEvent(e) {
        const firstSlot = document.querySelector(`.number_${slot}`);
        const secondSlot = document.querySelector(`.number_${slot + 1}`);
        const thirdSlot = document.querySelector(`.number_${slot + 2}`);

        if (!isModalOpen) {
            if (e.key == " " || e.code == "Space") {
                if (currBox == 5) {
                    document.body.removeEventListener('keydown', onSpaceEvent);
                    return;
                }

                if (isStart) {
                    startSpinning(firstSlot, secondSlot, thirdSlot);
                    isStart = false;
                } else if (!isStart) {
                    isModalOpen = true;
                    stopSpinning(firstSlot, secondSlot, thirdSlot);
                }
            }
        } else if (e.code == "Escape") {
            spinAgain(firstSlot, secondSlot, thirdSlot);
        } else if (e.code == "Enter") {
            nextReward();
        }
    }
}


function spinAgain(firstSlot, secondSlot, thirdSlot) {
        isStart = true;
        
        if (firstSlot && secondSlot && thirdSlot) {
            slotWriter('***', firstSlot, secondSlot, thirdSlot);
        } else {
            const firstSlot = document.querySelector(`.number_${slot}`);
            const secondSlot = document.querySelector(`.number_${slot + 1}`);
            const thirdSlot = document.querySelector(`.number_${slot + 2}`);

            slotWriter('***', firstSlot, secondSlot, thirdSlot);
        }
        
        winnerModal.style.display = "none";
        isModalOpen = false;
}

function nextReward() {
    if (currBox + 1 < infoBoxes.length) {
        slot += 3;
        isStart = true;
        infoBoxes[++currBox].classList.add('active');
        winnerModal.style.display = "none";
        isModalOpen = false;
    } else {
        winnerModal.style.display = "none";
        return;
    }
}

function startSpinning(firstSlot, secondSlot, thirdSlot) {
    firstSlotSpinning = spinAnimation(slot, 1);
    secondSlotSpinning = spinAnimation(slot + 1, 2.5);
    thirdSlotSpinning = spinAnimation(slot + 2, 1.5);

    playAllAnimations(firstSlotSpinning, secondSlotSpinning, thirdSlotSpinning);

    changeNumInterval = setInterval(() => {
        changeNum()
    }, 200);

    function changeNum() {
        let num = members[(Math.floor(Math.random() * members.length))];

        slotWriter(num, firstSlot, secondSlot, thirdSlot);
    }
}

function stopSpinning(firstSlot, secondSlot, thirdSlot) {
    stopAllAnimations(firstSlotSpinning, secondSlotSpinning, thirdSlotSpinning);

    clearInterval(changeNumInterval);

    let winner = members[(Math.floor(Math.random() * members.length))];

    members.splice(members.indexOf(winner), 1);

    slotWriter(winner, firstSlot, secondSlot, thirdSlot);

    lastSpinRotation(slot, 300);
    lastSpinRotation(slot + 1, 500);
    lastSpinRotation(slot + 2, 850);

    setTimeout(() => {
        winnerModal.style.display = "flex";
        // isModalOpen = true;
        numEl.textContent = winner;
    }, 1000);
}