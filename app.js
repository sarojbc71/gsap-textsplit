// word split

gsap.registerPlugin(SplitText, ScrollTrigger);

//lines
SplitText.create(".chars", {
    type: "chars, words, lines",
    autoSplit: true,
    mask: "chars",
    charsClass: "split-text",
    onSplit: (self) => {
        return gsap.from(self.chars, {
            yPercent: 100,
            
            stagger:{
                delay: 0.25,
                amount: 1.5,
            },
            scrollTrigger:{
                trigger: ".section-text.chars",
                start: "0% 70%",
            },
        })
    }
})

//words
SplitText.create(".words", {
    type: "chars, words, lines",
    autoSplit: true,
    mask: "words",
    wordsClass: "split-text",
    onSplit: (self) => {
        return gsap.from(self.words, {
            yPercent: 100,
            
            stagger:{
                delay: 0.25,
                amount: 1.5,
            },
            scrollTrigger:{
                start: "0% 70%",
                trigger: ".section-text.words",
            },
        })
    }
})


//lines
SplitText.create(".lines", {
    type: "chars, words, lines",
    autoSplit: true,
    mask: "lines",
    linesClass: "split-text",
    onSplit: (self) => {
        return gsap.from(self.lines, {
            yPercent: 100,
            
            stagger:{
                delay: 0.25,
                amount: 1.5,
            },
            scrollTrigger:{
                start: "0% 70%",
                trigger: ".section-text.lines",
            },
        })
    }
})

