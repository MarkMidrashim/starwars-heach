<template>
	<div class="app-container">
		<div class="filter-container">
			<label id="search">{{ $t('defaults.search') }}</label>
			<el-input
				v-model="listQuery.search"
				:placeholder="$t('defaults.fields.search')"
				style="width: 30%;"
				class="filter-item"
				suffix-icon="fal fa-search"
			/>
			<el-button
				v-waves
				class="filter-item"
				type="primary"
				@click="handleFilter"
			> {{ $t('defaults.buttons.search') }}</el-button>
		</div>

		<el-table
			v-loading="listLoading"
			highlight-current-row
			style="width: 100%; margin:15px 0 15px;"
			:data="filtered"
		>
			<el-table-column :label="$t('config.centrais.columns.id')" prop="id" sortable align="center" width="100">
				<template slot-scope="scope">
				<span>{{ scope.row.id }}</span>
				</template>
			</el-table-column>
			<el-table-column :label="$t('config.centrais.columns.name')" prop="nome" sortable align="center" width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.nome }}</span>
				</template>
			</el-table-column>

		</el-table>

		<pagination
			v-show="total>0"
			:total="total"
			:page.sync="listQuery.page"
			:limit.sync="listQuery.limit"
			@pagination="getList"
		/>
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
	name: "Films",
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
	computed: {
		filtered () {
			var filterKey = this.listQuery.search && this.listQuery.search.toLowerCase()
			return this.list.filter(function (row) {
				return Object.keys(row).some(function (key) {
					return String(row[key]).toLowerCase().indexOf(filterKey.toLowerCase()) > -1
				})
			})
		}
	},
	methods: {
		getList() {
			this.listLoading = true;
			getPeoples().then(response => {
				this.list = response.results;
				this.total = response.count;
				// Just to simulate the time of the request
				setTimeout(() => {
					this.listLoading = false;
				}, 1.5 * 1000);
			});
		},
		handleFilter() {
			this.listQuery.page = 1;
			this.getList();
			var filterKey = this.listQuery.search && this.listQuery.search.toLowerCase()
			var registers = this.list
			if (filterKey) {
				registers = registers.filter(function (row) {
					return Object.keys(row).some(function (key) {
						return String(row[key]).toLowerCase().indexOf(filterKey) > -1
					})
				})
			}
		}
	}
};
</script>

<style lang="scss">
	$--color-success: #c0e5d1;
	$--color-warning: rgb(248, 222, 149);
	$--color-danger: #ffd1d1;
	.el-table .active-row {
		background: $--color-success;
	}
	.el-table .disable-row {
		background: $--color-danger;
	}
</style>
