<template>
  <div class="flex items-center gap-2">
    <el-tooltip
      effect="dark"
      :content="platform?.name || member.lastActivity.platform"
      class="text-gray-400"
      placement="top"
    >
      <img
        v-if="platform"
        :alt="platform.name"
        class="min-w-4 h-4"
        :src="platform.image"
      />
      <lf-icon v-else name="satellite-dish" :size="16" />
    </el-tooltip>
    <div class="text-gray-500 text-xs">
      {{ timeAgo }}
    </div>
  </div>
</template>

<script>
import { formatDateToTimeAgo } from '@/utils/date';
import { toSentenceCase } from '@/utils/string';
import { lfIdentities } from '@/config/identities';

export default {
  name: 'AppMemberLastActivity',
  props: {
    member: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    platform() {
      return lfIdentities[this.member.lastActivity.platform];
    },
    timeAgo() {
      return formatDateToTimeAgo(
        this.member.lastActivity.timestamp,
      );
    },
  },
  methods: {
    toSentenceCase,
  },
};
</script>

<style lang="scss">
.member-engagement-level-wrapper {
  @apply relative;

  .app-page-spinner {
    min-height: unset;
  }
}
</style>
