<template>
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
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Default",
  emits: ["handleEdit", "pageChange"],
  props: {
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
    const handleEdit = (index, row) => {
      emit("handleEdit", row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };

    const handleCurrentChange = (val) => {
      emit("pageChange", val);
    };
    return {
      handleEdit,
      handleDelete,
      handleCurrentChange,
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
