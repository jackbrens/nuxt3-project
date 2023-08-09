<template>
	<div class="pin-item">
		<div class="pin-header-row pin-header">
			<div class="account-group">
				<div class="popover-box">
					<a class="user-link">
						<div class="avatar">
							<img
								:src="props.itemInfo.author_user_info.avatar_large"
								alt="huSir的头像"
								class="lazy avatar-img"
								loading="lazy"
							/>
						</div>
					</a>
				</div>
				<div class="pin-header-content">
					<div class="pin-header-popover">
						<div class="popover-box user-popover">
							<a class="username">{{ props.itemInfo.author_user_info.user_name }}</a>
						</div>
					</div>
					<div class="meta-box">
						<div class="position ellipsis">
							{{ props.itemInfo.author_user_info.job_title }} {{ '@ ' + props.itemInfo.author_user_info.company }}
						</div>
						<div class="dot">·</div>
						<a>
							<time datetime="1691459123000" title="2023-08-08 09:45:23" class="time"> 1天前 </time>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="pin-content-row middle-row">
			<div class="content-box">
				<span class="content">{{ props.itemInfo.msg_Info.content }}</span>
				<div class="limit-ctl-box"></div>
			</div>
		</div>
		<div v-if="props.itemInfo.hot_comment.comment_info" class="hot-container hot-comment-row middle-row is-link">
			<div class="title">
				<svg width="43" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="hot-icon">
					<path
						d="M1.35892 4.94966L2.61962 3.35551L2.2301 1.36077L3.82425 2.62148L5.81898 2.23195L4.55827 3.8261L4.9478 5.82083L3.35365 4.56013L1.35892 4.94966Z"
						fill="#FFCC15"
					></path>
					<path
						d="M38.913 9.12086L39.5036 11.6625L41.8175 12.8686L39.2759 13.4592L38.0697 15.7731L37.4792 13.2314L35.1653 12.0253L37.7069 11.4347L38.913 9.12086Z"
						fill="#FFCC15"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.5087 13.2253H5.34515C5.1987 13.2253 5.08538 13.097 5.10355 12.9517L5.35559 10.9354C5.37082 10.8135 5.47439 10.7221 5.59718 10.7221H6.33349L6.44613 9.871H5.59586C5.44928 9.871 5.33593 9.74242 5.3543 9.59699L5.58062 7.80599C5.596 7.68429 5.69951 7.59303 5.82218 7.59303H6.73398L6.84666 6.767H5.97096C5.82451 6.767 5.7112 6.63864 5.72936 6.49332L5.9814 4.47703C5.99663 4.35518 6.1002 4.26375 6.223 4.26375H7.14704L7.31972 2.93627C7.3355 2.81496 7.43883 2.7242 7.56116 2.7242H9.71101C9.85795 2.7242 9.97141 2.85337 9.95246 2.99908L9.78795 4.26375H10.5997C10.7466 4.26375 10.8601 4.39291 10.8412 4.53862L10.579 6.55491C10.5633 6.67622 10.4599 6.767 10.3376 6.767H9.45002L9.33738 7.59303H10.1486C10.2957 7.59303 10.4092 7.72249 10.39 7.86834L10.1538 9.65935C10.1378 9.78047 10.0346 9.871 9.91243 9.871H9.037L8.88678 11.1226C8.80951 11.7127 8.51499 12.2527 8.06074 12.6371C7.63203 13.0152 7.08032 13.2243 6.5087 13.2253ZM6.13139 13.7886C6.89014 13.7886 7.47124 14.4635 7.35856 15.2138L7.34837 15.2817C7.24702 15.9565 6.66726 16.4557 5.98484 16.4557C5.22609 16.4557 4.64499 15.7809 4.75767 15.0305L4.76786 14.9626C4.8692 14.2878 5.44897 13.7886 6.13139 13.7886ZM9.77184 13.7886C10.5237 13.7886 11.0984 14.4592 10.9834 15.2022L10.9679 15.3022C10.8651 15.966 10.2937 16.4557 9.62198 16.4557C8.87251 16.4557 8.29851 15.7891 8.40981 15.0479L8.42474 14.9485C8.52487 14.2818 9.09764 13.7886 9.77184 13.7886ZM18.6536 10.7038C18.7984 10.7069 18.9085 10.835 18.8899 10.9786L18.627 13.0007C18.6112 13.122 18.5079 13.2128 18.3855 13.2128H17.5105C17.2367 13.218 16.965 13.1635 16.7144 13.0533C16.4637 12.9431 16.2399 12.7797 16.0586 12.5745C15.8786 12.3701 15.7469 12.1279 15.6732 11.8658C15.5995 11.6036 15.5858 11.3282 15.633 11.0601L16.1484 7.05407C16.1672 6.90847 16.0538 6.77952 15.907 6.77952H14.7069L14.2187 8.50669H15.0805C15.2274 8.50669 15.3409 8.63585 15.322 8.78156L15.0598 10.7979C15.0441 10.9192 14.9407 11.0099 14.8184 11.0099H13.5178L12.9304 13.0371C12.9002 13.1412 12.8049 13.2128 12.6965 13.2128H10.5608C10.3992 13.2128 10.2825 13.0583 10.3266 12.9028L10.8644 11.0099H10.6909C10.544 11.0099 10.4306 10.8808 10.4495 10.7351L10.7116 8.71878C10.7274 8.59747 10.8307 8.50669 10.9531 8.50669H11.5778L12.0659 6.77952H11.3168C11.1698 6.77952 11.0564 6.65036 11.0753 6.50466L11.3374 4.48837C11.3532 4.36705 11.4565 4.27628 11.5789 4.27628H12.5859C12.6933 4.27628 12.788 4.20592 12.819 4.1031L13.1902 2.87239C13.2212 2.76958 13.3159 2.69922 13.4233 2.69922H15.5481C15.7098 2.69922 15.8266 2.85405 15.7822 3.00959L15.4203 4.27628H17.0223C17.2928 4.26468 17.5625 4.3137 17.8115 4.41982C18.0606 4.52594 18.2827 4.68645 18.4617 4.88956C18.6476 5.0853 18.7843 5.3224 18.8604 5.58138C18.9366 5.84035 18.9501 6.11378 18.8998 6.37899L18.3366 10.697L18.6536 10.7038ZM12.2688 14.1966L12.0019 16.1649C11.9886 16.2637 12.0947 16.3396 12.1879 16.3043C12.812 16.0685 13.9225 15.9619 14.8952 16.346C16.1864 16.856 17.6571 16.7211 18.3753 16.5152C18.5028 16.4786 18.5898 16.3657 18.6074 16.2342L18.882 14.1737C18.8942 14.0826 18.8046 14.0113 18.7175 14.0409C17.6004 14.42 16.7095 14.3716 15.28 13.9726C14.2191 13.6764 13.1097 13.7695 12.5166 13.9111C12.3818 13.9433 12.2875 14.0594 12.2688 14.1966ZM24.1069 14.2858C24.1257 14.1416 24.0148 14.0133 23.8694 14.0109L23.3786 14.0029L24.094 8.66933C24.1321 8.40226 24.1117 8.13016 24.0344 7.87171C23.9571 7.61327 23.8246 7.37469 23.6462 7.17241C23.4677 6.97013 23.2474 6.80897 23.0006 6.70007C22.7538 6.59117 22.4863 6.53712 22.2166 6.54163H20.7909C20.6685 6.54163 20.5652 6.63241 20.5494 6.75372L20.2873 8.77001C20.2683 8.91572 20.3818 9.04488 20.5287 9.04488H21.4281L20.7126 14.3784C20.6661 14.6453 20.6795 14.9192 20.7519 15.1803C20.8243 15.4414 20.9539 15.6831 21.1312 15.8879C21.3085 16.0928 21.5291 16.2556 21.7771 16.3647C22.025 16.4738 22.2942 16.5264 22.565 16.5186H23.6028C23.7251 16.5186 23.8284 16.4279 23.8442 16.3065L24.1069 14.2858ZM25.0581 3.13791C25.0778 2.99182 24.9642 2.86185 24.8168 2.86185H21.8047C21.6823 2.86185 21.579 2.95263 21.5632 3.07394L21.3011 5.09023C21.2822 5.23594 21.3956 5.3651 21.5425 5.3651H24.5446C24.6665 5.3651 24.7696 5.27498 24.7859 5.1542L25.0581 3.13791ZM30.016 16.2582L30.4898 12.7998H33.8066C33.9285 12.7998 34.0316 12.7096 34.0479 12.5888L34.3201 10.5726C34.3398 10.4265 34.2262 10.2965 34.0788 10.2965H30.8528L31.5162 5.3651H34.5951C34.717 5.3651 34.8201 5.27498 34.8364 5.1542L35.1086 3.13791C35.1283 2.99182 35.0147 2.86185 34.8673 2.86185H26.1228C26.0004 2.86185 25.8971 2.95263 25.8813 3.07395L25.6192 5.09024C25.6003 5.23594 25.7137 5.3651 25.8607 5.3651H28.8752L28.2244 10.2965H24.9212C24.7989 10.2965 24.6955 10.3873 24.6798 10.5086L24.4176 12.5249C24.3987 12.6706 24.5121 12.7998 24.6591 12.7998H27.8614L27.3966 16.1921C27.3766 16.3383 27.4902 16.4686 27.6378 16.4686H29.7747C29.8964 16.4686 29.9994 16.3787 30.016 16.2582ZM27.9499 6.55436C27.9693 6.40842 27.8558 6.27876 27.7086 6.27876H25.9469C25.8248 6.27876 25.7216 6.36914 25.7055 6.49012L25.3573 9.10717C25.3379 9.25311 25.4514 9.38277 25.5986 9.38277H27.3603C27.4824 9.38277 27.5856 9.29239 27.6017 9.1714L27.9499 6.55436ZM34.4208 6.55436C34.4402 6.40842 34.3267 6.27876 34.1795 6.27876H32.3669C32.2452 6.27876 32.1422 6.36861 32.1257 6.48917L31.7668 9.10621C31.7468 9.25246 31.8605 9.38277 32.0081 9.38277H33.8312C33.9533 9.38277 34.0565 9.29239 34.0726 9.1714L34.4208 6.55436Z"
						fill="url(#paint0_linear_10884_132334)"
					></path>
					<path
						d="M35.7438 3.26324C36.9167 3.35426 37.6506 3.64584 37.8209 4.15467C38.4595 6.06222 30.936 10.3006 21.0168 13.6213C11.0975 16.942 2.53867 18.0876 1.90006 16.1801C1.65904 15.4601 2.58069 14.4081 4.355 13.1988"
						stroke="url(#paint1_linear_10884_132334)"
						stroke-width="0.3"
						stroke-linecap="round"
					></path>
					<defs>
						<linearGradient
							id="paint0_linear_10884_132334"
							x1="7.74365"
							y1="7.69922"
							x2="31.7437"
							y2="12.6992"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FF813A"></stop>
							<stop offset="1" stop-color="#E93838"></stop>
						</linearGradient>
						<linearGradient
							id="paint1_linear_10884_132334"
							x1="37.2437"
							y1="3.19922"
							x2="3.74365"
							y2="14.6992"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFCB15"></stop>
							<stop offset="1" stop-color="#FFE076"></stop>
						</linearGradient>
					</defs>
				</svg>
				<span data-v-1b04ac12="" class="digg-count">{{ props.itemInfo.hot_comment.comment_info.digg_count }}赞</span>
			</div>
			<div data-v-1b04ac12="" class="desc">{{ props.itemInfo.hot_comment.comment_info.comment_content }}</div>
		</div>
		<div class="club-digg-row middle-row">
			<div style="flex: 1 1 auto"></div>
			<div class="digg-container digg-box is-link">
				<div class="list">
					<div class="avatar jj-avatar item" style="z-index: 5">
						<img
							src="https://p3-passport.byteacctimg.com/img/user-avatar/6e330aabf05507a8225f4d6b351bb649~100x100.awebp"
							alt="avatar"
							class="lazy avatar-img"
							loading="lazy"
						/>
					</div>
					<div class="avatar jj-avatar item" style="z-index: 4">
						<img
							src="https://p3-passport.byteacctimg.com/img/user-avatar/7415b35abd117adba15370bd448b4a0b~100x100.awebp"
							alt="avatar"
							class="lazy avatar-img"
							loading="lazy"
						/>
					</div>
					<div class="avatar jj-avatar item" style="z-index: 3">
						<img
							src="https://p26-passport.byteacctimg.com/img/user-avatar/42d82b8380bafdbd39ae2bf280857d03~100x100.awebp"
							alt="avatar"
							class="lazy avatar-img"
							loading="lazy"
						/>
					</div>
				</div>
				<span class="label">等人赞过</span>
			</div>
		</div>
		<div class="pin-action-row">
			<div class="action-box">
				<div class="share-action action">
					<div class="action-title-box">
						<span class="icon normal-icon share-icon"></span>
						<span class="action-title">分享</span>
					</div>
				</div>
				<div class="comment-action action">
					<div class="action-title-box">
						<span class="icon normal-icon comment-icon"></span>
						<span class="action-title"> {{ props.itemInfo.msg_Info.comment_count }} </span>
					</div>
				</div>
				<div class="like-action action">
					<div class="action-title-box">
						<span class="icon like small-icon"></span>
						<span class="action-title"> {{ props.itemInfo.msg_Info.digg_count }} </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps({
	itemInfo: {
		type: Object,
		default: () => {},
		required: true,
	},
})

