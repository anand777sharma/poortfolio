const changeText = document.querySelector(".changeText")
const customCursor = document.querySelector(".customCursor")
const wordList = [`Web Developer`, "Coder", "Web Designer", ""]
const message = `        `
const wordList2 = splitStringBySpaces(message);

function splitStringBySpaces(input) {
    const result = [];
    let spaceCount = 0;
    let start = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            spaceCount++;
        }

        if (spaceCount === 20) {
            result.push(input.slice(start, i + 1).trim());
            start = i + 1;
            spaceCount = 0;
        }
    }

    // Add the last segment if there's any left
    if (start < input.length) {
        result.push(input.slice(start).trim());
    }

    return result;
}




const autoType = (wordList, cmponent) => {
    let i = 0
    let wordIndex = 0
    let skipUpdate = 0
    let isReverseTyping = false

    const setIntervalIndex = setInterval(() => {
        if (skipUpdate) {
            skipUpdate--
            return
        }
        if (isReverseTyping) {

            changeText.innerText = changeText.innerText.slice(0, changeText.innerText.length - 1)
            wordIndex--
            if (changeText.innerText.length === 0) {
                wordIndex = 0
                isReverseTyping = false
                wordList[i++]
                if (i === wordList.length - 1) {
                    i = 0
                }
            }


        } else {
            skipUpdate = 1
            changeText.innerText = changeText.innerText + wordList[i][wordIndex++]
            if (wordIndex === wordList[i].length) {
                skipUpdate = 10
                isReverseTyping = true
                return
            }

        }


    }, 50)
}

autoType(wordList)




window.addEventListener("mousemove",(e)=>{
    customCursor.style.top=e.y+"px"
    customCursor.style.left=e.x+"px"
})

