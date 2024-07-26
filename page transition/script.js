function pageTransition() {
    let t1 = gsap.timeline();
    t1.to(".transition", {
        duration: 1,
        scaleX: 1,
        transformOrigin: "right",
        ease: "sine.out",
    });
    t1.to(".transition", {
        duration: 1,
        scaleX: 0,
        transformOrigin: "left",
        ease: "sine.out",
        delay: 0.2,
    });
}

function contentAnimation() {
    let t1 = gsap.timeline();
    t1.to("h1", {
        left: 0,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.75,
    });
}

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n || 2000);
    });
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                // Get the page name from the clicked link
                const nextPage = data.trigger.dataset.page;
                // Set the page name in the transition element
                console.log(nextPage);
                document.querySelector('.pagename h1').textContent = nextPage;
                pageTransition();
                await delay(1000);
                done();
            },
            async enter(data) {
                contentAnimation();
            },
            async once(data) {
                contentAnimation();
            },
        },
    ],
});
