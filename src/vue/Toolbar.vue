<template>
    <el-row id="toolbar">
        <el-col :span="24">
            <div class="grid-content">
                <AdjustBox
                    id="rhoBox"
                    label="rho"
                    min="14"
                    max="28"
                    initial-value="28"
                ></AdjustBox>

                <StartStopBtn
                    @start="startScope"
                    @stop="stopScope"
                ></StartStopBtn>

                <VariableBox
                    id="xBox"
                    label="x"
                ></VariableBox>

                <VariableBox
                    id="yBox"
                    label="y"
                ></VariableBox>

                <VariableBox
                    id="zBox"
                    label="z"
                ></VariableBox>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import StartStopBtn from './StartStopBtn.vue';
import VariableBox from './VariableBox.vue';
import AdjustBox from './AdjustBox.vue';

export default {
    components: { StartStopBtn, VariableBox, AdjustBox },
    'methods': {
        'startScope': function () {
            console.log('start');
        },
        'stopScope': function () {
            console.log('stop');
        }
    }
};
</script>

<style lang="scss">
#toolbar {
    margin-bottom: 5px;
}
</style>
