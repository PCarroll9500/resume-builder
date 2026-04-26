<template>
  <UiDialog v-model:open="open">
    <UiDialogTrigger as-child>
      <UiButton
        class="gap-x-1.5 w-full h-8 justify-start"
        variant="ghost"
        size="sm"
      >
        <span i-material-symbols:edit-square-outline-rounded text-base />
        {{ $t("toolbar.file.rename") }}
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent class="sm:max-w-sm">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t("toolbar.file.rename") }}</UiDialogTitle>
      </UiDialogHeader>

      <input
        v-model="newName"
        class="w-full border rounded px-3 py-2 text-sm bg-background"
        @keydown.enter="submit"
        @keydown.esc="open = false"
      />

      <UiDialogFooter>
        <UiButton variant="secondary" @click="open = false">Cancel</UiButton>
        <UiButton @click="submit">Rename</UiButton>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>

<script lang="ts" setup>
const { data } = useDataStore();

const open = ref(false);
const newName = ref("");

watch(open, (val) => {
  if (val) newName.value = data.resumeName;
});

const submit = async () => {
  const text = newName.value.trim();
  if (!text || !data.resumeId) return;

  data.resumeName = text;
  await storageService.updateResume({ id: data.resumeId, name: text }, false);
  open.value = false;
};
</script>
