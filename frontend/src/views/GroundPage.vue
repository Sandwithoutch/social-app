<template>
  <el-row class="ground-contain">
    <el-col class="content-layout" :span="18">
      <div class="content-top">
        <!-- 分段控制器 -->
        <el-segmented v-model="value" :options="tabOptions">
          <template #default="{ item }">
            <div class="segmented-box">
              <!-- <el-icon> </el-icon> -->
              <span>{{ item.label }}</span>
            </div>
          </template>
        </el-segmented>
      </div>
      <div class="content-main">
        <UpdateCard />
        <UpdateCard />
        <UpdateCard />
      </div>
    </el-col>
    <el-col class="person-information-layout" :span="6">
      <div class="person-top">
        <BasicInfoCard />
      </div>
      <div class="person-bottom">
        <el-card class="person-bottom-card">
          <div class="person-comment">
            <div class="person-comment-username">
              <el-icon><Star /></el-icon>
              用户吴彦祖
            </div>
            <el-divider />
            <div class="person-comment-usercommant">
              <ul>
                <li>这个人是一个非常好的傻逼</li>
                <li>我想踹死他</li>
              </ul>
            </div>
          </div>
          <div class="person-comment">
            <div class="person-comment-username">
              <el-icon><Star /></el-icon>用户吴彦祖2
            </div>
            <el-divider />
            <div class="person-comment-usercommant">
              <ul>
                <li>这个人是一个非常好的傻逼</li>
                <li>我想踹死他</li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
import UpdateCard from '@/components/UpdateCard.vue';
import BasicInfoCard from '@/components/BasicInfoCard.vue';

const value = ref('最新动态');
const arr = ['12311', 'abc', '你哦'];
const cards = [
  {
    avatar: 'https://example.com/avatar1.jpg',
    username: '用户1',
    lastOnline: '10分钟前',
    title: '这是一个帖子标题1',
    content: '这是帖子内容1，随便写一些示例内容用来展示效果。',
    tags: ['标签1', '标签2'],
    comments: 10,
    shares: 5
  },
  {
    avatar: 'https://example.com/avatar2.jpg',
    username: '用户2',
    lastOnline: '20分钟前',
    title: '这是一个帖子标题2',
    content: '这是帖子内容2，继续填充示例内容展示样式。',
    tags: ['标签3', '标签4'],
    comments: 8,
    shares: 3
  }
];

// 分段控制器选项
const tabOptions = [
  { label: '最新动态', icon: 'el-icon-time', value: '最新动态' },
  { label: '最近流行', icon: 'el-icon-star-on', value: '最近流行' },
  { label: '热度最高', icon: 'el-icon-fire', value: '热度最高' },
  { label: '最新发布', icon: 'el-icon-edit', value: '最新发布' }
];
</script>

<style scoped>
.ground-contain {
  height: 100%;
}

.content-layout {
  padding: 0 5%;
  height: 96%;
  overflow-y: auto;
}

.content-top {
  margin: 20px 0;
}

.content-main {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.el-segmented {
  --el-segmented-item-selected-color: #fff;
  /* --el-segmented-item-selected-bg-color: #ffd100; */
  --el-border-radius-base: 16px;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
.card-header .card-header-left {
  display: flex;
  gap: 10px;
}

.card-header-right-icon {
  transform: rotate(90deg);
}
.person-information-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.person-top {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 270px;
  margin-top: 30px;
}

.person-top-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: flex-start; */
}
.person-avatar {
  margin: 10px 0;
}

.person-bottom {
  width: 270px;
  margin-top: 30px;
}

.person-comment-usercommant ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.person-comment-usercommant li {
  color: #87cefa; /* 设置字体颜色为蓝色 */
  padding: 8px 12px; /* 设置合适的内边距，这里上下8px，左右12px，你可以按需调整 */
  position: relative;
}

.person-comment-usercommant li::before {
  content: '•'; /* 使用实心圆点作为自定义的列表标点，你也可以换成其他符号如"👉"之类的 */
  color: #87cefa; /* 设置标点颜色为蓝色 */
  position: absolute;
  left: 0; /* 将标点定位到最左边，根据需要可调整 */
  top: 50%; /* 垂直方向居中，后续进行微调 */
  transform: translateY(-50%); /* 精确垂直居中，兼容性较好 */
}

.person-comment {
  margin-bottom: 50px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.card-footer-feedbackinfo {
  display: flex;
  gap: 20px;
}

.card-footer-feedbackinfo-icon {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-footer-tag {
  display: flex;
  gap: 16px;
}
.person-comment-username {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
