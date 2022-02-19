<template>
	<view class="content">
        <web-view :src="url"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://mars3d.cn/example-es5/a10_createMap_url.html'
            }
        },
        onLoad(e) { 
			
        }
    }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}  
</style>
