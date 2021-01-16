<template>
    <v-app>
        <v-app-bar
            app
            color="secondary"
            dark
            class="app-bar"
            extended
            extension-height="56"
            hide-on-scroll
        >
            <v-container class="py-0 fill-height">
                <v-toolbar-title>
                    <a href="/">
                        <v-img
                            alt="Vuetify Name"
                            class="shrink mt-1"
                            contain
                            min-width="156"
                            src="@/assets/logo.png"
                            width="100"
                        />
                    </a>
                </v-toolbar-title>
                <v-text-field
                    flat
                    light
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="hidden-sm-and-down pl-10 ml-4"
                    v-model="search"
                />
                <v-spacer class="hidden-md-and-up"/>
                <div class="ml-2 pt-2">
                    <v-badge
                        overlap
                        offset-x="18"
                        offset-y="18"
                    >
                        <template #badge><span class="font-weight-bold">2</span></template>
                        <v-btn icon>
                            <v-icon color="primary">mdi-cart</v-icon>
                        </v-btn>
                    </v-badge>

                    <v-btn icon>
                        <v-icon color="primary">mdi-account</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon color="primary">mdi-flag</v-icon>
                    </v-btn>
                </div>
            </v-container>
            <template #extension>
                <v-text-field
                    flat
                    light
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="hidden-md-and-up"
                    v-model="search"
                />
                <v-container class="py-0 px-0 fill-height hidden-sm-and-down">
                    <v-row no-gutters justify="center" align="center">
                        <v-chip @click="selectTag(category)" v-for="category in categories" :key="category"
                                color="primary"
                                class="mr-2 text-capitalize" small>
                            {{ category }}
                        </v-chip>
                    </v-row>
                </v-container>
            </template>
        </v-app-bar>

        <v-main>
            <router-view transition="slide-y-transition"/>
        </v-main>

        <v-footer
            color="blue-grey"
            :padless="true"
        >
            <v-card
                flat
                tile
                width="100%"
                class="blue-grey white--text text-center"
            >
                <v-card-text>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">mdi-email</v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">mdi-linkedin</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    <v-row justify="space-around" align="start">
                        <v-col cols="12" md="6" lg="3" align-self="center">
                            <v-list color="blue-grey" dark>
                                <v-subheader>About</v-subheader>
                                <v-list-item>Our History</v-list-item>
                                <v-list-item>How It Works</v-list-item>
                                <v-list-item>Press</v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <v-list color="blue-grey" dark>
                                <v-subheader>Important Info</v-subheader>
                                <v-list-item>FAQ</v-list-item>
                                <v-list-item>Privacy Policy</v-list-item>
                                <v-list-item>Terms of Service</v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <v-list color="blue-grey" dark>
                                <v-subheader>Get In Touch</v-subheader>
                                <v-list-item>Blog</v-list-item>
                                <v-list-item>Wishlist</v-list-item>
                                <v-list-item>Contact Us</v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <v-list color="blue-grey" dark>
                                <v-subheader>My Account</v-subheader>
                                <v-list-item>My Wishlist</v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    <strong>© Copyright {{ new Date().getFullYear() }}. All Rights Reserved.</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import {get} from 'vuex-pathify';

export default {
    name: 'App',

    data: () => ({
        search: '',
    }),
    computed: {
        categories: get('categories/all'),
        products: get('products/all')
    },

    mounted() {
        this.$store.dispatch('categories/load');
        this.$store.dispatch('products/load');
    },

    methods: {
        selectTag(category) {
            this.$router.push({name: 'Category', params: {catId: category}});
        }
    }
};
</script>

<style lang="scss">
html,
body {
    overflow-y: auto !important;
}

.cursor-pointer {
    cursor: pointer;
}

.text-center {
    text-align: center !important;
}

.text-shadow {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
}
</style>