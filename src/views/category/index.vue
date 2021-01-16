<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                md="3"
                class="hidden-sm-and-down"
            >
                <v-card outlined>
                    <v-card-title>Filters</v-card-title>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item v-for="filter in filters" :key="filter.id"
                                     :to="{ name: 'Category', params: { catId: filter.id } }">
                            <v-list-item-content>
                                <v-list-item-title>{{ filter.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-card-title>Price: ${{ range[0] }} - ${{ range[1] }}</v-card-title>
                    <v-range-slider
                        v-model="range"
                        :max="max"
                        :min="min"
                        :height="10"
                        class="align-center"
                        dense
                    ></v-range-slider>
                    <v-row class="pa-2" dense>
                        <v-col cols="12" sm="5">
                            <v-text-field
                                :value="range[0]"
                                label="Min"
                                outlined
                                dense
                                @change="setTimeout(() => { $set(range, 0, $event) }, 600)"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <p class="pt-2 text-center">TO</p>
                        </v-col>
                        <v-col cols="12" sm="5">
                            <v-text-field
                                :value="range[1]"
                                label="Max"
                                outlined
                                dense
                                @change="setTimeout(() => { $set(range, 1, $event) }, 600)"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-card-title class="pb-0">Ratings:</v-card-title>
                    <v-container class="pt-0" fluid>
                        <v-checkbox append-icon="mdi-star" label="4 & above" hide-details dense></v-checkbox>
                        <v-checkbox append-icon="mdi-star" label="3 & above" hide-details dense></v-checkbox>
                        <v-checkbox append-icon="mdi-star" label="2 & above" hide-details dense></v-checkbox>
                        <v-checkbox append-icon="mdi-star" label="1 & above" hide-details dense></v-checkbox>
                    </v-container>
                    <v-divider></v-divider>

                </v-card>
            </v-col>
            <v-col
                cols="12"
                md="9"
            >
                <v-breadcrumbs class="pb-0" :items="breadcrumbs"></v-breadcrumbs>

                <template v-if="fetching">
                    <v-row class="mt-6" justify="center" align="center">
                        <v-col cols="12">
                            <v-progress-linear indeterminate></v-progress-linear>
                        </v-col>
                    </v-row>
                </template>
                <template v-else>
                    <v-row dense>
                        <v-col cols="12" sm="8" class="pl-6 pt-6">
                            <small>Showing 1-12 of 200 products</small>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;"
                                      outlined dense></v-select>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text-center">
                        <v-col cols="6" md="4" :key="product.id" v-for="product in products">
                            <product :item="product"/>
                        </v-col>
                    </v-row>
                    <div class="text-center mt-12">
                        <v-pagination
                            v-model="page"
                            :length="6"
                        ></v-pagination>
                    </div>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import {capitalize} from "@/helpers/string";
import {get, call} from "vuex-pathify";
import Product from '@/components/product/';

export default {
    components: {Product},
    data: () => ({
        fetching: false,
        range: [0, 10000],
        select: 'Popularity',
        options: [
            'Default',
            'Popularity',
            'Relevance',
            'Price: Low to High',
            'Price: High to Low',
        ],
        page: 1,
        min: 0,
        max: 10000,
        products: []
    }),

    computed: {
        categories: get('categories/all'),

        catId() {
            return this.$route.params.catId;
        },

        breadcrumbs() {
            return this.catId?.split(' ').map(word => {
                return {
                    text: capitalize(word),
                    disabled: true,
                }
            });
        },

        filters() {
            return this.categories.map(cat => {
                return {
                    id: cat,
                    name: capitalize(cat),
                    selected: this.catId === cat
                }
            })
        }
    },

    watch: {
        '$route.params.catId': {
            handler: function (catId) {
                this.products = [];
                this.fetching = true;
                this.loadProducts(catId).then(data => {
                    console.log(data);
                    this.products = data;
                }).finally(() => {
                    this.fetching = false
                })
            },
            deep: true,
            immediate: true
        }
    },

    methods: {
        loadProducts: call('categories/loadProducts')
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
}
</style>