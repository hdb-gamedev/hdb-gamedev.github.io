const consoleText = (words, colors) => {
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById("text")
    target.setAttribute("style", "color:" + colors[0])
    window.setInterval(() => {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(() => {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute("style", "color:" + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)

    let console = document.getElementById("console");
    let visible = true;
    window.setInterval(() => {
        if (visible === true) {
            console.className = "console-underscore hidden"
            visible = false;
        } else {
            console.className = "console-underscore"
            visible = true;
        }
    }, 400)
}

consoleText(["Darby Game Development Club", "Making Games", "Made with Love."], ["#444", "rebeccapurple", "lightblue"]);
