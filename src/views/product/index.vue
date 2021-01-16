<template>
    <v-container>
        <template v-if="!product">
            <v-row class="mt-8" no-gutters justify="center" align="center">
                <v-progress-circular color="primary" size="80" indeterminate />
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <div class="col-md-5 col-sm-5 col-xs-12">
                    <v-carousel>
                        <v-carousel-item
                            :src="product.image"/>
                    </v-carousel>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <v-breadcrumbs class="pb-0" :items="breadcrumbs"></v-breadcrumbs>
                    <div class="pl-6">
                        <p class="display-1 mb-0">Modern Black T-Shirt</p>
                        <v-card-actions class="pa-0">
                            <p class="headline font-weight-light pt-3">${{ product.price }}
                                <del style="" class="subtitle-1 font-weight-thin">${{ product.price + 10 }}</del>
                            </p>
                            <v-spacer></v-spacer>
                            <v-rating v-model="rating" class="" background-color="warning lighten-3"
                                      color="warning" dense></v-rating>
                            <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
                        </v-card-actions>
                        <p class="subtitle-1 font-weight-thin">
                            {{ product.description | truncate(300) }}
                        </p>
                        <p class="title">ITEMS</p>

                        <v-text-field
                            type="number"
                            outlined
                            style="width:100px"
                            :value="1"
                            dense
                        ></v-text-field>
                        <v-btn class="primary white--text" outlined tile dense>
                            <v-icon>mdi-cart</v-icon>
                            ADD TO CART
                        </v-btn>
                        <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>

                    </div>
                </div>
            </v-row>
            <v-row>
                <div class="col-sm-12 col-xs-12 col-md-12">
                    <v-tabs>
                        <v-tab>Description</v-tab>
                        <v-tab>REVIEWS</v-tab>
                        <v-tab-item>
                            <p class="pt-10 subtitle-1 font-weight-thin">
                                {{ product.description }}
                            </p>
                        </v-tab-item>
                        <v-tab-item>
                            <v-list
                                three-line="true"
                                avatar="true"
                            >
                                <v-list-item-group v-model="item" color="primary">
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        inactive="true"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="item.avatar"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.title"></v-list-item-title>
                                            <v-rating v-model="rating" class="" background-color="warning lighten-3"
                                                      color="warning" dense></v-rating>
                                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-tab-item>
                    </v-tabs>
                    <v-card-text
                        class="pa-0 pt-4"
                        tile
                        outlined
                    >
                        <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
                        <v-divider class="mb-6"></v-divider>
                        <v-row class="text-center">
                            <v-col cols="6" md="3" v-for="product in products" :key="product.id">
                                <product :item="product"/>
                            </v-col>
                        </v-row>
                        <v-row class="py-6" justify="center">
                            <v-btn color="primary">Show More</v-btn>
                        </v-row>
                    </v-card-text>
                </div>
            </v-row>
        </template>
    </v-container>
</template>
<script>
import {call} from "vuex-pathify";
import {capitalize} from "@/helpers/string";
import Product from '@/components/product';

export default {
    components: {
        Product
    },
    data: () => ({
        fetching: false,
        product: null,
        products: [],
        rating: 4.5,
    }),

    computed: {
        breadcrumbs() {
            return this.product?.category?.split(' ').map(word => {
                return {
                    text: capitalize(word),
                    disabled: true,
                }
            });
        },
    },

    watch: {
        '$route.params.productId': {
            handler: function (productId) {
                this.product = null;
                this.products = [];
                this.fetching = true;

                this.loadProduct(productId).then(data => {
                    this.product = data;
                    this.loadCategoryProducts(this.product.category).then(data => {
                        this.products = data.slice(0, 4);
                    });
                }).finally(() => {
                    this.fetching = false
                })
            },
            deep: true,
            immediate: true
        }
    },

    methods: {
        loadProduct: call('products/loadProduct'),
        loadCategoryProducts: call('categories/loadProducts')
    }
}
</script>