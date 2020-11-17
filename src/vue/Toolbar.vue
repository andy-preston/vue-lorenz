<template>
    <el-row id="toolbar">
        <el-col :span="24">
            <div class="grid-content">
                <RhoInput
                    ref="rhoInput"
                    @change="emit('rho-change')"
                ></RhoInput>

                <StartStopBtn
                    @start="$emit('start')"
                    @stop="$emit('stop')"
                ></StartStopBtn>

                <VariableBox
                    ref="xBox"
                    label="x"
                    value=""
                ></VariableBox>

                <VariableBox
                    ref="yBox"
                    label="y"
                    value=""
                ></VariableBox>

                <VariableBox
                    ref="zBox"
                    label="z"
                    value=""
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
        'nextValue': function (nextValue) {
            this.$refs.xBox.value = nextValue.x;
            this.$refs.yBox.value = nextValue.y;
            this.$refs.zBox.value = nextValue.z;
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
