<template>
	<div class="app-container" v-loading="listLoading">
		<el-row :gutter="20">
            <el-card class="box-card" @click.native="handleRedirect(0)">
                <div class="component-item">
                    <svg-icon icon-class="smartphone" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.movel.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.movel.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" @click.native="handleRedirect(1)">
                <div class="component-item">
                    <svg-icon icon-class="fixedphone" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.fixa.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.fixa.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" @click.native="handleRedirect(2)">
                <div class="component-item">
                    <svg-icon icon-class="download" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.dados.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.dados.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
        </el-row>

		<el-row :gutter="20">
            <el-card class="box-card" @click.native="handleRedirect(0)">
                <div class="component-item">
                    <svg-icon icon-class="smartphone" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.movel.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.movel.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" @click.native="handleRedirect(1)">
                <div class="component-item">
                    <svg-icon icon-class="fixedphone" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.fixa.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.fixa.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" @click.native="handleRedirect(2)">
                <div class="component-item">
                    <svg-icon icon-class="download" class-name="image-report" />
                    <div class="report-title">
                        <h5 class="card-category">{{ $t('inventory.inventario.dados.title') }}</h5>
                        <h2 class="card-title">{{ $t('inventory.inventario.dados.subtitle') }}</h2>
                    </div>
                </div>
            </el-card>
        </el-row>
	</div>
</template>

<script>
import path from "path";
import { deepClone } from "@/utils";
import { getPeopleById, getPeoples } from "@/api/people";
import waves from "@/directive/waves"; // waves directive
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import i18n from "@/lang";

export default {
	name: "People",
	components: { Pagination },
	directives: { waves },
	filters: {
		statusFilter(status) {
			const statusMap = {
				published: "success",
				draft: "info",
				deleted: "danger"
			};
			return statusMap[status];
		},
		capitalize: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	},
	data() {
		return {
			list: [],
			total: 0,
			listLoading: true,
			listQuery: {
				page: 1,
				limit: 10,
				search: '',
				sort: "+id"
			},
			temp: {
				id: undefined,
				nome: "",
				path: "",
				ativo: true,
			},
			dialogFormVisible: false,
			dialogStatus: "",
			textMap: {
				update: "Edit",
				create: "Create"
			},
			rules: {
				nome: [
					{ required: true, message: "This field is required", trigger: "change" }
				],
				ativo: [
					{ required: true, message: "This field is required", trigger: "change" }
				]
			},
			downloadLoading: false
		};
	},
	created() {
		this.getList()
	},
	methods: {
		getList() {
			this.listLoading = true;
			setTimeout(() => {
				this.listLoading = false;
			}, 1.5 * 1000);
		},
		handleRedirect(index) {
            switch (index) {
                case 0: this.$router.push('/inventory/movel/'); break;
                case 1: this.$router.push('/inventory/fixa/'); break;
                case 2: this.$router.push('/inventory/dados/'); break;
                case 3: this.$router.push('/inventory/employee/'); break;
                case 4: this.$router.push('/inventory/costCenter/'); break;
                case 5: this.$router.push('/inventory/equipamento/aparelho/'); break;
                case 6: this.$router.push('/inventory/allocation/'); break;
                case 7: this.$router.push('/inventory/upload/'); break;
                case 8: this.$router.push('/inventory/equipamento/modelos/'); break;
            }
        },
	}
};
</script>

<style lang="scss" scoped>
	.info-reports {
        margin-bottom: 25px
    }
    .mixin-components-container {
        background-color: #f0f2f5;
        padding: 30px;
        min-height: calc(100vh - 84px);
    }
    .component-item{
        min-height: 100px;
    }
    .box-card {
        margin-top: 16px;
        width: 31.5%;
        float: left;
        margin-right: 16px;
        align-items: left;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        .image-report {
            height: 100px;
            width: 100px;
        }
        .report-title {
            margin-left: 10px;
            float: right
        }
        &:hover {
            animation: image-report 1s infinite;
            animation-timing-function: linear;
            cursor: pointer;
        }
        @keyframes image-report {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }
    }
    $--color-success: #13ce66;
	$--color-warning: #FFBA00;
	$--color-danger: #ff4949;
	$--color-info: #1890ff;
	.center {
		margin: 0 auto;
		width: 67%;
		margin-bottom: 10px;
		padding: 5px;
	}
    .el-input-number.el-input-number--medium {
		& .el-input-number__decrease,
		& .el-input-number__increase {
			display: none !important;
		}
		input {
			text-align: right !important;
			padding: 0 14px !important;
			margin: 0 !important;
		}
	}
	.circle {
		height: 15px;
		width: 15px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		box-shadow: 0 0 2px #bbb;
	}
	.fa-info-circle {
		margin-left: 5px !important;
		color: $--color-info !important;
	}
	.fa-create-circle {
		margin-left: 5px !important;
		color: $--color-success !important;
	}
</style>
