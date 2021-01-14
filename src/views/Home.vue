<template>
    <v-container class="pa-0">
        <v-row no-gutters>
            <v-carousel hide-delimiters continuous cycle>
                <v-carousel-item v-for="banner in banners" :key="banner.src" :src="banner.src">
                    <v-row
                        class="fill-height"
                        align="end"
                        justify="center"
                    >
                        <v-col>
                            <div class="display-2 white--text px-12 hidden-sm-only text-shadow"><strong>{{
                                    banner.title
                                }}</strong></div>
                            <br/>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="pt-2 px-2 pb-0 secondary">
            <h1 class="font-weight-light text-center">MALAYSIA'S #1 & SAFEST RENTAL PORTAL</h1>
        </v-row>
        <v-row no-gutters justify="space-around" class="pa-2 pt-4 secondary ">
            <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                    <v-col class="col-12 col-sm-3 pr-4" align="right">
                        <v-icon class="display-2" color="primary">mdi-shield-account</v-icon>
                    </v-col>
                    <v-col class="col-12 col-sm-9 pr-4">
                        <h3 class="font-weight-light">YOU ARE PROTECTED</h3>
                        <p class="font-weight-thin">Insurance claim up to RM 10,000 per item</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                    <v-col class="col-12 col-sm-3 pr-4" align="right">
                        <v-icon class="display-2" color="primary">mdi-account-check</v-icon>
                    </v-col>
                    <v-col class="col-12 col-sm-9 pr-4">
                        <h3 class="font-weight-light">SAFE & SECURED</h3>
                        <p class="font-weight-thin">Only validated and genuine renters</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                    <v-col class="col-12 col-sm-3 pr-4" align="right">
                        <v-icon class="display-2" color="primary">mdi-truck</v-icon>
                    </v-col>
                    <v-col class="col-12 col-sm-9 pr-4">
                        <h3 class="font-weight-light">CONVENIENT & EASY</h3>
                        <p class="font-weight-thin">Easy handover and collection of items</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="pt-2 px-2 pb-0">
            <h1 class="font-weight-light text-center">Featured Items</h1>
        </v-row>
        <v-row no-gutters justify="space-around" class="pa-2 pt-4">
            <v-col cols="6" md="3" class="pa-2" v-for="item in featured" :key="`featured-${item.id}`">
                <v-card
                    class="pa-1"
                >
                    <v-img
                        height="150"
                        contain
                        :src="item.image"
                    />

                    <v-card-title style="min-height: 140px">{{ item.title | truncate(50) }}</v-card-title>

                    <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ml-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 subtitle-1 primary--text">
                            From: ${{ item.price }}
                        </div>

                        <div style="min-height: 90px">{{ item.description | truncate(100) }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary lighten-2"
                            text
                        >
                            Book Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="py-5">
            <v-btn color="primary">Show More</v-btn>
        </v-row>
        <v-divider/>

        <v-row no-gutters align="center" justify="center" class="pt-2 px-2 pb-0">
            <h1 class="font-weight-light text-center">Top Items of the week</h1>
        </v-row>
        <v-row no-gutters justify="space-around" class="pa-2 pt-4">
            <v-col cols="6" md="3" class="pa-2" v-for="item in top_items" :key="`top_items-${item.id}`">
                <v-card
                    min-height="150"
                    class="pa-1"
                >
                    <v-img
                        height="150"
                        contain
                        :src="item.image"
                    />

                    <v-card-title style="min-height: 140px">{{ item.title | truncate(50) }}</v-card-title>

                    <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ml-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 subtitle-1 primary--text">
                            From: ${{ item.price }}
                        </div>

                        <div style="min-height: 90px">{{ item.description | truncate(100) }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary lighten-2"
                            text
                        >
                            Book Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="py-5">
            <v-btn color="primary">Show More</v-btn>
        </v-row>
        <v-divider/>

        <v-row no-gutters align="center" justify="center" class="pt-2 px-2 pb-0">
            <h1 class="font-weight-light text-center">New Arrival</h1>
        </v-row>
        <v-row no-gutters justify="space-around" class="pa-2 pt-4">
            <v-col cols="6" md="3" class="pa-2" v-for="item in new_releases" :key="`new_releases-${item.id}`">
                <v-card
                    min-height="150"
                    class="pa-1"
                >
                    <v-img
                        height="150"
                        contain
                        :src="item.image"
                    />

                    <v-card-title style="min-height: 140px">{{ item.title | truncate(50) }}</v-card-title>

                    <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ml-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 subtitle-1 primary--text">
                            From: ${{ item.price }}
                        </div>

                        <div style="min-height: 90px">{{ item.description | truncate(100) }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary lighten-2"
                            text
                        >
                            Book Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="py-5">
            <v-btn color="primary">Show More</v-btn>
        </v-row>
        <v-divider/>

        <v-row color="grey" no-gutters class="grey--text">
            <v-col cols="12" md="4" class="pa-8 text-justify">
                RentSmart Asia “(RentSmart Asia Sdn Bhd (1267397-U)” is changing the way rentals are done. We offer an
                e-commerce online rental platform for anyone across Malaysia that is fast, secure and convenient. Our
                online stores offer a broad product offering in categories ranging from cameras, laptops, computers,
                mobile phones, tablets, to household goods, toys, baby equipment to gowns, wedding dresses, costumes,
                and sports equipment.
            </v-col>
            <v-col cols="12" md="4" class="pa-8 text-justify">
                RentSmart is always striving to offer our customers the best possible offering – including multiple
                payment options, multiple delivery options, extensive customer service and insurance against accidental
                damage and theft. We are constantly expanding our product range as well like recently the Fashion
                category. We offer the vast selection of products that are vetted for the best quality that you’ll find
                anywhere all at your fingertips.
            </v-col>
            <v-col cols="12" md="4" class="pa-8 text-justify">
                Renting online in Malaysia has never been this easy! We will always have new offers and new deals
                available for you. Be in tuned with us by subscribing to our mailers. Remember, you can rent anything
                any day on RentSmart. Last but not the least, we want to emphasize that we’re more than just one of the
                Malaysia’s largest online eCommerce rental stores. It is our highest priority here at rentsmartasia.com
                to create the best online renting experience for every customer in Malaysia. So start renting online and
                start saving.
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {get} from "vuex-pathify";

export default {
    name: 'Home',
    data: () => ({
        banners: [
            {
                src: require('@/assets/images/banners/1.png'),
                title: 'Film It by Renting From Malaysia\'s Largest Online Rental Platform'
            },
            {
                src: require('@/assets/images/banners/2.png'),
                title: 'Earn from Dresses You Hardly Use on Malaysia\'s Largest Rental Platform'
            }
        ]
    }),
    computed: {
        products: get('products/all'),

        featured() {
            return this._.sampleSize(this.products, 4)
        },

        top_items() {
            return this._.sampleSize(this.products, 4)
        },

        new_releases() {
            return this._.sampleSize(this.products, 4)
        }
    }
}
</script>
