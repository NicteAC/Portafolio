<template>
  <section id="intro" class="text-center mb-12">
    <h1 class="display-2 font-weight-light mb-8">Mi Portafolio</h1>

    <v-responsive class="mx-auto subtitle-1 grey--text" max-width="550">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      numquam voluptates dolorem? Et dolore tenetur est magni illo ex aspernatur
      beatae eligendi enim accusamus? In tempore dignissimos eos aperiam
      aliquam.
    </v-responsive>
    <v-container>
      <v-row>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-1 />
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-2 />
        </v-col>
                <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-3 />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-4 />
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-5 />
        </v-col>
                <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-6 />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-7 />
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-8 />
        </v-col>
                <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-9 />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-10 />
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-11 />
        </v-col>
                <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-12  />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <card-13 />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Card1 from "../../../components/Cards/Card1.vue";
import Card10 from "../../../components/Cards/Card10.vue";
import Card11 from "../../../components/Cards/Card11.vue";
import Card12 from "../../../components/Cards/Card12.vue";
import Card2 from "../../../components/Cards/Card2.vue";
import Card3 from "../../../components/Cards/Card3.vue";
import Card4 from "../../../components/Cards/Card4.vue";
import Card5 from "../../../components/Cards/Card5.vue";
import Card6 from "../../../components/Cards/Card6.vue";
import Card7 from "../../../components/Cards/Card7.vue";
import Card8 from "../../../components/Cards/Card8.vue";
import Card9 from "../../../components/Cards/Card9.vue";
import Card13 from "../../../components/Cards/Card13.vue";
export default {
  components: {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    Card7,
    Card8,
    Card9,
    Card10,
    Card11,
    Card12,
    Card13,
  },
  name: "PortfolioHeadline",
  Cards: {
    Card1: () => import("@/components/Cards/Card1"),
    Card2: () => import("@/components/Cards/Card2"),
    Card3: () => import("@/components/Cards/Card3"),
    Card4: () => import("@/components/Cards/Card4"),
    Card5: () => import("@/components/Cards/Card5"),
    Card6: () => import("@/components/Cards/Card6"),
    Card7: () => import("@/components/Cards/Card7"),
    Card8: () => import("@/components/Cards/Card8"),
    Card9: () => import("@/components/Cards/Card9"),
    Card10: () => import("@/components/Cards/Card10"),
    Card11: () => import("@/components/Cards/Card11"),
    Card12: () => import("@/components/Cards/Card12"),
    Card13: () => import("@/components/Cards/Card13"),
  },
};
</script>
