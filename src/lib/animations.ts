import gsap from "gsap";

export const animatePageIn = () => {
    const loadingPage = document.getElementById("loading-page");

    if (loadingPage) {
        const tl = gsap.timeline();

        tl
            .set(loadingPage, {
                opacity: 100
            })
            .to(loadingPage, {
                opacity: 0,
                display: "none",
                duration: 1,
                delay: 3
            })
    }
}