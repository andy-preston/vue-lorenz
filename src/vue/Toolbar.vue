<template>
    <el-row id="toolbar">
        <el-col :span="24">
            <div class="grid-content">
                <RhoInput @change="$emit('rho-change', $event)"></RhoInput>

                <StartStopBtn
                    @start="$emit('start')"
                    @stop="$emit('stop')"
                ></StartStopBtn>

                <VariableBox
                    label="x"
                    :value="nextValue.x"
                ></VariableBox>

                <VariableBox
                    label="y"
                    :value="nextValue.y"
                ></VariableBox>

                <VariableBox
                    label="z"
                    :value="nextValue.z"
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
    }
};
</script>

<style lang="scss">
#toolbar {
    margin-bottom: 5px;
}
</style>
