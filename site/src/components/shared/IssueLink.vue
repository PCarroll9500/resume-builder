<template>
  <a
    :class="cn('hover:underline', props.class)"
    :href="`https://github.com/PCarroll9500/resume-builder/issues/${issue}`"
    target="_blank"
    rel="nofollow noopener"
    >#{{ issue }}</a
  >
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/shadcn";

const props = defineProps<{
  issue: string | number;
  class?: HTMLAttributes["class"];
}>();
</script>
