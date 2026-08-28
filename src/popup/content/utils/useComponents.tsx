/*
 * @description: useComponents
 * @Author: Gouxinyu
 * @Date: 2022-09-11 11:12:50
 */
import { shallowReactive } from 'vue';
import { VideocamOutline, VolumeMediumOutline, ListOutline, EllipsisHorizontalCircleOutline } from '@vicons/ionicons5';
import browser from 'webextension-polyfill';
import { Tooltip } from 'floating-vue';

import Rotate from "../components/Rotate";
import Loop from "../components/Loop";
import PictureInPicture from "../components/PictureInPicture";
import Repostion from "../components/Repostion";
import Stretch from "../components/Stretch";
import Flip from "../components/Flip";
import Focus from "../components/Focus";
import Filter from "../components/Filter";
import Capture from "../components/Capture";
import PlaybackRate from "../components/PlaybackRate";
import Zoom from "../components/Zoom";
import Mute from "../components/Mute";
import Volume from "../components/Volume";
import Pitch from "../components/Pitch";
import VideoList from "../components/VideoList";
import More from "../components/More";

interface IConfig {
    type: string;
    title?: JSX.Element | string;
    merge?: boolean;
    style?: Object;
    class?: string;
    children?: any[];
}

interface IComponentConfig extends IConfig {
    type: 'component',
    component: any;
}

interface IContainerConfig extends IConfig {
    type: 'container',
    title?: string,
    col?: number;
    showTitle?: boolean;
    children?: IComponentConfig[] | IRowConfig[]
}

interface IFragmentConfig extends IConfig {
    type: 'fragment',
    col?: number;
    children?: IComponentConfig[] | IRowConfig[]
}

interface IRowConfig extends IConfig {
    type: 'row';
    children: IContainerConfig[] | IFragmentConfig[]
}

interface ISwiperConfig extends IConfig {
    type: 'swiper';
    children: IRowConfig[]
}

interface ITabConfig extends IConfig {
    type: 'tab';
    children: IRowConfig[] | IComponentConfig[]
}

