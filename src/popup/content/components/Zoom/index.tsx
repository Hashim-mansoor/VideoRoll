/*
 * @description: zoom Component
 * @Author: Gouxinyu
 * @Date: 2022-09-19 22:53:23
 */

import { defineComponent, inject } from "vue";
import { IRollConfig } from "../../../../types/type.d";
import "./index.less";

export default defineComponent({
    name: "Zoom",
    setup() {
        const update = inject("update") as Function;
        const rollConfig = inject("rollConfig") as IRollConfig;

        const setZoomNum = (value: number) => {
            rollConfig.zoom = value;
            update("zoom", value);
        };
        return () => (
            <div class="video-roll-zoom">
                <span class="zoom-label">out</span>
                <van-slider
                    v-model={rollConfig.zoom}
                    min={0}
                    max={3}
                    step={0.01}
                    bar-height="4px"
                    onUpdate:modelValue={setZoomNum}
                    v-slots={{
                        button: () => (
                            <div class="custom-button">{rollConfig.zoom}</div>
                        ),
                    }}
                ></van-slider>
                <span class="zoom-label">in</span>
            </div>
        );
    },
});