<template>
    <el-form
        :inline="true"
        class="toolbar"
    >
        <el-form-item label="rho:">
            <RhoInput
                ref="rhoInput"
                @change="$emit('rho-change', $event)"
            ></RhoInput>
        </el-form-item>

        <el-form-item>
            <StartStopBtn
                @start="$emit('start')"
                @stop="$emit('stop')"
            ></StartStopBtn>
        </el-form-item>

        <el-form-item>
            <VariableBox
                label="x"
                :value="nextValue.x"
            ></VariableBox>
        </el-form-item>

        <el-form-item>
            <VariableBox
                label="y"
                :value="nextValue.y"
            ></VariableBox>
        </el-form-item>

        <el-form-item>
            <VariableBox
                label="z"
                :value="nextValue.z"
            ></VariableBox>
        </el-form-item>
    </el-form>
</template>

<script>
import StartStopBtn from './StartStopBtn.vue';
import RhoInput from './RhoInput.vue';
import VariableBox from './VariableBox.vue';

export default {
    'components': { StartStopBtn, VariableBox, RhoInput },
    'props': {
        'nextValue': {
            'type': Object,
            'required': false,
            'default': {
                'x': '',
                'y': '',
                'z': ''
            }
        }
    },
    'methods': {
        'rho': function () {
            return this.$refs.rhoInput.val;
        }
    }
};
</script>

<style lang="scss">
.toolbar {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
    .el-form-item {
        margin-bottom: 8px;
    }
}
</style>
