<template>
  <h6 class="text-gray-900">
    Choose keywords
  </h6>
  <div class="text-xs text-gray-500 mt-2">
    Choose keywords that are relevant to the niche that you
    want to grow in. For example, we at LFX are
    monitoring “community-led growth”, “community building”,
    and “DevRel”.
  </div>

  <div class="mt-8">
    <div
      class="uppercase text-gray-400 text-2xs font-semibold tracking-wide"
    >
      Include<span class="text-red-500 ml-0.5">*</span>
    </div>

    <el-form
      class="mt-3 eagle-eye-keywords-form flex flex-col gap-3"
      @submit.prevent
    >
      <div
        v-for="(keyword, index) in keywords"
        :key="index"
        class="flex gap-3"
      >
        <el-form-item class="flex-1">
          <el-input v-model="keyword.value" />
        </el-form-item>

        <lf-button
          type="primary-link"
          size="medium"
          class="w-10 h-10"
          :disabled="keywords.length === 1"
          @click="deleteKeyword(index)"
        >
          <lf-icon name="trash-can" :size="20" />
        </lf-button>
      </div>
    </el-form>

    <lf-button
      type="primary-link"
      size="medium"
      class="mt-3"
      @click="addKeyword"
    >
      + Add keyword
    </lf-button>
  </div>

  <eagle-eye-footer
    :is-next-button-disabled="!isKeywordsFormValid"
    @on-step-change="
      (increment) => emit('onStepChange', increment)
    "
  />
</template>

<script setup>
import { defineEmits, computed, defineProps } from 'vue';
import EagleEyeFooter from '@/modules/eagle-eye/components/onboard/eagle-eye-footer.vue';
import LfIcon from '@/ui-kit/icon/Icon.vue';
import LfButton from '@/ui-kit/button/Button.vue';

const emit = defineEmits([
  'update:modelValue',
  'onStepChange',
]);
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const keywords = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  },
});

const isKeywordsFormValid = computed(
  () => !keywords.value.some((k) => !k.value),
);

const addKeyword = () => {
  keywords.value.push({
    value: null,
  });
};

const deleteKeyword = (index) => {
  keywords.value.splice(index, 1);
};
</script>

<style lang="scss">
.eagle-eye-keywords-form {
  .el-form-item,
  .el-form-item__content {
    @apply mb-0;
  }
}
</style>
