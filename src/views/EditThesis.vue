<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>
      <v-card>
        <v-card-text class="text-lg-center grey lighten-2 text-h4 --text">
          Add New Thesis
        </v-card-text>
        <v-card-text>
            <!-- <div class="title">Tilte</div>
            <input class=" ti" type="text" value="">
            <div class="title">Department</div>
            <input class=" ti" type="text" value="">
            <div class="title">ID</div>
            <input class=" ti" type="number" value="">
            <div class="title">Year</div>
            <input class=" ti" type="number" value="">
            <div class="title">Choose file</div>
            <input class=" ti" type="file" value="">
            <div class="submit">
                <button @click="sub()">Add New Thesis</button>
            </div> -->
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
             <v-text-field
                v-model="text"
                label="Tilte"
                outlined
                dense
                required
            ></v-text-field>
            <v-text-field
                v-model="text"
                label="Department"
                outlined
                dense
                required
            ></v-text-field>
             <v-text-field
                v-model="id"
                label="ID"
                outlined
                dense
                required
            ></v-text-field>
             <v-text-field
                v-model="id"
                label="Year"
                outlined
                dense
                required
            ></v-text-field>
              <v-file-input
                v-model="id"
                label="Choose file"
                outlined
                dense
                required
            ></v-file-input>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            text
            outlined
            purple
            @click="dialog = false"
          >
            Add thesis
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style scoped>
    .title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #006D77;
}
.ti{
    box-sizing: border-box;
    width: 400px;
    height: 40px;
    background: #EAF5DC;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 20px;
}
.submit{
    display: flex;
    border: 2px solid #000000;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    background-color:#46E343; 
}
.padding{
    padding: 0px;
}

</style>