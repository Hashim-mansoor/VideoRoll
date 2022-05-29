/*
 * @description: inject
 * @Author: Gouxinyu
 * @Date: 2022-01-11 23:49:59
 */

/**
 * 计算视频缩放比例
 * @param dom
 * @param deg
 * @returns
 */
function getScaleNumber(
    dom: HTMLVideoElement,
    backupDom: HTMLElement,
    deg: number
) {
    // get video size
    let { videoWidth, videoHeight, offsetWidth, offsetHeight } = dom;

    const isHorizonDeg = deg === 90 || deg === 270;

    if (typeof videoWidth === "undefined" || videoWidth === null) {
        videoWidth = backupDom.offsetWidth;
        videoHeight = backupDom.offsetHeight;
    }
    // 根据原始视频的宽高比例，和容器的宽高比例，计算缩放比例
    const isHorizonVideo = videoWidth > videoHeight;
    const isHorizonDom = offsetWidth > offsetHeight;

    // 判断旋转后的缩放比例
    // 1.若是竖屏视频，但在横屏容器中，初始就是等比缩小的
    if (isHorizonDeg && !isHorizonVideo && isHorizonDom) {
        const scale = videoHeight / videoWidth;
        // if video element is shadowdom, cant get video height;
        return Number.isNaN(scale) ? 1 : scale;
    }

    // 2.若是竖屏视频，横屏中，旋转回0或180
    if (!isHorizonDeg && !isHorizonVideo && isHorizonDom) {
        return 1;
    }

    // 3.若是横屏视频，处在横屏容器中
    if (isHorizonDeg && isHorizonVideo && isHorizonDom) {
        return offsetHeight / offsetWidth;
    }

    if (!isHorizonDeg && isHorizonVideo && isHorizonDom) {
        return 1;
    }

    return 1;
}

/**
 * find iframe and its document
 * @returns
 */
function getIframeDoc(): Document | null {
    const iframe = document.querySelector("iframe");
    if (iframe) {
        return iframe.contentDocument;
    }
    return null;
}

/**
 * set video rotate deg
 * @param deg
 * @param videoSelector
 * @param dom
 * @param doc
 * @returns
 */
function setVideoDeg(
    deg: number,
    videoSelector: string[],
    dom: HTMLVideoElement,
    doc: Document
): void {
    for (const item of videoSelector) {
        const isArray = Array.isArray(item);
        dom = doc.querySelector(isArray ? item[0] : item) as HTMLVideoElement;
        const backupDom = isArray
            ? (document.querySelector(item[1]) as HTMLElement)
            : dom;

        if (!dom) continue;

        if (dom) {
            const scale = getScaleNumber(dom, backupDom, deg);
            replaeClass(deg, scale);

            dom.classList.add("video-roll-transition");
            dom.classList.add("video-roll-deg-scale");
            dom.setAttribute("data-roll", "true");
            return;
        }
    }
}

/**
 * 旋转视频
 * @param deg
 * @param videoSelector
 * @returns
 */
function rotateVideo(deg: number, videoSelector: string[]): void {
    let dom = null;
    addStyleClass();
    setVideoDeg(deg, videoSelector, dom, document);
    // if there is no video element, search iframe
    if (!dom) {
        const doc = getIframeDoc();
        if (doc) {
            try {
                setVideoDeg(deg, videoSelector, dom, doc);
            } catch (e) {
                console.warn(`rotate video failed: ${e}`);
            }
        }
    }
}

/**
 * change class content
 * @param deg
 * @param scaleNum
 */
function replaeClass(deg: number, scaleNum: number) {
    const degScale = document.getElementById("video-roll-deg-scale");
    degScale.innerHTML = `.video-roll-deg-scale { transform: rotate(${deg}deg) scale(${scaleNum}) !important; }`;
}

/**
 * 是否存在class
 * @returns
 */
function isExistStyle() {
    const degScale = document.getElementById("video-roll-deg-scale");
    const transition = document.getElementById("video-roll-transition");

    return degScale && transition;
}

/**
 * add style
 * @returns
 */
function addStyleClass() {
    const already = isExistStyle();
    if (already) return;

    const degScale = document.createElement("style");
    const transition = document.createElement("style");
    degScale.innerHTML = `
        .video-roll-deg-scale {}
    `;

    transition.innerHTML = `.video-roll-transition {
            transition: all 0.5s ease !important;
        }`;

    degScale.setAttribute("id", "video-roll-deg-scale");
    transition.setAttribute("id", "video-roll-transition");

    degScale.setAttribute("type", "text/css");
    transition.setAttribute("type", "text/css");

    const head = document.getElementsByTagName("head")[0];
    head.appendChild(degScale);
    head.appendChild(transition);
}

(function () {
    chrome.runtime.onMessage.addListener((a, b, c) => {
        const { webInfo, deg, style } = a;

        if (style) {
            addStyleClass();
        } else {
            rotateVideo(deg, webInfo.videoSelector);
        }

        c("rotate success");
    });
})();
