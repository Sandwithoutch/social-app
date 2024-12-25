<template>
  <el-card class="dynamic-card">
    <div class="card-top">
      <div class="card-top-left">
        <img :src="avatar" alt="Avatar" class="avatar" />
        <span class="card-top-info">{{ postDate }}</span>
      </div>
      <div class="card-top-right">
        <el-icon class="more-icon"><MoreFilled /></el-icon>
      </div>
    </div>
    <div class="card-content">
      <p class="card-text">{{ content }}</p>
    </div>
    <div class="card-bottom">
      <div class="card-bottom-left">
        <el-icon class="like-icon"><ThumbsUp /></el-icon>
        <span class="like-count">{{ likeCount }}</span>
        <el-icon class="dislike-icon"><ThumbsDown /></el-icon>
        <span class="dislike-count">{{ dislikeCount }}</span>
      </div>
      <div class="card-bottom-right">
        <el-icon class="reply-icon"><ChatSquare /></el-icon>
        <span class="reply-text">回复</span>
        <el-icon class="expand-icon"><ArrowDown /></el-icon>
        <span class="expand-text">展开所有评论</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
const avatar =
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const postDate = '2024-12-25 10:00';
const content = '这是一条动态评论内容，这里可以写很多内容来展示。';
const likeCount = 10;
const dislikeCount = 5;
</script>

<style scoped>
.dynamic-card {
  padding: 20px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-top-left {
  display: flex;
  align-items: center;
}

.card-top-info {
  margin-left: 10px;
}

.card-top-right {
  cursor: pointer;
}

.card-content {
  margin-top: 10px;
}

.card-bottom {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.card-bottom-left {
  display: flex;
  align-items: center;
}

.card-bottom-left.el-icon {
  margin-right: 5px;
}

.card-bottom-right {
  display: flex;
  align-items: center;
}

.card-bottom-right.el-icon {
  margin-right: 5px;
}
</style>
