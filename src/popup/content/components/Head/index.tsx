/*
 * @description: Head
 * @Author: Gouxinyu
 * @Date: 2022-09-19 22:53:23
 */

import { defineComponent, inject } from "vue";
import { Home, LogoGithub, LogoUsd, SettingsSharp, StarHalfSharp } from "@vicons/ionicons5";
import { createURL } from 'src/util';
import "./index.less";

export default defineComponent({
    name: "Head",
    props: {
        isShow: Boolean
    },
    setup(props) {
        const toGithub = () => {
            createURL('https://github.com/gxy5202/VideoRoll');
        };
        const toSettings = () => {
             if (chrome.runtime.openOptionsPage) {
                chrome.runtime.openOptionsPage();
              } else {
                createURL(chrome.runtime.getURL('options.html'));
              }
        }

        const toHome = () => {
            createURL('https://videoroll.gomi.site');
        };

        const toFeedBack = () => {
            createURL('https://chrome.google.com/webstore/detail/video-roll/cokngoholafkeghnhhdlmiadlojpindm')
        };

        const toDiscord = () => {
            createURL('https://discord.gg/N5rSStFE');
        }

        return () => (
            <div class="video-roll-header">
                <div class="video-roll-logo" onClick={toHome}>
                    <img
                        class="video-roll-logo-text"
                        src="../../icons/text.png"
                    />
                </div>
                <div class="video-roll-head-right">
                    <van-space>
                        <div class="video-roll-setting-btn" title="settings" onClick={toSettings}>
                            <SettingsSharp class="logo-usd"></SettingsSharp>
                        </div>
                        <van-divider vertical></van-divider>
                        <div class="video-roll-feedback">
                            <van-space>
                                <div
                                    class="video-roll-setting-btn"
                                    onClick={toFeedBack}
                                    title="thumbs up!"
                                >
                                    <StarHalfSharp class="logo-usd"></StarHalfSharp>
                                </div>
                                <div
                                    class="video-roll-setting-btn"
                                    onClick={toDiscord}
                                    title="discord"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="15px" height="15px"><g fill-opacity="0.96078" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g></svg>
                                </div>
                                <div class="video-roll-setting-btn" title="github" onClick={toGithub}>
                                    <LogoGithub class="logo-usd"></LogoGithub>
                                </div>
                            </van-space>
                        </div>
                    </van-space>
                </div>
            </div>
        );
    }
});