// console.log(props.itemInfo)
</script>
<style lang="scss" scoped>
.pin-item {
	background-color: var(--navbar-background-color);
	border-radius: 4px;
	padding: 20px 20px 0;
	position: relative;
	.pin-header {
		margin-right: 5px;
		display: flex;
		align-items: center;
		.account-group {
			display: flex;
			align-items: center;
			.popover-box {
				display: flex;
				align-items: center;
				.user-link {
					display: inline-block;
					.avatar {
						flex: 0 0 auto;
						width: 4rem;
						height: 4rem;
						border-radius: 50%;
						.avatar-img {
							border-radius: 50%;
							width: 100%;
							height: 100%;
							-o-object-fit: cover;
							object-fit: cover;
							background-color: var(--juejin-gray-3);
						}
					}
				}
			}
			.pin-header-content {
				margin-left: 12px;
				.pin-header-popover {
					display: flex;
					align-items: center;
					.popover-box {
						display: flex;
						align-items: center;
						.username {
							font-weight: 500;
							font-size: 16px;
							line-height: 28px;
							color: var(--primary-color);
						}
					}
				}
				.meta-box {
					display: flex;
					align-items: center;
					font-size: 14px;
					line-height: 24px;
					color: var(--secondary-color);
					cursor: default;
					white-space: nowrap;
					.ellipsis {
						max-width: 24rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.dot {
						margin: 0 0.5rem;
					}
					.time {
						color: #909090;
					}
				}
			}
		}
	}
	.pin-content-row {
		position: relative;
		margin: 8px 0 0 60px;
		.content-box {
			font-size: 14px;
			color: var(--primary-color);
			overflow: hidden;
			line-height: 20px;
			.content {
				white-space: pre-line;
			}
		}
	}
	.hot-container {
		position: relative;
		margin: 12px 0 0 60px;
		cursor: pointer;
		background: var(--juejin-gray-3);
		border-radius: 4px;
		padding: 12px 16px;
		.title {
			margin-left: -4px;
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			line-height: 20px;
			color: var(--juejin-font-3);
		}
		.desc {
			margin-top: 8px;
			font-size: 14px;
			line-height: 24px;
			color: var(--juejin-color-nav-title);
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
	}
	.club-digg-row {
		margin-top: 12px;
		display: flex;
		position: relative;
		margin: 8px 0 0 60px;
		.digg-container {
			cursor: pointer;
			display: flex;
			line-height: 24px;
			.list {
				display: flex;
				position: relative;
				z-index: 1;
				.item {
					width: 22px;
					height: 22px;
					border: 2px solid var(--primary-background-color);
					border-radius: 50%;
					margin-right: -6px;
					box-sizing: border-box;
					display: inline-flex;
					position: relative;
					&:last-child {
						margin-right: 4px;
					}
					.avatar-img {
						border-radius: 50%;
						width: 100%;
						height: 100%;
						object-fit: cover;
						background-color: var(--juejin-gray-3);
					}
				}
			}
			.label {
				font-size: 14px;
				line-height: 24px;
				color: var(--juejin-font-3);
			}
		}
	}
	.pin-action-row {
		margin-top: 12px;
		margin-left: -20px;
		margin-right: -20px;
		.action-box {
			display: flex;
			position: relative;
			height: 36px;
			border-top: 1px solid var(--juejin-gray-1-2);
			color: var(--juejin-font-3);
			.share-icon {
				-webkit-mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/36d78e150182aba28d468489573a7dbf.svg');
				mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/36d78e150182aba28d468489573a7dbf.svg');
				background-color: var(--juejin-font-3);
				width: 16px;
				height: 16px;
			}
			.comment-icon {
				-webkit-mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a9532d230b98d8920a987aafa22e9059.svg');
				mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a9532d230b98d8920a987aafa22e9059.svg');
				background-color: var(--juejin-font-3);
				width: 16px;
				height: 16px;
			}
			.small-icon {
				-webkit-mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/b63038829982183f1741af41ac12d650.svg');
				mask-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/b63038829982183f1741af41ac12d650.svg');
				background-color: var(--juejin-font-3);
				width: 16px;
				height: 16px;
			}
			.action {
				flex: 1 1 33.333%;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				height: 100%;
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				.action-title-box {
					display: flex;
					align-items: center;
					justify-content: center;
					.action-title {
						margin-left: 0.3em;
						font-size: 12px;
						font-weight: 400;
						display: inline-block;
					}
				}
			}
		}
	}
}
</style>
