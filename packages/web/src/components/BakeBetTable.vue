<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-for="col in columns" :class="`column--${col.label}`" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="col in columns" :class="`column--${col.label}`" v-html="col.render ? col.render(row[col.key], row) : row[col.key]" :key="col.key"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="T">
export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => string | number;
}

const props = defineProps<{
  columns: Column<T>[];
  rows: T[];
}>();
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
}

.table {
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table th,
.table td {
  padding: 0.5rem 1rem;
  text-align: left;
}

.table thead th {
  background: var(--color-primary-soft);
  color: #fff;
  position: sticky;
  top: 0;
}

.table tbody tr:nth-child(even) {
  background: var(--color-surface);
}

.table tbody tr:hover {
  background: rgba(107, 28, 217, 0.1); /* primary hover accent */
}

.table td {
  border-bottom: 1px solid var(--color-surface-hover);
}
</style>
