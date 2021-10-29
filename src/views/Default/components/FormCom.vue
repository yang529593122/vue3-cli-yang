<template>
  <el-form :inline="true" :model="data" class="demo-form-inline">
    <el-form-item
      v-for="item in formData?.list"
      :key="item.name"
      :label="item.lable"
    >
      <el-input
        v-model="data[item.name]"
        :placeholder="item.placeholder"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleOnSubmit">查询</el-button>
      <el-button @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "FormCom",
  emits: ["onSubmit"],
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    let data = reactive({
      ...props.formData.data,
    });
    const handleOnSubmit = () => {
      emit("onSubmit", data);
    };
    const resetForm = () => {
      emit("onSubmit", { page: 1 });
    };
    return {
      data,
      resetForm,
      handleOnSubmit,
    };
  },
});
</script>

<style scoped></style>
