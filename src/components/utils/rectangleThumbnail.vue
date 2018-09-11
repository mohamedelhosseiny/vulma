<template>
	<div class="relative rectangle m-b-10" :style="{height, width}">
		<img src="" alt="">
			<div class="content" :class="{'is-half': half}" :style="{background: contentBg, bottom: contentPosition}">
				<div v-if="news">
					<h2 class="title is-4 is-white">News Title</h2>
					<p class="subtitle is-5 is-white">Date | Category</p>
					<p class="subtitle is-5 is-white" v-if="half">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, magnam!</p>
				</div>
				<div v-else-if="gallery">
					
				</div>
				<div v-else>
					<slot>
						
					</slot>
				</div>
			</div>
	</div>
</template>
<script>
	export default {
		props: ['height', 'width', 'half', 'news', 'contentBg', 'contentPosition']
	};
</script>
<style lang="scss" scoped>
	.rectangle {
    background: #636363;
    margin: 0 auto !important;
	}
	.is-half {
		min-height: 50%;
	}
	.content {
		background: black;
		position: absolute;
		bottom: 0px;
		width: 100%;
		padding: 10px;
	}
</style>