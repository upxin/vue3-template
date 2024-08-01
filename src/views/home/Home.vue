<script lang="ts" setup>
import type { Component } from 'vue';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { BookOutline as BookIcon } from '@vicons/ionicons5';

const message = useMessage();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '且听风吟',
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '嘻嘻哈哈哈',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
];

function toast() {
  message.error('Once upon a time you dressed so fine');
}
</script>

<template>
  <n-menu mode="horizontal" :options="menuOptions" responsive />
  <n-button type="primary" @click="toast">
    你好
  </n-button>
  <div bg-amber h-20px text-amber></div>
</template>
