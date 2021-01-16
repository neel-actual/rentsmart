<template>
    <v-card
        :to ="{
            name: 'Product',
            params: {
                productId: item.id
            }
        }"
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
</template>

<script>
export default {
    name: "Product.vue",
    props: {
        item: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>