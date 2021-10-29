<template>
  <FormCom @onSubmit="onSubmit" :formData="formData" />
  <el-table :data="tableData" border>
    <el-table-column
      v-for="item in headerList"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
    />
    <slot name="operation"></slot>
  </el-table>
  <div class="pagination">
    <div class="pagination-content">
      <el-pagination
        background
        :current-page="current"
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import FormCom from "./FormCom";

export default defineComponent({
  name: "Default",
  emits: ["handleEdit", "changData"],
  components: { FormCom },
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    headerList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    const current = ref(1);
    let tableFormDta = {
        ...props.formData.data,
    };
    const handleEdit = (index, row) => {
      emit("handleEdit", row);
    };
    const handleCurrentChange = (val) => {
      current.value = val;
      emit("changData", {
        ...tableFormDta,
        page: val,
      });
    };
    const onSubmit = (data) => {
      tableFormDta = { ...data, page: 1 };
      current.value = 1;
      emit("changData", { ...data, page: 1 });
    };
    return {
      current,
      handleEdit,
      handleCurrentChange,
      onSubmit,
    };
  },
});
</script>

<style scoped lang="less">
.pagination {
  padding-top: 15px;
  .pagination-content {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