export default function useComponents() {
    const components = shallowReactive<ITabConfig[]>([
        {
            type: 'tab',
            title: <Tooltip><div class="tab-title" v-tooltip={browser.i18n.getMessage('tabs_video')}><VideocamOutline class="tab-icon"/></div></Tooltip>,
            children: [{
                type: 'row',
                style: {
                    margin: '30px 0',
                    height: '120px'
                },
                children: [
                    {
                        type: 'container',
                        col: 16,
                        title: browser.i18n.getMessage('video_rotate'),
                        showTitle: true,
                        children: [{
                            type: 'component',
                            component: Rotate
                        }]
                    },
                    {
                        type: "container",
                        col: 8,
                        title: browser.i18n.getMessage('video_pic'),
                        showTitle: true,
                        style: {
                            flexDirection: "column",
                            background: 'none',
                            justifyContent: 'space-between',
                        },
                        children: [
                            {
                                type: 'row',
                                style: {
                                    height: '45px'
                                },
                                children: [
                                    {
                                        type: 'container',
                                        title: browser.i18n.getMessage('video_loop'),
                                        showTitle: true,
                                        col: 24,
                                        children: [
                                            {
                                                type: 'component',
                                                component: Loop
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'row',
                                style: {
                                    height: '45px'
                                },
                                children: [
                                    {
                                        type: 'container',
                                        title: browser.i18n.getMessage('video_pic'),
                                        showTitle: false,
                                        col: 24,
                                        children: [
                                            {
                                                type: 'component',
                                                component: PictureInPicture
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                type: 'row',
                style: {
                    margin: '30px 0',
                    height: '40px'
                },
                children: [
                    {
                        type: 'container',
                        title: browser.i18n.getMessage('video_reposition'),
                        showTitle: true,
                        col: 8,
                        children: [{
                            type: 'component',
                            component: Repostion
                        }]
                    },
                    {
                        type: 'container',
                        col: 8,
                        title: browser.i18n.getMessage('video_stretch'),
                        showTitle: true,
                        children: [{
                            type: 'component',
                            component: Stretch
                        }]
                    },
                    {
                        type: 'container',
                        col: 8,
                        title: browser.i18n.getMessage('video_flip'),
                        showTitle: true,
                        children: [{
                            type: 'component',
                            component: Flip
                        }]
                    },
                ],
            },
            {
                type: 'row',
                style: {
                    margin: '30px 0',
                    height: '40px'
                },
                children: [
                    {
                        type: 'container',
                        title: browser.i18n.getMessage('video_focus'),
                        showTitle: true,
                        col: 8,
                        children: [
                            {
                                type: 'component',
                                component: Focus
                            }
                        ]
                    },
                    {
                        type: 'container',
                        title: browser.i18n.getMessage('video_filter'),
                        showTitle: true,
                        col: 8,
                        children: [{
                            type: 'component',
                            component: Filter
                        }]
                    },
                    {
                        type: 'container',
                        title: browser.i18n.getMessage('video_screenshot'),
                        showTitle: true,
                        col: 8,
                        children: [
                            {
                                type: 'component',
                                component: Capture
                            }
                        ]
                    }
                ],
            },
            {
                type: 'row',
                style: {
                    margin: '30px 0',
                    height: '40px'
                },
                children: [
                    {
                        type: 'container',
                        col: 24,
                        title: browser.i18n.getMessage('video_speed'),
                        showTitle: true,
                        children: [{
                            type: 'component',
                            component: PlaybackRate
                        }]
                    },
                ]
            },
            {
                type: 'row',
                style: {
                    margin: '30px 0',
                    height: '40px'
                },
                children: [
                    {
                        type: 'container',
                        col: 24,
                        title: browser.i18n.getMessage('video_zoom'),
                        showTitle: true,
                        children: [{
                            type: 'component',
                            component: Zoom
                        }]
                    },
                ]
            }
            ]
        },
        {
            type: 'tab',
            title: <Tooltip><div class="tab-title" v-tooltip={browser.i18n.getMessage('tabs_audio')}><VolumeMediumOutline class="tab-icon" /></div></Tooltip>,
            children: [
                {
                    type: 'row',
                    style: {
                        margin: '30px 0',
                        height: '40px'
                    },
                    children: [
                        {
                            type: 'container',
                            title: browser.i18n.getMessage('audio_muted'),
                            showTitle: true,
                            col: 24,
                            children: [{
                                type: 'component',
                                component: Mute
                            }]
                        },
                    ]
                },
                {
                    type: 'row',
                    style: {
                        margin: '30px 0',
                        height: '40px'
                    },
                    children: [
                        {
                            type: 'container',
                            title: browser.i18n.getMessage('audio_volume'),
                            showTitle: true,
                            col: 24,
                            children: [{
                                type: 'component',
                                component: Volume
                            }]
                        },
                    ]
                },
                {
                    type: 'row',
                    style: {
                        margin: '30px 0',
                        height: '40px'
                    },
                    children: [
                        {
                            type: 'container',
                            title: browser.i18n.getMessage('audio_pitch'),
                            showTitle: true,
                            col: 24,
                            children: [{
                                type: 'component',
                                component: Pitch
                            }]
                        },
                    ]
                }
            ]
        },
        {
            type: 'tab',
            title: <Tooltip><div class="tab-title" v-tooltip={browser.i18n.getMessage('tabs_list')}><ListOutline class="tab-icon" /></div></Tooltip>,
            children: [
                {
                    type: 'component',
                    component: VideoList
                }
            ]
        },
        {
            type: 'tab',
            title: <Tooltip><div class="tab-title" v-tooltip={browser.i18n.getMessage('tabs_more')}><EllipsisHorizontalCircleOutline class="tab-icon" /></div></Tooltip>,
            children: [
                {
                    type: 'row',
                    style: {
                        margin: '30px 0',
                        height: '100px'
                    },
                    children: [
                        {
                            type: 'fragment',
                            col: 24,
                            children: [{
                                type: 'component',
                                component: More
                            }]
                        },
                    ]
                }
            ]
        }
    ]);

    return components;
}

export { ITabConfig, ISwiperConfig, IRowConfig, IComponentConfig, IContainerConfig, IFragmentConfig, IConfig }