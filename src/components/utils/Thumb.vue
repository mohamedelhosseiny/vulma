<template>
	<div class="thumb relative">
		<div class="content">
			<slot>
				
			</slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.thumb {
		width: 100%;
		background: #636363;
		height: 320px;
		.content {
			background: black;
			min-height: 30%;
			width: 100%;
			position: absolute;
			bottom: 0px;
		}	
	}
</style>