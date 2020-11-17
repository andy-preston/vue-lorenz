<template>
    <el-row id="toolbar">
        <el-col :span="24">
            <div class="grid-content">
                <RhoInput
                    ref="rhoInput"
                    @change="emit('rho-change')"
                ></RhoInput>

                <StartStopBtn
                    @start="startScope"
                    @stop="$emit('stop')"
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
import RhoInput from './RhoInput.vue';
import VariableBox from './VariableBox.vue';

export default {
    'components': { StartStopBtn, VariableBox, RhoInput },
    'methods': {
        'startScope': function () {
            console.log('start');
        },
        'rho': function () {
            return this.$refs.rhoInput.val;
        }
    }
};
</script>

<style lang="scss">
#toolbar {
    margin-bottom: 5px;
}
</style>
