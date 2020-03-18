<template>
    <!-- Loading -->
    <div class="overlay">
        <div class="text-center loading">
            <div class="spinner-border" role="status">
                <span class="sr-only">加载中...</span>
            </div>
            <p class="text-light">请稍候...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped>
.overlay {
    position: fixed;
	width: 100%;
	height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 5000;
}
.loading {
    position: relative;
    top: 50%;
}
</style>
